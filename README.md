# Medibook | Doctor Appointment Booking App :hospital:

Welcome to the Doctor Appointment Booking App! This application allows users to book appointments with doctors. :date:

## Table of Contents :bookmark_tabs:

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction :book:

This is a full-stack application built with Next.js for the frontend and Node.js, Express, and MongoDB for the backend. It provides a user-friendly interface for users to book appointments with doctors.

## Technologies :wrench:

- Next.js
- React
- HTML
- CSS
- Node.js
- Express
- MongoDB
- Firebase

## Getting Started :rocket:

### Frontend

To run the frontend application on your local server, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/doctor-appointment-booking-app.git`
2. Navigate to the project directory: `cd doctor-appointment-booking-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000`

### Firebase :fire:

To configure Firebase for the backend, follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Get credentials and replace them in the frontend db firebase file
3. Get all your necessary keys
4. Open the firebase.js file in the frontend directory.
5. Replace the required lines of code with your Firebase configuration:

### Backend :gear:

To run the backend server on your local machine, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/doctor-appointment-booking-app.git`
2. Navigate to the project directory: `cd doctor-appointment-booking-app`
3. Navigate to the backend directory: `cd backend`
4. Install the dependencies: `npm install`
5. Replace the MongoDB connection string in server.js with your own credentials. You can obtain the connection string from your MongoDB Atlas dashboard or use a local MongoDB instance.
6. Start the backend server: `npm start`
7. The backend server will be running on `http://localhost:5000`

## Usage :computer:

Once both the frontend and backend are running, you can navigate through the different pages to view available doctors and book appointments.

## Contributing :handshake:

- [Herman Kwamebour](mailto:hermankwamebour30@gmail.com)

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License :page_with_curl:

This project is licensed under the [MIT License](LICENSE).
