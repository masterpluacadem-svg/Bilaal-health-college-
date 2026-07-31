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
    title: "Garowe Main Campus Building",
    category: "Campus",
    image: "/images/campus.png",
    description: "Exterior view of the main Bilaal Health Science College campus in Garowe, Puntland, Somalia."
  }
];
