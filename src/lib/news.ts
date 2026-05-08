export interface Author {
  id: string;
  name: string;
  role: string;
  roleSw: string;
  avatar: string;
  bio: string;
  bioSw: string;
}

export interface Comment {
  id: string;
  author: string;
  body: string;
  date: string;
  avatar: string;
}

export interface Post {
  slug: string;
  title: string;
  titleSw: string;
  excerpt: string;
  excerptSw: string;
  body: string;
  bodySw: string;
  image: string;
  category: string;
  categorySw: string;
  author: Author;
  date: string;
  readTime: string;
  tags: string[];
  comments: Comment[];
}

export const CATEGORIES = [
  { label: "All", labelSw: "Zote", value: "all" },
  { label: "School Events", labelSw: "Matukio ya Shule", value: "events" },
  { label: "Achievements", labelSw: "Mafanikio", value: "achievements" },
  { label: "Newsletters", labelSw: "Majalada ya Habari", value: "newsletters" },
  { label: "Sports", labelSw: "Michezo", value: "sports" },
];

const authors: Author[] = [
  {
    id: "mr-wekesa",
    name: "Mr. Joseph Wekesa",
    role: "Principal",
    roleSw: "Mkuu wa Shule",
    avatar: "JW",
    bio: "Principal of Bululwe Mixed Secondary School with over 15 years of experience in educational leadership.",
    bioSw: "Mkuu wa Shule ya Sekondari ya Bululwe Mixed na zaidi ya miaka 15 ya uzoefu katika uongozi wa elimu.",
  },
  {
    id: "mr-ochieng",
    name: "Mr. David Ochieng",
    role: "Head of Sciences",
    roleSw: "Mkuu wa Sayansi",
    avatar: "DO",
    bio: "Passionate science educator dedicated to inspiring the next generation of innovators.",
    bioSw: "Mwalimu wa sayansi mwenye shauku ya kuhamasisha kizazi kijacho cha wavumbuzi.",
  },
  {
    id: "admin",
    name: "Bululwe Admin",
    role: "School Administration",
    roleSw: "Utawala wa Shule",
    avatar: "BA",
    bio: "Official news and updates from the Bululwe Mixed Secondary School administration.",
    bioSw: "Habari rasmi na masasisho kutoka kwa utawala wa Shule ya Sekondari ya Bululwe Mixed.",
  },
];

