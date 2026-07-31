export interface NewsItem {
  id: string;
  title: string;
  category: "Admissions" | "Graduation" | "Health Campaigns" | "Workshops" | "Campus News";
  date: string;
  summary: string;
  content: string;
  author: string;
  image: string;
}

export const newsData: NewsItem[] = [
  {
    id: "admissions-open-2026",
    title: "Admissions Now Open for Academic Year 2026/2027",
    category: "Admissions",
    date: "July 15, 2026",
    summary:
      "Bilaal Health Science College invites applications for all diploma programs in Pharmacy, Nursing, Midwifery, Nutrition, and Public Health.",
    content:
      "Bilaal Health Science College in Garowe, Puntland, Somalia is pleased to announce that applications for the upcoming academic year 2026/2027 are officially open. High school graduates with a passion for healthcare education are encouraged to apply online or visit our admissions office on campus. Entrance exams will commence in August.",
    author: "Admissions Office",
    image: "/images/hero.png"
  },
  {
    id: "clinical-skills-workshop",
    title: "Annual Advanced Emergency Nursing & Midwifery Practical Workshop Held",
    category: "Workshops",
    date: "June 28, 2026",
    summary:
      "Students participate in intensive hands-on clinical simulation training guided by expert medical consultants in Garowe.",
    content:
      "Our practical simulation laboratory hosted a 3-day advanced emergency medical skills workshop. Over 150 students in Nursing and Midwifery completed hands-on training in patient triage, emergency airway management, obstetric CPR, and neonatal care.",
    author: "Academic Affairs",
    image: "/images/skills-lab.png"
  },
  {
    id: "community-polio-campaign",
    title: "Public Health Students Lead Community Immunization Awareness in Garowe",
    category: "Health Campaigns",
    date: "May 14, 2026",
    summary:
      "Bilaal Public Health diploma candidates joined regional health teams for polio and routine vaccine outreach.",
    content:
      "In partnership with the Puntland Ministry of Health, Bilaal Health Science College students conducted house-to-house health education and vaccine awareness in Garowe districts, reaching over 2,500 families.",
    author: "Department of Public Health",
    image: "/images/campus.png"
  },
  {
    id: "pharmacy-lab-expansion",
    title: "Inauguration of New High-Tech Pharmaceutical Chemistry Laboratory",
    category: "Campus News",
    date: "April 02, 2026",
    summary:
      "State-of-the-art analytical equipment and drug compounding stations added to support the Diploma in Pharmacy program.",
    content:
      "Bilaal Health Science College continues to invest heavily in modern academic infrastructure. The newly inaugurated pharmaceutical testing lab features modern microscopes, digital titration instruments, and safety cabinets to support student practical work.",
    author: "College Directorate",
    image: "/images/pharmacy.png"
  }
];
