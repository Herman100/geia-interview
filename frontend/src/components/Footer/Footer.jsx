import Link from "next/link";
import React from "react";
import styles from "./footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.links}>
          <div>
            <Link href="/" className={styles.logo}>
              🪨Medibook🩺
            </Link>
          </div>
          <div className={styles.footer_nav_inks}>
            <h5>USEFUL LINKS</h5>
            <Link href="/about" className={styles.footerLink}>
              About
            </Link>
            <Link href="/contact" className={styles.footerLink}>
              Contact
            </Link>
            <Link href="/" className={styles.footerLink}>
              Terms
            </Link>
            <Link href="/" className={styles.footerLink}>
              Privacy
            </Link>
          </div>
          <div className={styles.socialLinks}>
            <h5>SOCIALS</h5>
            <div>
              <Link href="https://twitter.com" className={styles.socialLink}>
                <FaTwitter className={styles.icon} />
                Twitter
              </Link>
            </div>
            <div>
              <Link href="https://facebook.com" className={styles.socialLink}>
                <FaFacebook className={styles.icon} />
                Facebook
              </Link>
            </div>
            <div>
              <Link href="https://instagram.com" className={styles.socialLink}>
                <AiFillInstagram className={styles.icon} />
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>© 2022 Medibook. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}
