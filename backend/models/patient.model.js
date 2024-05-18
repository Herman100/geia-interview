import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },

    uid: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },

    appointments: [
      {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        date: { type: String, required: true },
        time: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: Number, required: true },
        service: { type: String, required: true },
        message: { type: String, required: false },
      },
    ],

    profession: {
      type: String,
      required: false,
    },

    role: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
