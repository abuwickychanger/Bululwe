export const SCHOOL_NAME = "Bululwe Mixed Secondary School";
export const SCHOOL_NAME_SHORT = "Bululwe Mixed";
export const SCHOOL_MOTTO = "Knowledge is Power";
export const SCHOOL_LOCATION =
  "Central Marama, Butere Constituency, Kakamega County, Kenya";

export const HERO_IMAGES = [
  "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/a2888f226_generated_4495a80a.png",
  "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/56fa86679_generated_612ebd9b.png",
  "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/a51cb2a85_generated_d0dfc306.png",
  "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/740553c0c_generated_213b2b2c.png",
];

export const IMAGES = {
  crest:
    "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/a595467c0_generated_6e0a5ccd.png",
  campus:
    "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/a2888f226_generated_4495a80a.png",
  scienceLab:
    "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/56fa86679_generated_612ebd9b.png",
  sports:
    "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/a51cb2a85_generated_d0dfc306.png",
  library:
    "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/740553c0c_generated_213b2b2c.png",
  classroom:
    "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/d31066395_generated_fa18134f.png",
};

export const NAV_LINKS = [
  { label: "Home", labelSw: "Nyumbani", path: "/" },
  {
    label: "About",
    labelSw: "Kuhusu",
    path: "/about",
    children: [
      {
        label: "Our History",
        labelSw: "Historia Yetu",
        path: "/about#history",
      },
      { label: "Leadership", labelSw: "Uongozi", path: "/about#leadership" },
      { label: "Virtual Tour", labelSw: "Ziara ya Mtandaoni", path: "/campus" },
    ],
  },
  {
    label: "Academics",
    labelSw: "Masomo",
    path: "/academics",
    children: [
      { label: "Programs", labelSw: "Programu", path: "/academics#programs" },
      { label: "Calendar", labelSw: "Kalenda", path: "/academics#calendar" },
      {
        label: "Admissions",
        labelSw: "Udahili",
        path: "/academics#admissions",
      },
      {
        label: "Fee Calculator",
        labelSw: "Kikokotoo cha Ada",
        path: "/fees",
      },
      {
        label: "Subjects",
        labelSw: "Masomo",
        path: "/subjects",
      },
      {
        label: "Downloads",
        labelSw: "Vipakuliwa",
        path: "/downloads",
      },
    ],
  },
  { label: "Campus Life", labelSw: "Maisha ya Shule", path: "/campus" },
  { label: "News", labelSw: "Habari", path: "/news" },
  { label: "Community", labelSw: "Jamii", path: "/community" },
  { label: "Contact", labelSw: "Wasiliana", path: "/contact" },
];

export const STATS = [
  { value: 850, label: "Students", labelSw: "Wanafunzi", suffix: "+" },
  { value: 48, label: "Teaching Staff", labelSw: "Walimu", suffix: "" },
  {
    value: 95,
    label: "KCSE Pass Rate",
    labelSw: "Kiwango cha KCSE",
    suffix: "%",
  },
  {
    value: 32,
    label: "Sports Trophies",
    labelSw: "Vikombe vya Michezo",
    suffix: "+",
  },
];

export const ANNOUNCEMENTS = [
  {
    text: "Term 2 begins on May 12, 2026 — All students report by 8:00 AM",
    textSw:
      "Muhula wa 2 unaanza Mei 12, 2026 — Wanafunzi wote waripoti kufikia saa 2:00 asubuhi",
  },
  {
    text: "KCSE 2025 Results: Mean Grade C+ — Congratulations!",
    textSw: "Matokeo ya KCSE 2025: Wastani C+ — Hongera!",
  },
  {
    text: "Annual Sports Day — June 14, 2026",
    textSw: "Siku ya Michezo — Juni 14, 2026",
  },
];

