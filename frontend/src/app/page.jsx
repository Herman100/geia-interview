import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { GiMaterialsScience } from "react-icons/gi";
import { MdPersonSearch } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { ImAidKit } from "react-icons/im";

export default function page() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_text}>
          <h1 className={styles.title}>
            Easily Find Doctors and Book Appointments
          </h1>
          <p className={styles.description}>
            Find the best doctors near you and book appointments with ease. With
            just a few clicks, you can book an appointment with a doctor of your
            choice.
          </p>
          <Link href="/booking">
            <button type="button" className={styles.cta}>
              BOOK A DOCTOR
            </button>
          </Link>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/consulting.avif"
            width={350}
            height={350}
            alt="patient and doctor during checkup"
          ></Image>
          <div className={styles.bgcontainer}></div>
        </div>
      </div>
      <div className={styles.partners}>
        <h2 className={styles.partners_title}>Our Trusted Doctors Are From </h2>
        <Image
          src="/trustedcompanies.png"
          width={500}
          height={100}
          alt="partners with registered doctors"
        ></Image>
      </div>
      <div className={styles.whyus} id="services">
        <h2 className={styles.whyus_title}>Why Choose Medibook?</h2>
        <p className={styles.whyus_description}>
          Medibook is a platform that connects you with the best doctors in your
          area. Here are some reasons why you should choose us.
        </p>
        <div className={styles.whyus_grid}>
          <div className={styles.whyus_card}>
            <MdPersonSearch
              className={`${styles.MdPersonSearch} ${styles.icon}`}
            />
            <h3>Find Doctors Easily</h3>
            <p>
              Find the best doctors near you and book appointments with ease.
            </p>
          </div>
          <div className={styles.whyus_card}>
            <FaRegCalendarCheck
              className={`${styles.FaRegCalendarCheck} ${styles.icon}`}
            />
            <h3>Book Appointments</h3>
            <p>
              With just a few clicks, you can book an appointment with a doctor
              of your choice.
            </p>
          </div>
          <div className={styles.whyus_card}>
            <FaPeopleArrows
              className={`${styles.FaPeopleArrows} ${styles.icon}`}
            />
            <h3>Consultation</h3>
            <p>
              Consult with doctors online and get your queries answered by the
              best in the field.
            </p>
          </div>
          <div className={styles.whyus_card}>
            <ImAidKit className={`${styles.ImAidKit} ${styles.icon}`} />
            <h3>Emergency Services</h3>
            <p>
              Get emergency medical help from the best doctors in the field.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.subscribe}>
        <h2 className={styles.subscribe_title}>Subscribe to our Newsletter</h2>
        <p className={styles.subscribe_description}>
          Subscribe to our newsletter to get the latest updates on our services.
        </p>
        <div className={styles.subscribe_form}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.subscribe_input}
          />
          <button type="button" className={styles.subscribe_button}>
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
