export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  graduationYear: string;
  quote: string;
  avatarBg: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Amina Hassan Mohamud",
    role: "Hospital Staff Nurse",
    program: "Diploma in Nursing",
    graduationYear: "Class of 2024",
    quote:
      "Bilaal Health Science College transformed my career path. The intense practical hours in the skills laboratory gave me the confidence and clinical competency to deliver high-quality care at Garowe General Hospital immediately upon graduating.",
    avatarBg: "bg-blue-600"
  },
  {
    id: "2",
    name: "Farhan Abdi Farah",
    role: "Chief Pharmacy Technician",
    program: "Diploma in Pharmacy",
    graduationYear: "Class of 2023",
    quote:
      "The pharmacology lecturers at Bilaal are exceptionally knowledgeable and dedicated. Learning pharmaceutical compounding and inventory management helped me establish a successful community pharmacy practice in Puntland.",
    avatarBg: "bg-teal-600"
  },
  {
    id: "3",
    name: "Halima Mohamed Shire",
    role: "Community Midwifery Specialist",
    program: "Diploma in Midwifery",
    graduationYear: "Class of 2025",
    quote:
      "The hands-on simulation training and clinical rotations at local health centers prepared me to handle high-risk maternal deliveries safely. I am proud to save lives in my community every single day.",
    avatarBg: "bg-emerald-600"
  }
];
