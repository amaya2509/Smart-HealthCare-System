// doctorRepository.ts
import Doctor from "../models/Doctor";

// Fetch all doctors
export const getAllDoctors = async () => {
  return await Doctor.find().populate("availableHospitals", "name");
};

// Find a doctor by email
export const findDoctorByEmail = async (email: string) => {
  return await Doctor.findOne({ email });
};

// Fetch a doctor by Id
export const getDoctorById = async (id: string) => {
  return await Doctor.findById(id);
};

// Create a new doctor
export const createDoctor = async (doctorData: {
  name: string;
  specialization: string;
  phone: string;
  email: string;
}) => {
  const doctor = new Doctor(doctorData);
  return await doctor.save();
};

// Update a doctor's information
export const updateDoctor = async (
  id: string,
  doctorData: {
    name?: string;
    specialization?: string;
    phone?: string;
    email?: string;
    availableHospitals?: string[];
  }
) => {
  return await Doctor.findByIdAndUpdate(id, doctorData, { new: true });
};

// Delete a doctor
export const deleteDoctor = async (id: string) => {
  return await Doctor.findByIdAndDelete(id);
};
