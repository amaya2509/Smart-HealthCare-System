import "dotenv/config";
import express from "express";
import cors from "cors";

import doctorRoutes from "./routes/doctorRoutes";
import patientRoutes from "./routes/patientRoutes";
import hospitalRoutes from "./routes/hospitalRoutes";
import appointmentRoutes from "./routes/appointmentRoutes";
import prescriptionRoutes from "./routes/prescriptionRoutes";
import paymentRoutes from "./routes/paymentRoutes";

const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(cors());

// Simple route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, World");
});

// Integrate the routes for Doctor, Patient, and Hospital
app.use("/api", doctorRoutes);
app.use("/api", patientRoutes);
app.use("/api", hospitalRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", paymentRoutes);
app.use("/api", prescriptionRoutes);
app.use("/api", paymentRoutes);

export default app;