export const FEE_DATA = {
  "Form 1": { Boarding: 45000, Day: 18500 },
  "Form 2": { Boarding: 42000, Day: 17500 },
  "Form 3": { Boarding: 44000, Day: 18000 },
  "Form 4": { Boarding: 46000, Day: 19500 },
};

export const FEE_ADDITIONALS = [
  { label: "Activity Fee", labelSw: "Ada ya Shughuli", amount: 2500 },
  { label: "Medical Cover", labelSw: "Bima ya Afya", amount: 1500 },
  { label: "Caution Levy (Refundable)", labelSw: "Dhamana (Inarejeshwa)", amount: 3000 },
];

export const CAREER_SUBJECTS = [
  {
    career: "Engineering",
    careerSw: "Uhandisi",
    icon: "Settings",
    iconSw: "Gear",
    compulsory: ["Mathematics", "Physics"],
    electives: [
      { label: "Physics / Chemistry / Geography", labelSw: "Fizikia / Kemia / Jiografia" },
    ],
    subjects: [
      { name: "Mathematics", compulsory: true, icon: "Calculator" },
      { name: "Physics", compulsory: true, icon: "Zap" },
      { name: "Chemistry", compulsory: false, icon: "FlaskRound" },
    ],
    subjects: [
      { name: "Mathematics", compulsory: true, icon: "Calculator" },
      { name: "Physics", compulsory: true, icon: "Zap" },
      { name: "Chemistry", compulsory: false, icon: "FlaskRound" },
      { name: "Biology", compulsory: false, icon: "Dna" },
      { name: "Geography", compulsory: false, icon: "Globe" },
      { name: "History", compulsory: false, icon: "BookOpen" },
      { name: "English", compulsory: false, icon: "BookText" },
      { name: "Kiswahili", compulsory: false, icon: "Languages" },
      { name: "Computer Studies", compulsory: false, icon: "Monitor" },
      { name: "Business Studies", compulsory: false, icon: "Briefcase" },
      { name: "CRE", compulsory: false, icon: "Church" },
      { name: "Agriculture", compulsory: false, icon: "Sprout" },
    ],
  },
  {
    career: "Medicine",
    careerSw: "Udaktari",
    icon: "HeartPulse",
    compulsory: ["Biology", "Chemistry"],
    electives: [
      { label: "Biology / Chemistry / Physics", labelSw: "Biolojia / Kemia / Fizikia" },
      { label: "Biology / Chemistry / Mathematics", labelSw: "Biolojia / Kemia / Hisabati" },
    ],
    subjects: [
      { name: "Mathematics", compulsory: false, icon: "Calculator" },
      { name: "Physics", compulsory: false, icon: "Zap" },
      { name: "Chemistry", compulsory: true, icon: "FlaskRound" },
      { name: "Biology", compulsory: true, icon: "Dna" },
      { name: "Geography", compulsory: false, icon: "Globe" },
      { name: "History", compulsory: false, icon: "BookOpen" },
      { name: "English", compulsory: false, icon: "BookText" },
      { name: "Kiswahili", compulsory: false, icon: "Languages" },
      { name: "Computer Studies", compulsory: false, icon: "Monitor" },
      { name: "Business Studies", compulsory: false, icon: "Briefcase" },
      { name: "CRE", compulsory: false, icon: "Church" },
      { name: "Agriculture", compulsory: false, icon: "Sprout" },
    ],
  },
  {
    career: "Law",
    careerSw: "Sheria",
    icon: "Scale",
    compulsory: ["English", "History"],
    electives: [
      { label: "History / CRE / English Literature", labelSw: "Historia / CRE / Fasihi ya Kiingereza" },
      { label: "Geography / History / Business", labelSw: "Jiografia / Historia / Biashara" },
    ],
    subjects: [
      { name: "Mathematics", compulsory: false, icon: "Calculator" },
      { name: "Physics", compulsory: false, icon: "Zap" },
      { name: "Chemistry", compulsory: false, icon: "FlaskRound" },
      { name: "Biology", compulsory: false, icon: "Dna" },
      { name: "Geography", compulsory: false, icon: "Globe" },
      { name: "History", compulsory: true, icon: "BookOpen" },
      { name: "English", compulsory: true, icon: "BookText" },
      { name: "Kiswahili", compulsory: false, icon: "Languages" },
      { name: "Computer Studies", compulsory: false, icon: "Monitor" },
      { name: "Business Studies", compulsory: false, icon: "Briefcase" },
      { name: "CRE", compulsory: false, icon: "Church" },
      { name: "Agriculture", compulsory: false, icon: "Sprout" },
    ],
  },
  {
    career: "Education",
    careerSw: "Ualimu",
    icon: "BookOpen",
    compulsory: ["English"],
    electives: [
      { label: "Any two teaching subjects", labelSw: "Masomo yoyote mawili ya kufundisha" },
    ],
    subjects: [
      { name: "Mathematics", compulsory: false, icon: "Calculator" },
      { name: "Physics", compulsory: false, icon: "Zap" },
      { name: "Chemistry", compulsory: false, icon: "FlaskRound" },
      { name: "Biology", compulsory: false, icon: "Dna" },
      { name: "Geography", compulsory: false, icon: "Globe" },
      { name: "History", compulsory: false, icon: "BookOpen" },
      { name: "English", compulsory: true, icon: "BookText" },
      { name: "Kiswahili", compulsory: false, icon: "Languages" },
      { name: "Computer Studies", compulsory: false, icon: "Monitor" },
      { name: "Business Studies", compulsory: false, icon: "Briefcase" },
      { name: "CRE", compulsory: false, icon: "Church" },
      { name: "Agriculture", compulsory: false, icon: "Sprout" },
    ],
  },
  {
    career: "Business",
    careerSw: "Biashara",
    icon: "Briefcase",
    compulsory: ["Mathematics", "Business Studies"],
    electives: [
      { label: "Business / Economics / Geography", labelSw: "Biashara / Uchumi / Jiografia" },
    ],
    subjects: [
      { name: "Mathematics", compulsory: true, icon: "Calculator" },
      { name: "Physics", compulsory: false, icon: "Zap" },
      { name: "Chemistry", compulsory: false, icon: "FlaskRound" },
      { name: "Biology", compulsory: false, icon: "Dna" },
      { name: "Geography", compulsory: false, icon: "Globe" },
      { name: "History", compulsory: false, icon: "BookOpen" },
      { name: "English", compulsory: false, icon: "BookText" },
      { name: "Kiswahili", compulsory: false, icon: "Languages" },
      { name: "Computer Studies", compulsory: false, icon: "Monitor" },
      { name: "Business Studies", compulsory: true, icon: "Briefcase" },
      { name: "CRE", compulsory: false, icon: "Church" },
      { name: "Agriculture", compulsory: false, icon: "Sprout" },
    ],
  },
  {
    career: "ICT",
    careerSw: "TEHAMA",
    icon: "Monitor",
    compulsory: ["Mathematics", "Computer Studies"],
    electives: [
      { label: "Computer Studies / Physics / Mathematics", labelSw: "TEHAMA / Fizikia / Hisabati" },
    ],
    subjects: [
      { name: "Mathematics", compulsory: true, icon: "Calculator" },
      { name: "Physics", compulsory: false, icon: "Zap" },
      { name: "Chemistry", compulsory: false, icon: "FlaskRound" },
      { name: "Biology", compulsory: false, icon: "Dna" },
      { name: "Geography", compulsory: false, icon: "Globe" },
      { name: "History", compulsory: false, icon: "BookOpen" },
      { name: "English", compulsory: false, icon: "BookText" },
      { name: "Kiswahili", compulsory: false, icon: "Languages" },
      { name: "Computer Studies", compulsory: true, icon: "Monitor" },
      { name: "Business Studies", compulsory: false, icon: "Briefcase" },
      { name: "CRE", compulsory: false, icon: "Church" },
      { name: "Agriculture", compulsory: false, icon: "Sprout" },
    ],
  },
];

