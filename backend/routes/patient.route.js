import express from "express";
import {
  createPatient,
  getPatientAppointments,
  updatePatient,
} from "../controllers/patient.controller.js";

//
const router = express.Router();

// Create and Save a new Patient
router.post("/", createPatient);
router.put("/", updatePatient);
router.get("/", getPatientAppointments);

export default router;
