import express from "express";
import { createPatient } from "../controllers/patient.controller.js";

//
const router = express.Router();

// Create and Save a new Patient
router.post("/", createPatient);

export default router;