export const DOWNLOAD_FILES = [
  {
    name: "Form 1 Admission Form 2026",
    nameSw: "Fomu ya Udahili wa Form 1 2026",
    category: "Admission Forms",
    size: "245 KB",
    url: "#",
  },
  {
    name: "Transfer Form",
    nameSw: "Fomu ya Uhamisho",
    category: "Admission Forms",
    size: "180 KB",
    url: "#",
  },
  {
    name: "School Prospectus 2026",
    nameSw: "Muhtasari wa Shule 2026",
    category: "Admission Forms",
    size: "1.2 MB",
    url: "#",
  },
  {
    name: "Term 2 Timetable 2026",
    nameSw: "Ratiba ya Muhula wa 2 2026",
    category: "Academic Timetables",
    size: "320 KB",
    url: "#",
  },
  {
    name: "Exam Invigilation Schedule",
    nameSw: "Ratiba ya Uangalizi wa Mtihani",
    category: "Academic Timetables",
    size: "195 KB",
    url: "#",
  },
  {
    name: "End of Year Exam Timetable",
    nameSw: "Ratiba ya Mtihani wa Mwisho wa Mwaka",
    category: "Academic Timetables",
    size: "280 KB",
    url: "#",
  },
  {
    name: "April Holiday Assignment - Form 1",
    nameSw: "Kazi ya Likizo ya Aprili - Form 1",
    category: "Holiday Assignments",
    size: "510 KB",
    url: "#",
  },
  {
    name: "April Holiday Assignment - Form 2",
    nameSw: "Kazi ya Likizo ya Aprili - Form 2",
    category: "Holiday Assignments",
    size: "540 KB",
    url: "#",
  },
  {
    name: "April Holiday Assignment - Form 3",
    nameSw: "Kazi ya Likizo ya Aprili - Form 3",
    category: "Holiday Assignments",
    size: "560 KB",
    url: "#",
  },
  {
    name: "April Holiday Assignment - Form 4",
    nameSw: "Kazi ya Likizo ya Aprili - Form 4",
    category: "Holiday Assignments",
    size: "600 KB",
    url: "#",
  },
];

