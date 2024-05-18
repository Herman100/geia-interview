const addPatientToMongo = async (patient) => {
  await fetch("http://localhost:5000/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patient),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("User added to MongoDB", data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const addDoctorToMongo = async (doctor) => {
  await fetch("http://localhost:5000/doctors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(doctor),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("User added to MongoDB", data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const updatePatientToMongo = async (appointment) => {
  await fetch("http://localhost:5000/patients", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointment),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("User updated in MongoDB", data);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const getPatientAppointments = async (uid) => {
  const response = await fetch(`http://localhost:5000/patients?uid=${uid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export {
  addPatientToMongo,
  addDoctorToMongo,
  updatePatientToMongo,
  getPatientAppointments,
};
