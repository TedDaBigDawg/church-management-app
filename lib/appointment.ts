"use client";

import { z } from "zod";

const phoneNumberRegex = /^\+234[789][01]\d{8}$/;
export const SERVICES = [
  "Initial Consultation",
  "Follow-up Appointment",
  "Assessment",
  "Group Session",
  "Other",
] as const;

export const TIMESLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
] as const;

export const appointmentSchema = z.object({
  firstName: z.string().min(2, "Your first name is too short"),
  lastName: z.string().min(2, "Your last name is too short"),
  email: z.string().email(),
  phoneNumer: z
    .string({
      required_error: "Please enter a valid a phone number",
    })
    .regex(phoneNumberRegex, "Phone format (+2348012345678)"),
  date: z.string(),
  // service: z.enum(SERVICES, {
  //   required_error: "Please select a service",
  //   invalid_type_error: "This service does not exist",
  //   message: "Please select an option",
  // }),
  time: z.enum(TIMESLOTS, {
    required_error: "Please select a time",
    invalid_type_error: "This time does not exist",
    message: "Please select an option",
  }),
  notes: z.string().min(12, { message: "This note is too short" }),
});