export const HOUSES = [
  {
    name: "Eagle House",
    nameSw: "Nyumba ya Tai",
    color: "#003E90",
    points: 1240,
    motto: "Soar High",
  },
  {
    name: "Lion House",
    nameSw: "Nyumba ya Simba",
    color: "#D4AF37",
    points: 1180,
    motto: "Courage & Strength",
  },
  {
    name: "Phoenix House",
    nameSw: "Nyumba ya Phoenix",
    color: "#CC3300",
    points: 1150,
    motto: "Rise Again",
  },
  {
    name: "Dolphin House",
    nameSw: "Nyumba ya Pomboo",
    color: "#0066CC",
    points: 1100,
    motto: "Wisdom in Motion",
  },
];

export const DEPARTMENTS = [
  "Sciences",
  "Mathematics",
  "Languages",
  "Humanities",
  "Technical",
  "Creative Arts",
];

export const ACADEMIC_PROGRAMS = {
  stem: [
    { name: "Mathematics", desc: "Pure Mathematics, Applied Mathematics" },
    { name: "Physics", desc: "Mechanics, Thermodynamics, Optics" },
    { name: "Chemistry", desc: "Organic, Inorganic, Physical Chemistry" },
    { name: "Biology", desc: "Botany, Zoology, Genetics" },
    { name: "Computer Studies", desc: "Programming, Databases, Networking" },
  ],
  humanities: [
    { name: "English", desc: "Literature, Grammar, Creative Writing" },
    { name: "Kiswahili", desc: "Fasihi, Sarufi, Insha" },
    {
      name: "History & Government",
      desc: "Kenyan History, World History, Governance",
    },
    { name: "Geography", desc: "Physical Geography, Human Geography" },
    { name: "CRE/IRE", desc: "Christian & Islamic Religious Education" },
    { name: "Business Studies", desc: "Commerce, Accounting, Economics" },
  ],
};

