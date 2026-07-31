export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  duration: string;
  qualification: string;
  intake: string;
  entryRequirements: string[];
  careerOpportunities: string[];
  curriculum: {
    year: string;
    modules: string[];
  }[];
  learningOutcomes: string[];
  clinicalPractice: string;
  image: string;
}

export const programsData: Program[] = [
  {
    id: "pharmacy",
    slug: "pharmacy",
    title: "Diploma in Pharmacy",
    shortDescription:
      "Master pharmaceutical sciences, pharmacology, medication dispensing, compounding, and patient care management.",
    fullDescription:
      "The Diploma in Pharmacy program at Bilaal Health Science College is designed to train highly competent pharmacy technicians and pharmaceutical professionals. Students acquire thorough expertise in pharmacology, pharmaceutics, pharmaceutical chemistry, clinical pharmacy, and supply chain management suited for public and private healthcare settings across Somalia.",
    iconName: "Pill",
    duration: "2 Years (3 Semesters)",
    qualification: "Diploma in Pharmaceutical Sciences",
    intake: "September & March Intakes",
    entryRequirements: [
      "Secondary School Leaving Certificate (Form 4) with pass marks in Biology, Chemistry, and English.",
      "Passing score in the Bilaal Health College Entrance Assessment.",
      "Certified identity documentation (Somali National ID or Birth Certificate).",
      "Medical fitness certificate from a recognized health facility."
    ],
    careerOpportunities: [
      "Hospital Pharmacy Technician",
      "Retail & Community Pharmacy Dispenser",
      "Pharmaceutical Sales & Medical Representative",
      "Ministry of Health Drug Inspector Aide",
      "NGO Medical Logistics Coordinator"
    ],
    curriculum: [
      {
        year: "Year 1: Basic Medical & Pharmaceutical Sciences",
        modules: [
          "Human Anatomy & Physiology",
          "Pharmaceutical Organic Chemistry",
          "Medical Biochemistry",
          "Medical Microbiology & Immunology",
          "Introduction to Pharmacy & Ethics"
        ]
      },
      {
        year: "Year 2: Applied Pharmacology, Dispensing & Clinical Practice",
        modules: [
          "Pharmacology & Therapeutics I & II",
          "Pharmaceutics & Dispensing Technique",
          "Pharmaceutical Calculations & Compounding",
          "Pathophysiology & Disease Processes",
          "Health Supply Chain & Drug Logistics",
          "Clinical Pharmacy & Patient Counseling",
          "Toxicology & Drug Safety",
          "Pharmacy Law & Regulation in Somalia",
          "Hospital & Community Pharmacy Internship"
        ]
      }
    ],
    learningOutcomes: [
      "Safely prepare, compound, and dispense prescription and over-the-counter medications.",
      "Educate patients on medication dosage, administration, side effects, and drug interactions.",
      "Manage pharmaceutical inventories, cold-chain storage, and medical supply lines.",
      "Adhere strictly to medical ethics and national drug regulatory guidelines."
    ],
    clinicalPractice:
      "Includes 400 hours of clinical rotation in hospital pharmacies and community drug centers across Garowe and Puntland regional hospitals.",
    image: "/images/pharmacy_program.png"
  },
  {
    id: "nursing",
    slug: "nursing",
    title: "Diploma in Nursing",
    shortDescription:
      "Develop comprehensive clinical nursing skills, emergency care, surgical nursing, and compassionate patient care.",
    fullDescription:
      "The Diploma in Nursing is a premier program providing hands-on clinical training, emergency response practice, and evidence-based patient management. Graduates are prepared to deliver high-quality nursing care in acute care hospitals, maternal wards, outpatient clinics, and community health centers.",
    iconName: "Stethoscope",
    duration: "2 Years (3 Semesters)",
    qualification: "Diploma in General Nursing",
    intake: "September & March Intakes",
    entryRequirements: [
      "Secondary School Certificate (Form 4) with credits in Biology, Chemistry, and Mathematics/English.",
      "Successful completion of college admissions interview.",
      "Good physical and mental health status.",
      "Valid identification documents."
    ],
    careerOpportunities: [
      "General Staff Nurse in Public & Private Hospitals",
      "Emergency & Intensive Care Unit (ICU) Nurse",
      "Pediatric Care Specialist Nurse",
      "Community Health Outreach Nurse",
      "Clinical Supervisor in Health Centers"
    ],
    curriculum: [
      {
        year: "Year 1: Foundations of Nursing & Anatomy",
        modules: [
          "Human Anatomy & Physiology I & II",
          "Fundamentals of Nursing Practice",
          "Microbiology & Parasitology",
          "Nutrition in Health & Disease",
          "Health Assessment & Vital Signs"
        ]
      },
      {
        year: "Year 2: Medical-Surgical Nursing, Critical Care & Field Practice",
        modules: [
          "Medical-Surgical Nursing I & II",
          "Pharmacology for Nurses",
          "Pediatric & Child Health Nursing",
          "Infection Prevention & Control",
          "Emergency & Critical Care Nursing",
          "Community Health Nursing",
          "Nursing Leadership & Ward Management",
          "Clinical Internship at Garowe General Hospital"
        ]
      }
    ],
    learningOutcomes: [
      "Execute holistic nursing care plans using evidence-based clinical protocols.",
      "Perform intravenous therapies, wound dressings, medication administration, and emergency triage.",
      "Demonstrate high ethical standards and cultural sensitivity in patient interaction.",
      "Collaborate seamlessly with doctors, midwives, and public health officials."
    ],
    clinicalPractice:
      "600+ clinical practical hours in simulation laboratories and real-world clinical ward rotations at Puntland regional hospitals.",
    image: "/images/nursing_program.png"
  },
  {
    id: "midwifery",
    slug: "midwifery",
    title: "Diploma in Midwifery",
    shortDescription:
      "Specialized education in maternal care, safe childbirth delivery, prenatal monitoring, and newborn care.",
    fullDescription:
      "Designed to address critical maternal and child healthcare needs in Somalia, the Diploma in Midwifery empowers students with expert knowledge in prenatal monitoring, labor management, safe delivery, neonatal resuscitation, and family healthcare.",
    iconName: "HeartPulse",
    duration: "2 Years (3 Semesters)",
    qualification: "Diploma in Professional Midwifery",
    intake: "September & March Intakes",
    entryRequirements: [
      "Form 4 Certificate with pass in Biology and Science subjects.",
      "Passed College entrance interview.",
      "Commitment to maternal and newborn community healthcare."
    ],
    careerOpportunities: [
      "Maternity Ward Midwife Specialist",
      "Antenatal & Postnatal Clinic Coordinator",
      "Reproductive Health Project Specialist",
      "Community Maternal Health Officer",
      "Delivery Room Charge Nurse"
    ],
    curriculum: [
      {
        year: "Year 1: Foundation Sciences & Maternal Care",
        modules: [
          "Anatomy of Reproductive System",
          "Physiology of Pregnancy & Fetal Growth",
          "Basic Nursing & Infection Prevention",
          "Medical Biochemistry for Midwives",
          "Communication in Healthcare"
        ]
      },
      {
        year: "Year 2: Labor Management, Complications & Field Work",
        modules: [
          "Antenatal Care & Fetal Monitoring",
          "Normal Labor & Conduct of Safe Delivery",
          "Pharmacology in Obstetric Practice",
          "Neonatal Care & Resuscitation",
          "Postpartum Care & Lactation Support",
          "Obstetric Complications & Emergency Midwifery",
          "Family Planning & Reproductive Health",
          "Community Midwifery Practicum & Ward Rotation"
        ]
      }
    ],
    learningOutcomes: [
      "Conduct safe, dignified deliveries and manage routine antenatal visits.",
      "Identify high-risk obstetric complications and initiate prompt emergency referral.",
      "Provide essential newborn care, immunization guidance, and breastfeeding support.",
      "Promote community reproductive health education."
    ],
    clinicalPractice:
      "Includes supervised hands-on deliveries, maternity ward shifts, and primary healthcare clinic clinical attachments.",
    image: "/images/midwifery_program.png"
  },
  {
    id: "nutrition",
    slug: "nutrition",
    title: "Diploma in Nutrition",
    shortDescription:
      "Focus on clinical nutrition, therapeutic dietetics, community malnutrition response, and food security.",
    fullDescription:
      "The Diploma in Nutrition prepares specialists to assess, manage, and prevent nutritional deficiencies and diet-related chronic conditions. Students learn clinical dietetics, maternal-child nutrition, community assessment, and therapeutic feeding protocols key to public health in Somalia.",
    iconName: "Apple",
    duration: "2 Years (3 Semesters)",
    qualification: "Diploma in Human Nutrition & Dietetics",
    intake: "September & March Intakes",
    entryRequirements: [
      "Secondary Certificate (Form 4) with pass marks in Biology, Chemistry, and English.",
      "College entrance exam completion.",
      "National ID / Passport copy."
    ],
    careerOpportunities: [
      "Clinical Nutritionist in Hospitals",
      "Community Malnutrition Program Officer (UNICEF/WFP partner NGOs)",
      "Therapeutic Feeding Center Manager",
      "Dietary Counselor & Wellness Specialist",
      "Public Health Nutrition Researcher"
    ],
    curriculum: [
      {
        year: "Year 1: Human Biology & Food Chemistry",
        modules: [
          "Human Physiology & Nutritional Needs",
          "Food Chemistry & Microbiology",
          "Fundamentals of Human Nutrition",
          "Biochemistry & Metabolism",
          "Sociology of Food & Community Health"
        ]
      },
      {
        year: "Year 2: Clinical Nutrition, Malnutrition Response & Field Practicum",
        modules: [
          "Therapeutic Nutrition & Diet Therapy",
          "Maternal & Child Nutrition",
          "Nutritional Assessment Methods",
          "Public Health Nutrition & Food Security",
          "Malnutrition Emergency Management Protocols",
          "Food Safety, Sanitation & Hygiene",
          "Community Nutrition Field Research",
          "Hospital Clinical Dietetics Internship"
        ]
      }
    ],
    learningOutcomes: [
      "Conduct anthropometric assessments and diagnose nutritional deficiencies.",
      "Formulate therapeutic feeding diets for infants, pregnant mothers, and chronic care patients.",
      "Design and execute emergency nutrition interventions in crisis-affected areas.",
      "Advocate for food security and public health nutrition policy."
    ],
    clinicalPractice:
      "Field placements with humanitarian nutrition programs, outpatient therapeutic feeding centers (OTPs), and Garowe general hospital wards.",
    image: "/images/nutrition_program.png"
  },
  {
    id: "public-health",
    slug: "public-health",
    title: "Diploma in Public Health",
    shortDescription:
      "Learn epidemiology, disease prevention, environmental health, sanitation, and community health management.",
    fullDescription:
      "The Diploma in Public Health equips students with population health strategies, epidemic surveillance techniques, water and sanitation engineering basics, and health policy planning. Graduates lead disease prevention campaigns and public health interventions across Puntland.",
    iconName: "Activity",
    duration: "2 Years (3 Semesters)",
    qualification: "Diploma in Public Health Sciences",
    intake: "September & March Intakes",
    entryRequirements: [
      "Form 4 Certificate with pass in Science and Mathematics.",
      "College entrance assessment pass.",
      "Valid identification & passport photo."
    ],
    careerOpportunities: [
      "Public Health Officer",
      "Epidemiology Surveillance Assistant",
      "Environmental Health Inspector",
      "Water, Sanitation & Hygiene (WASH) Coordinator",
      "Health Education & Campaign Manager"
    ],
    curriculum: [
      {
        year: "Year 1: Principles of Public Health & Biology",
        modules: [
          "Introduction to Public Health",
          "Human Anatomy & Environmental Biology",
          "Principles of Epidemiology",
          "Biostatistics & Data Collection",
          "Community Health & Behavioural Science"
        ]
      },
      {
        year: "Year 2: Disease Control, environmental health & Outbreak Surveillance",
        modules: [
          "Communicable & Non-Communicable Disease Control",
          "Environmental Health & Sanitation (WASH)",
          "Health Promotion & Disease Prevention",
          "Occupational Health & Safety",
          "Health Policy & Health Systems in Somalia",
          "Outbreak Investigation & Surveillance",
          "Health Service Management & Leadership",
          "Public Health Field Internship"
        ]
      }
    ],
    learningOutcomes: [
      "Monitor disease trends, conduct field outbreak investigations, and compile health reports.",
      "Implement water quality testing, sanitation projects, and vector control programs.",
      "Manage community health education programs targeting polio, measles, and waterborne diseases.",
      "Coordinate public health interventions with local ministries and international partners."
    ],
    clinicalPractice:
      "Supervised field attachments with the Ministry of Health Puntland, regional public health departments, and rural outreach centers.",
    image: "/images/public_health_program.png"
  }
];
