import Doctor from "../models/doctor.model.js";

// Create a doctor profile
const createDoctor = async (req, res) => {
  if (!req.body) {
    console.log("Please ensure there is data and not empty");
  }

  try {
    await Doctor.create(req.body);
    console.log("Doctor profile created successfuly");
  } catch (error) {
    console.log(error.message);
  }
};

export { createDoctor };
