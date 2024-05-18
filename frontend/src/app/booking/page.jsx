"use client";
import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";
import React, { useRef, useState } from "react";
import styles from "./booking.module.css";
import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { updatePatientToMongo } from "../db/createUser";

export default function Booking() {
  const formRef = useRef();
  const [formData, setFormData] = useState({});
  const { currentUser } = useAuth();
  // const { uid } = currentUser;

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFormData = {};
    newFormData.name = formRef.current.name.value;
    newFormData.age = formRef.current.age.value;
    newFormData.email = formRef.current.email.value;
    newFormData.phone = formRef.current.phone.value;
    newFormData.date = formRef.current.date.value;
    newFormData.time = formRef.current.time.value;
    newFormData.service = formRef.current.service.value;
    newFormData.message = formRef.current.message.value;
    newFormData.uid = currentUser.uid;
    setFormData(newFormData);
    // console.log(formData);
    updatePatientToMongo(newFormData);
    formRef.current.reset();
  };

  return (
    <ProtectedRoute>
      <div className={styles.booking}>
        <h1 className={styles.booking_title}>Book Appointment</h1>
        <p>
          To book an appointment, please kindly fill out the form below. Your
          appointment would be confirmed via email.
        </p>
        <div>
          <form
            className={styles.form}
            ref={formRef}
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              age="age"
              placeholder="Enter your age"
              min={0}
              max={120}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" required />
            <label htmlFor="service">Service:</label>
            <select id="service" name="service" required>
              <option value="checkup">Checkup</option>
              <option value="consultation">Consultation</option>
              <option value="specialist">Specialist</option>
              <option value="onchology">Onchology</option>
              <option value="Surgery">Surgery</option>
            </select>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="would you like to add any additional information?"
              required
            ></textarea>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}
