import express from "express";
import { createDoctor } from "../controllers/doctor.controller.js";

const router = express.Router();

router.post("/", createDoctor);

export default router;
