"use client";
import { useRef, useState } from "react";
import styles from "../login/login.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { readStaffIds } from "@/db/crud/read_staff_id";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { addPatientToMongo, addDoctorToMongo } from "@/app/db/createUser";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const userRef = useRef();
  const staffIdRef = useRef();

  const { signup } = useAuth();
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userRole, setUserRole] = useState("patient");
  const [staffId, setStaffId] = useState("");

  function handleUserRoleChange(e) {
    setUserRole(e.target.value);
  }

  function handleStaffIdChange(e) {
    setStaffId(e.target.value);
  }

  // console.log(staffId);

  async function handleSubmit(e) {
    e.preventDefault();

    if (userRole === "staff") {
      const isStaff = await readStaffIds(staffId);
      if (!isStaff) {
        return setError("Invalid staff id");
      }
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      const userCredential = await signup(
        emailRef.current.value,
        passwordRef.current.value
      );

      const user = userCredential.user;

      console.log(user.email, user.uid, userRole);

      const userData = {
        email: user.email,
        uid: user.uid,
        role: userRole,
        // staff_id: userRole === "faculty" && staffId,
      };

      // console.log(JSON.stringify(patient));

      if (userRole === "patient") {
        addPatientToMongo(userData);
      }
      if (userRole === "doctor") {
        addDoctorToMongo(userData);
      }

      passwordRef.current.value = "";
      passwordConfirmRef.current.value = "";
      emailRef.current.value = "";
      router.push("/login");
      // console.log("User created");
    } catch (error) {
      setError("Make sure you have entered a valid email and password");
    }
    setLoading(false);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.heading}>SIGN UP</h1>
            <div className={styles.input_container}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={emailRef}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.input_container}>
              <select
                className={styles.input}
                ref={userRef}
                id="userRole"
                onChange={handleUserRoleChange}
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </div>

            {userRole === "faculty" && (
              <div className={styles.input_container}>
                <input
                  type="staff"
                  name="staff"
                  id="staff"
                  placeholder="enter doctor id"
                  ref={staffIdRef}
                  required
                  className={styles.input}
                  onChange={handleStaffIdChange}
                />
              </div>
            )}

            <div className={styles.input_container}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                ref={passwordRef}
                min={8}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.input_container}>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                min={8}
                required
                className={styles.input}
              />
            </div>
            <button
              type="button"
              disabled={loading}
              text="Sign Up"
              onClick={handleSubmit}
              className={styles.loginButton}
            >
              Sign Up
            </button>
            {error && <p className={styles.error}>{error}</p>}

            <p className={styles.account_status}>
              Already have an account?{" "}
              <Link href="/login" className={styles.account_link}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

// {error && <p className={styles.error}>{error}</p>}
