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
    image: "/images/classroom-students.jpg"

];
