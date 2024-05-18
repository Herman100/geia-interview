"use client";
import React, { useEffect, useState } from "react";
import styles from "./appointment.module.css";
import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";
import { useAuth } from "@/contexts/AuthContext/AuthContext";
import { getPatientAppointments } from "../db/createUser";

export default function Appointment() {
  const { currentUser } = useAuth();
  const [userId, setUserId] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (currentUser) {
      setUserId(currentUser.uid);
    }
  }, [currentUser]);

  //   useEffect(() => {
  //     if (userId) {
  //       getPatientAppointments(userId).then((data) => {
  //         console.log(data);
  //         setAppointments(data.appointments);
  //       });
  //     }
  //   }, [userId]);

  useEffect(() => {
    if (userId) {
      getPatientAppointments(userId)
        .then((data) => {
          console.log("Data:", data);
          if (data && data.length > 0 && Array.isArray(data[0].appointments)) {
            setAppointments(data[0].appointments);
          } else {
            console.log("No appointments found for this user.");
          }
        })
        .catch((error) => {
          console.error("Error fetching appointments:", error);
        });
    }
  }, [userId]);

  return (
    <ProtectedRoute>
      <div className={styles.appointment}>
        <h1 className={styles.appointment_title}>Appointments</h1>
        <p>
          Here you can see all your appointments. If you want to book a new
          appointment, please go to the booking page.
        </p>
        <div className={styles.appointment_list}>
          {appointments &&
            appointments.map((appointment, index) => (
              <div
                key={appointment.date + index}
                className={styles.appointment_card}
              >
                <h3>Appointment {index + 1}</h3>
                <p>
                  <strong>Name of Patient:</strong> {appointment.name}
                </p>
                {/* <p>
                  <strong>Age:</strong> {appointment.age}
                </p> */}
                <p>
                  <strong>Appointment Date:</strong> {appointment.date}
                </p>
                <p>
                  <strong>Time:</strong> {appointment.time}
                </p>
                <p>
                  <strong>Email:</strong> {appointment.email}
                </p>
                <p>
                  <strong>Phone:</strong> +233 {appointment.phone}
                </p>
                <p>
                  <strong>Service:</strong> {appointment.service}
                </p>
                <p>
                  <strong>Message:</strong> {appointment.message}
                </p>
              </div>
            ))}

          {appointments.length === 0 ? <p>No appointments found</p> : null}
        </div>
      </div>
    </ProtectedRoute>
  );
}
