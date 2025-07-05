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

// User registration schema
export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  phone: z.string().optional(),
});

// Login schema
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

// Profile update schema
export const profileUpdateSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().optional(),
});

// Mass intention schema
export const massIntentionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  intention: z.string().min(1, "Intention is required"),
  massId: z.string().min(1, "Mass selection is required"),
});

// Thanksgiving schema
export const thanksgivingSchema = z.object({
  description: z.string().min(1, "Description is required"),
  massId: z.string().min(1, "Mass selection is required"),
});

// Payment schema
export const paymentSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .transform((val) => Number(val)),
  type: z.enum(["DONATION", "OFFERING"], {
    errorMap: () => ({ message: "Invalid payment type" }),
  }),
  category: z.string().optional(),
  description: z.string().optional(),
  goalId: z.string().optional(),
});

// Church info schema
export const churchInfoSchema = z.object({
  name: z.string().min(1, "Church name is required"),
  address: z.string().min(1, "Address is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Please enter a valid email address"),
  mission: z.string().optional(),
  vision: z.string().optional(),
  history: z.string().optional(),
});

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

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name is too short",
  }),
  email: z.string().email(),
  subject: z.string().min(2, { message: "Subject is too short" }),
  message: z.string().min(11, {
    message: "The body is too short",
  }),
  phone: z
    .string({
      required_error: "Please enter a valid a phone number",
    })
    .regex(phoneNumberRegex, "Phone format (+2348012345678)"),
});
