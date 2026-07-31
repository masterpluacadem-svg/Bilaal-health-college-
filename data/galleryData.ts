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
    title: "Practical Clinical Skills Laboratory",
    category: "Laboratories",
    image: "/images/skills-lab.png",
    description: "Students honing clinical nursing procedures on high-fidelity simulation equipment."
  },
  {
    id: "g2",
    title: "Pharmaceutical Chemistry & Dispensing Lab",
    category: "Laboratories",
    image: "/images/pharmacy.png",
    description: "Pharmacy diploma candidates conducting chemical synthesis and formulation analysis."
  },
  {
    id: "g3",
    title: "Garowe Main Campus Building",
    category: "Campus",
    image: "/images/campus.png",
    description: "Exterior view of Bilaal Health Science College in Garowe, Puntland, Somalia."
  },
  {
    id: "g4",
    title: "Interactive Clinical Simulation",
    category: "Clinical Practice",
    image: "/images/hero.png",
    description: "Healthcare students practicing sterile techniques and diagnostic procedures."
  },
  {
    id: "g5",
    title: "Modern Lecture Hall",
    category: "Campus",
    image: "/images/skills-lab.png",
    description: "Spacious, air-conditioned lecture hall equipped with audiovisual learning tools."
  },
  {
    id: "g6",
    title: "Community Outreach Campaign",
    category: "Events",
    image: "/images/campus.png",
    description: "Public health students organizing preventative health assessments in local districts."
  }
];
