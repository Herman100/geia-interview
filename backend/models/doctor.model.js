import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    age: {
      type: Number,
      required: false,
    },
    role: {
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
    uid: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      required: false,
    },
    field: {
      type: String,
      required: false,
    },
    available: {
      type: Boolean,
      required: false,
    },
    appointmentDays: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
