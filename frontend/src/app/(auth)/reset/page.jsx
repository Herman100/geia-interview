"use client";
import { useAuth } from "@/contexts/AuthContext/AuthContext";
import styles from "../login/login.module.css";
import Link from "next/link";
import { useRef, useState } from "react";

export default function ForgotPassword() {
  const emailRef = useRef();

  const { resetPassword } = useAuth();

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (emailRef.current.value === "") {
      return setError("Please provide an email address");
    }

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your email for further instructions");
      emailRef.current.value = "";
    } catch (error) {
      setError("Account login failed");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.form_container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.heading}>FORGOT PASSWORD</h1>
            <div className={styles.input_container}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                ref={emailRef}
                className={styles.input}
                required
              />
            </div>

            <button
              type="button"
              disabled={loading}
              text="Reset Password"
              onClick={handleSubmit}
              className={styles.resetButton}
            >
              Reset Password
            </button>
            {error && <p className={styles.error}>🔴 {error}</p>}
            {message && <p className={styles.message}>✅ {message}</p>}
            <div className={styles.renavigation}>
              <p className={styles.account_status}>
                I already have an account? <Link href="/login">Login</Link>
              </p>
              <p className={styles.account_status}>
                {`Don't have an account?`} <Link href="/signup">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
// {error && <p className={styles.error}>🔴 {error}</p>}
// {message && <p className={styles.message}>✅ {message}</p>}