export const CALENDAR_EVENTS = [
  {
    date: "2026-05-12",
    title: "Term 2 Opens",
    titleSw: "Muhula 2 Unafunguliwa",
    category: "academic",
  },
  {
    date: "2026-06-01",
    title: "Mid-Term Exams Begin",
    titleSw: "Mitihani ya Katikati ya Muhula",
    category: "exams",
  },
  {
    date: "2026-06-14",
    title: "Annual Sports Day",
    titleSw: "Siku ya Michezo",
    category: "sports",
  },
  {
    date: "2026-06-15",
    title: "Madaraka Day",
    titleSw: "Siku ya Madaraka",
    category: "holiday",
  },
  {
    date: "2026-07-20",
    title: "End of Term Exams",
    titleSw: "Mitihani ya Mwisho wa Muhula",
    category: "exams",
  },
  {
    date: "2026-08-01",
    title: "Term 2 Closes",
    titleSw: "Muhula 2 Unafungwa",
    category: "academic",
  },
  {
    date: "2026-09-01",
    title: "Term 3 Opens",
    titleSw: "Muhula 3 Unafunguliwa",
    category: "academic",
  },
  {
    date: "2026-10-20",
    title: "KCSE Exams Begin",
    titleSw: "Mitihani ya KCSE Inaanza",
    category: "exams",
  },
  {
    date: "2026-10-20",
    title: "Mashujaa Day",
    titleSw: "Siku ya Mashujaa",
    category: "holiday",
  },
  {
    date: "2026-12-12",
    title: "Jamhuri Day",
    titleSw: "Siku ya Jamhuri",
    category: "holiday",
  },
];

export const FAQ_DATA = [
  {
    q: "What are the admission requirements?",
    qSw: "Mahitaji ya udahili ni yapi?",
    a: "Students must have completed KCPE with a minimum of 250 marks. Admission forms are available at the school office or downloadable from our website.",
    aSw: "Wanafunzi lazima wawe wamekamilisha KCPE na alama za chini za 250.",
  },
  {
    q: "What is the fee structure?",
    qSw: "Muundo wa ada ni upi?",
    a: "As a sub-county school, we follow government guidelines on subsidized secondary education. Details are shared during admission.",
    aSw: "Kama shule ya kata, tunafuata miongozo ya serikali kuhusu elimu ya sekondari ya ruzuku.",
  },
  {
    q: "What co-curricular activities are available?",
    qSw: "Shughuli gani za ziada zinapatikana?",
    a: "We offer football, netball, volleyball, athletics, drama, debate club, science club, and music festivals.",
    aSw: "Tunatoa mpira wa miguu, netball, volleyball, riadha, drama, klabu ya mjadala, na tamasha za muziki.",
  },
  {
    q: "Is boarding available?",
    qSw: "Kuna bweni?",
    a: "Bululwe Mixed Secondary School operates as a day and boarding school to accommodate students from various locations.",
    aSw: "Shule ya Bululwe Mixed inafanya kazi kama shule ya mchana na bweni.",
  },
  {
    q: "What is the student-teacher ratio?",
    qSw: "Uwiano wa wanafunzi na walimu ni upi?",
    a: "We maintain a ratio of approximately 18:1, ensuring personalized attention for every student.",
    aSw: "Tunashikilia uwiano wa takriban 18:1.",
  },
];

