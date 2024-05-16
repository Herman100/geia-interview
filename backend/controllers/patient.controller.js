import Patient from "../models/patient.model.js";

// Create and Save a new Patient
const createPatient = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Patient content can not be empty",
    });
  }

  try {
    await Patient.create(req.body);
    res.status(201).send("Patient created successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { createPatient };
