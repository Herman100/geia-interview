"use client";
import Link from "next/link";
import styles from "./login.module.css";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value === "" || emailRef.current.value === "") {
      return setError("Password or Email is empty");
    }

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      router.push("/");
      passwordRef.current.value = "";
      emailRef.current.value = "";
    } catch (error) {
      setError("Account login failed. Invalid email or password");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <form className={styles.form}>
            <h1 className={styles.heading}>LOGIN</h1>
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
              <Link href="/reset" className={styles.password_forgot}>
                Forgot Password?
              </Link>
            </div>

            <button
              type="button"
              disabled={loading}
              text="Sign Up"
              onClick={handleSubmit}
              className={styles.loginButton}
            >
              Login
            </button>

            {error && <p className={styles.error}>🔴 {error}</p>}
            <div className={styles.renavigation}>
              <p className={styles.account_status}>
                {`Don't have an account?`}
                <Link href="/signup" className={styles.account_link}>
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
