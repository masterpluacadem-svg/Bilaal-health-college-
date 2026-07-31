export interface GalleryItem {
  id: string;
  title: string;
  category: "Campus" | "Laboratories" | "Clinical Practice" | "Graduation" | "Events";
  image: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Practical Clinical Skills Lab",
    category: "Laboratories",
    image: "/images/clinical-practice.jpg",
    description: "Bilaal health students practicing sterile clinical procedures and diagnostics in the laboratory."
  },
  {
    id: "g2",
    title: "Interactive Clinical Science Lecture",
    category: "Laboratories",
    image: "/images/projector-lecture.jpg",
    description: "Lecturer demonstrating healthcare procedures and medical concepts using interactive digital projectors."
  },
  {
    id: "g3",
    title: "Bilaal Health Science Classrooms",
    category: "Campus",
    image: "/images/classroom-students.jpg",
    description: "Students in white coats attending a healthcare lecture in one of our clean, modern campus classrooms in Garowe."
  },
  {
    id: "g4",
    title: "Community Outreach Practical Training",
    category: "Clinical Practice",
    image: "/images/outdoor-practice.jpg",
    description: "Students practicing health checks and community health assessments outdoors on campus."
  },
  {
    id: "g5",
    title: "Academic Seminar & Presentations",
    category: "Campus",
    image: "/images/classroom-presentation.jpg",
    description: "A seminar presentation led by qualified lecturers showcasing medical research and clinical case studies."
  },
  {
    id: "g6",
    title: "Classroom Lecture Sessions",
    category: "Campus",
    image: "/images/classroom-backview.jpg",
    description: "Lecture room perspective with students actively participating in health science seminars."
  },
  {
    id: "g7",
    title: "Full Student & Instructor Body",
    category: "Events",
    image: "/images/group-outdoors.jpg",
    description: "Group portrait of the Bilaal Health Science College students and administrative lecturers on the campus courtyard."
  },
  {
    id: "g8",
    title: "Healthcare Training Cohort",
    category: "Events",
    image: "/images/female-students-group.jpg",
    description: "Group of female health science students in lab coats and stethoscopes standing in front of the Bilaal welcome sign."
  },
  {
    id: "g9",
    title: "Midwifery & Nursing Practical Team",
    category: "Clinical Practice",
    image: "/images/students-welcome-sign.png",
    description: "Accredited diploma candidates collaborating during practical nursing and midwifery simulation prep."
  },
  {
    id: "g10",
    title: "Clinical Equipment Setup",
    category: "Laboratories",
    image: "/images/projector-equipment-lab.jpg",
    description: "Close-up view of interactive projector tools, clinical mock-up equipment, and diagnostic tools in the simulation lab."
  },
  {
    id: "g11",
    title: "Infant Care & Neonatal Practice",
    category: "Clinical Practice",
    image: "/images/neonatal-simulation.jpg",
    description: "Midwifery and nursing candidates practicing neonatal resuscitation procedures on infant simulation models."
  },
  {
    id: "g12",
    title: "Diagnostic & Blood Pressure Check",
    category: "Clinical Practice",
    image: "/images/blood-pressure-check.jpg",
    description: "Health science students practicing manual blood pressure measurement using a sphygmomanometer."
  },
  {
    id: "g13",
    title: "Instructor Guided Presentations",
    category: "Campus",
    image: "/images/instructor-presentation.jpg",
    description: "Specialized lecturer instructing students on clinical protocols using visual slide presentations."
  },
  {
    id: "g14",
    title: "Garowe Main Campus Building",
    category: "Campus",
    image: "/images/campus.png",
    description: "Exterior view of the main Bilaal Health Science College campus in Garowe, Puntland, Somalia."
  }
];