export const STAFF_DIRECTORY = [
  {
    name: "Mr. Joseph Wekesa",
    role: "Principal",
    dept: "Administration",
    hours: "Mon-Fri 8:00-16:00",
  },
  {
    name: "Mrs. Grace Akinyi",
    role: "Deputy Principal",
    dept: "Administration",
    hours: "Mon-Fri 8:00-16:00",
  },
  {
    name: "Mr. David Ochieng",
    role: "Head of Sciences",
    dept: "Sciences",
    hours: "Mon-Fri 8:00-15:00",
  },
  {
    name: "Mrs. Faith Wanjiku",
    role: "Head of Mathematics",
    dept: "Mathematics",
    hours: "Mon-Fri 8:00-15:00",
  },
  {
    name: "Mr. Peter Otieno",
    role: "Head of Languages",
    dept: "Languages",
    hours: "Mon-Fri 8:00-15:00",
  },
  {
    name: "Mrs. Agnes Nafula",
    role: "Head of Humanities",
    dept: "Humanities",
    hours: "Mon-Fri 8:00-15:00",
  },
  {
    name: "Mr. Samuel Barasa",
    role: "Games Master",
    dept: "Technical",
    hours: "Mon-Fri 8:00-16:00",
  },
  {
    name: "Mrs. Esther Mukhwana",
    role: "Dean of Students",
    dept: "Administration",
    hours: "Mon-Fri 8:00-16:00",
  },
  {
    name: "Mr. John Simiyu",
    role: "Computer Studies Teacher",
    dept: "Technical",
    hours: "Mon-Fri 8:00-15:00",
  },
  {
    name: "Mrs. Mercy Okoth",
    role: "Music & Arts Teacher",
    dept: "Creative Arts",
    hours: "Mon-Fri 8:00-15:00",
  },
];

export const TESTIMONIALS = [
  {
    name: "Faith Akinyi",
    role: "Form 4 Graduate, 2025",
    quote: "Bululwe shaped me into a confident and disciplined young woman. The teachers believed in me even when I doubted myself. I scored a B+ and now I'm headed to university to study Medicine.",
    quoteSw: "Bululwe ilinichagua kuwa mwanamke mwenye ujasiri na nidhamu. Walimu waliniamini hata nilipokuwa na shaka. Nimepata B+ na sasa ninaelekea chuo kikuu kusoma Udaktari.",
    avatar: "",
  },
  {
    name: "James Omondi",
    role: "Form 4 Graduate, 2024",
    quote: "The science lab at Bululwe gave me hands-on experience that made Physics and Chemistry come alive. I'm now pursuing Engineering at the University of Nairobi.",
    quoteSw: "Maabara ya sayansi Bululwe ilinipa uzoefu wa vitendo uliofanya Fizikia na Kemia kuwa hai. Sasa nasoma Uhandisi katika Chuo Kikuu cha Nairobi.",
    avatar: "",
  },
  {
    name: "Mary Wanjiku",
    role: "Parent",
    quote: "Choosing Bululwe for my daughter was the best decision. The discipline and academic support transformed her grades from average to excellent in just one term.",
    quoteSw: "Kuchagua Bululwe kwa binti yangu lilikuwa uamuzi bora. Nidhamu na msaada wa kitaaluma ulibadilisha alama zake kutoka wastani hadi bora kwa muhula mmoja tu.",
    avatar: "",
  },
  {
    name: "Peter Kamau",
    role: "Form 4 Graduate, 2023",
    quote: "Bululwe taught me that success is a product of hard work and determination. From humble beginnings, I scored a clean A- and joined Strathmore University.",
    quoteSw: "Bululwe ilinifundisha kuwa mafanikio ni matokeo ya bidii na dhamira. Kuanzia mwanzo mdogo, nilipata A- safi na kujiunga na Chuo Kikuu cha Strathmore.",
    avatar: "",
  },
  {
    name: "Sarah Chelangat",
    role: "Form 3 Student",
    quote: "The boarding facilities are comfortable and the food is great! But what I love most is the library — it's my favourite place to study and prepare for my exams.",
    quoteSw: "Mabweni ni mazuri na chakula ni kitamu! Lakini ninachokipenda zaidi ni maktaba — ni mahali napenda kusoma na kujiandaa kwa mitihani yangu.",
    avatar: "",
  },
];