export const POSTS: Post[] = [
  {
    slug: "term-2-2026-begins",
    title: "Term 2 2026 Begins — What You Need to Know",
    titleSw: "Muhula wa 2 2026 Unaanza — Nini Unahitaji Kujua",
    excerpt:
      "All students are expected to report on May 12, 2026 by 8:00 AM. Check the full reporting guidelines and requirements.",
    excerptSw:
      "Wanafunzi wote wanatarajiwa kuripoti Mei 12, 2026 kufikia saa 2:00 asubuhi. Angalia miongozo kamili ya kuripoti.",
    body: `<p>Bululwe Mixed Secondary School is pleased to announce the start of Term 2 for the 2026 academic year. All students are expected to report on <strong>Tuesday, May 12, 2026, by 8:00 AM</strong>.</p>
<p>Parents and guardians are reminded to ensure that all school fees are paid before reporting day. The school uniform — white shirt and navy blue bottoms — must be worn by all students.</p>
<p>New students reporting for the first time should bring the following documents:</p>
<ul>
<li>Original KCPE results slip</li>
<li>Birth certificate</li>
<li>Previous school report form</li>
<li>Admission letter</li>
</ul>
<p>We look forward to a productive term ahead!</p>`,
    bodySw: `<p>Shule ya Sekondari ya Bululwe Mixed inafuraha kutangaza kuanza kwa Muhula wa 2 kwa mwaka wa masomo 2026. Wanafunzi wote wanatarajiwa kuripoti <strong>Jumanne, Mei 12, 2026, kufikia saa 2:00 asubuhi</strong>.</p>
<p>Wazazi na walezi wanakumbushwa kuhakikisha ada zote za shule zinalipwa kabla ya siku ya kuripoti. Sare ya shule — shati jeupe na suruali ya bluu — lazima ivaliwe na wanafunzi wote.</p>
<p>Wanafunzi wapya wanaoripoti kwa mara ya kwanza wanapaswa kuleta hati zifuatazo:</p>
<ul>
<li>Nakala asili ya matokeo ya KCPE</li>
<li>Cheti cha kuzaliwa</li>
<li>Fomu ya ripoti ya shule iliyotangulia</li>
<li>Barua ya udahili</li>
</ul>
<p>Tunatazamia muhula wenye tija!</p>`,
    image:
      "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/a2888f226_generated_4495a80a.png",
    category: "events",
    categorySw: "Matukio ya Shule",
    author: authors[0],
    date: "2026-05-01",
    readTime: "3 min",
    tags: ["term dates", "reporting", "admissions"],
    comments: [
      {
        id: "c1",
        author: "Grace Akinyi",
        body: "Looking forward to another great term!",
        date: "2026-05-02",
        avatar: "GA",
      },
    ],
  },
  {
    slug: "kcse-2025-results",
    title: "KCSE 2025 Results: Mean Grade C+ Achieved",
    titleSw: "Matokeo ya KCSE 2025: Wastani C+ Upatikana",
    excerpt:
      "Bululwe Mixed records a Mean Grade of C+ in the 2025 KCSE examinations. Congratulations to all candidates and staff.",
    excerptSw:
      "Bululwe Mixed imepata Wastani wa C+ katika mitihani ya KCSE 2025. Hongera kwa wanafunzi na walimu wote.",
    body: `<p>Bululwe Mixed Secondary School proudly announces a Mean Grade of <strong>C+</strong> in the 2025 KCSE examinations. This achievement reflects the dedication of our students, teachers, and the entire school community.</p>
<p>Several students scored impressive grades, with 15 students qualifying for university admission. The school continues to show improvement year after year, thanks to the commitment to academic excellence.</p>
<p>We congratulate all candidates and wish them success in their future endeavors.</p>`,
    bodySw: `<p>Shule ya Sekondari ya Bululwe Mixed inajivunia kutangaza Wastani wa <strong>C+</strong> katika mitihani ya KCSE 2025. Mafanikio haya yanaonyesha kujitolea kwa wanafunzi, walimu, na jamii nzima ya shule.</p>
<p>Wanafunzi kadhaa walipata alama za kuvutia, huku wanafunzi 15 wakifuzu kwa udahili wa chuo kikuu. Shule inaendelea kuonyesha maboresho mwaka hadi mwaka, kutokana na kujitolea kwa ubora wa kitaaluma.</p>
<p>Tunawapongeza wanafunzi wote na kuwaombea mafanikio katika juhudi zao za baadaye.</p>`,
    image:
      "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/56fa86679_generated_612ebd9b.png",
    category: "achievements",
    categorySw: "Mafanikio",
    author: authors[2],
    date: "2026-04-15",
    readTime: "2 min",
    tags: ["KCSE", "results", "academic", "achievement"],
    comments: [
      {
        id: "c2",
        author: "Esther Mukhwana",
        body: "So proud of our students! This is just the beginning.",
        date: "2026-04-16",
        avatar: "EM",
      },
      {
        id: "c3",
        author: "Peter Otieno",
        body: "Great improvement from last year. Keep it up!",
        date: "2026-04-17",
        avatar: "PO",
      },
    ],
  },
  {
    slug: "annual-sports-day-2026",
    title: "Annual Sports Day 2026 — Save the Date!",
    titleSw: "Siku ya Michezo 2026 — Weka Tarehe!",
    excerpt:
      "The Annual Sports Day will be held on June 14, 2026. Parents and the community are cordially invited.",
    excerptSw:
      "Siku ya Michezo ya Mwaka itafanyika Juni 14, 2026. Wazazi na jamii wamealikwa.",
    body: `<p>Bululwe Mixed Secondary School invites all parents, guardians, and community members to the <strong>Annual Sports Day</strong> on <strong>Sunday, June 14, 2026</strong>.</p>
<p>The event will feature athletics competitions, football and netball matches, and various team sports. This is a great opportunity to witness the talent and sportsmanship of our students.</p>
<p>Lunch and refreshments will be provided. We look forward to seeing you there!</p>`,
    bodySw: `<p>Shule ya Sekondari ya Bululwe Mixed inawaalika wazazi, walezi, na wanajamii wote kwenye <strong>Siku ya Michezo ya Mwaka</strong> <strong>Jumapili, Juni 14, 2026</strong>.</p>
<p>Tukio hilo litajumuisha mashindano ya riadha, mechi za mpira wa miguu na netball, na michezo mbalimbali ya timu. Hii ni fursa nzuri ya kushuhudia talanta na uchezaji wa wanafunzi wetu.</p>
<p>Chakula cha mchana na viburudisho vitatolewa. Tunatarajia kukuona!</p>`,
    image:
      "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/a51cb2a85_generated_d0dfc306.png",
    category: "sports",
    categorySw: "Michezo",
    author: authors[2],
    date: "2026-03-20",
    readTime: "2 min",
    tags: ["sports", "events", "community"],
    comments: [],
  },
  {
    slug: "new-science-lab-inaugurated",
    title: "New Science Laboratory Inaugurated at Bululwe",
    titleSw: "Maabara Mpya ya Sayansi Yazinduliwa Bululwe",
    excerpt:
      "A state-of-the-art science laboratory has been inaugurated to enhance practical learning in STEM subjects.",
    excerptSw:
      "Maabara ya kisasa ya sayansi imezinduliwa ili kuimarisha ujifunzaji wa vitendo katika masomo ya STEM.",
    body: `<p>Bululwe Mixed Secondary School has officially inaugurated a new, fully equipped science laboratory. The facility will serve students studying Chemistry, Biology, and Physics.</p>
<p>The laboratory features modern equipment, safety stations, and ample workspace for hands-on experiments. This development was made possible through support from the community and education stakeholders.</p>
<p>We believe this investment will significantly boost our students' performance in science subjects.</p>`,
    bodySw: `<p>Shule ya Sekondari ya Bululwe Mixed imezindua rasmi maabara mpya ya sayansi iliyo na vifaa kamili. Kituo hiki kitatumikia wanafunzi wanaosoma Kemia, Biolojia, na Fizikia.</p>
<p>Maabara ina vifaa vya kisasa, vituo vya usalama, na nafasi ya kutosha ya kufanyia majaribio ya vitendo. Maendeleo haya yamewezekana kwa msaada kutoka kwa jamii na wadau wa elimu.</p>
<p>Tunaamini uwekezaji huu utaongeza kwa kiasi kikubwa ufaulu wa wanafunzi wetu katika masomo ya sayansi.</p>`,
    image:
      "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/56fa86679_generated_612ebd9b.png",
    category: "events",
    categorySw: "Matukio ya Shule",
    author: authors[1],
    date: "2026-02-28",
    readTime: "3 min",
    tags: ["science", "STEM", "facilities", "education"],
    comments: [
      {
        id: "c4",
        author: "Faith Wanjiku",
        body: "This is wonderful news for our science department!",
        date: "2026-03-01",
        avatar: "FW",
      },
    ],
  },
  {
    slug: "term-1-newsletter-2026",
    title: "Term 1 Newsletter — 2026 Highlights",
    titleSw: "Jarida la Muhula wa 1 — Muhtasari wa 2026",
    excerpt:
      "Catch up on all the events, achievements, and updates from Term 1 of the 2026 academic year.",
    excerptSw:
      "Pata muhtasari wa matukio yote, mafanikio, na masasisho kutoka Muhula wa 1 wa mwaka wa masomo 2026.",
    body: `<p>As Term 1 comes to a close, we are proud to share the many highlights from an eventful first term. From academic successes to sporting achievements, our students have excelled in all areas.</p>
<p><strong>Academic Highlights:</strong> Form 4 mock exams showed significant improvement. Our science club participated in the regional science fair.</p>
<p><strong>Sports:</strong> The football team reached the sub-county finals. Athletics trials identified several promising athletes for regional competitions.</p>
<p><strong>Community:</strong> We held a successful parent-teacher conference with record attendance.</p>
<p>Thank you to all parents, teachers, and students for making Term 1 a success. We look forward to an even better Term 2!</p>`,
    bodySw: `<p>Muhula wa 1 unapokaribia mwisho, tunajivunia kushiriki muhtasari wa mafanikio ya muhula huu. Kuanzia mafanikio ya kitaaluma hadi michezo, wanafunzi wetu wamefanya vyema katika maeneo yote.</p>
<p><strong>Mafanikio ya Kitaaluma:</strong> Mitihani ya mwigo ya Form 4 ilionyesha maboresho makubwa. Klabu yetu ya sayansi ilishiriki katika maonesho ya sayansi ya kanda.</p>
<p><strong>Michezo:</strong> Timu ya mpira wa miguu ilifikia fainali za kata. Majaribio ya riadha yaligundua wanariadha kadhaa wenye ahadi kwa mashindano ya kanda.</p>
<p><strong>Jamii:</strong> Tulifanya mkutano wa wazazi na walimu uliofaulu kwa hudhuria kwa rekodi.</p>
<p>Asante kwa wazazi, walimu, na wanafunzi wote kwa kufanikisha Muhula wa 1. Tunatazamia Muhula wa 2 bora zaidi!</p>`,
    image:
      "https://media.base44.com/images/public/69fa4dc537d24eb39e8acf76/740553c0c_generated_213b2b2c.png",
    category: "newsletters",
    categorySw: "Majalada ya Habari",
    author: authors[2],
    date: "2026-02-10",
    readTime: "4 min",
    tags: ["newsletter", "highlights", "term 1"],
    comments: [],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  if (category === "all") return POSTS;
  return POSTS.filter((p) => p.category === category);
}

export function getRecentPosts(count: number): Post[] {
  return POSTS.slice(0, count);
}
