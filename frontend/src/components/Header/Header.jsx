"use client";
import React from "react";
import links from "./nav_links";
import styles from "./header.module.css";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  // if (currentUser) {
  //   console.log(currentUser.email);
  //   console.log(currentUser.uid);
  // }

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(currentUser);
  return (
    <>
      <div className={styles.header}>
        <div>
          <Link href="/" className={styles.logo}>
            🪨Medibook🩺
          </Link>
        </div>
        <div>
          {links.map((link) => (
            <a key={link.path} href={link.path} className={styles.links}>
              {link.name}
            </a>
          ))}
          {currentUser !== null ? (
            <>
              <Link href="/appointments" className={styles.links}>
                My Appointments
              </Link>
              <Link href="/profile" className={styles.links}>
                Profile
              </Link>
            </>
          ) : null}
        </div>
        <div>
          {currentUser === null ? (
            <div>
              <Link href="/login" className={styles.login}>
                Login
              </Link>
            </div>
          ) : (
            <div>
              <Link
                href="/logout"
                className={styles.logout}
                onClick={(e) => handleLogout(e)}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
