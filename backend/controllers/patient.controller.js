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
    res.status(500).send(error);
  }
};

// Update a Patient identified by the patientId in the request
const updatePatient = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Patient content can not be empty",
    });
  }

  const id = req.body.uid;

  try {
    await Patient.updateOne(
      { uid: id },
      { $push: { appointments: req.body } },
      {
        useFindAndModify: false,
      }
    );
    res.status(200).send("Patient updated successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get PAtient appointments by uid
const getPatientAppointments = async (req, res) => {
  try {
    const patient = await Patient.find(
      { uid: req.query.uid },
      {
        appointments: 1,
        _id: 0,
      }
    );

    res.status(200).send(patient);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { createPatient, updatePatient, getPatientAppointments };
