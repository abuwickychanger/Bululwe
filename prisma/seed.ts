import { PrismaClient } from "../src/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Clear existing data
  await prisma.download.deleteMany();
  await prisma.announcement.deleteMany();
  await prisma.staff.deleteMany();
  await prisma.feeStructure.deleteMany();

  // Seed Downloads
  await prisma.download.createMany({
    data: [
      {
        nameEn: "Form 1 Admission Form 2026",
        nameSw: "Fomu ya Udahili wa Form 1 2026",
        category: "Admission Forms",
        fileUrl: "#",
        fileSize: "245 KB",
      },
      {
        nameEn: "Transfer Form",
        nameSw: "Fomu ya Uhamisho",
        category: "Admission Forms",
        fileUrl: "#",
        fileSize: "180 KB",
      },
      {
        nameEn: "School Prospectus 2026",
        nameSw: "Muhtasari wa Shule 2026",
        category: "Admission Forms",
        fileUrl: "#",
        fileSize: "1.2 MB",
      },
      {
        nameEn: "Term 2 Timetable 2026",
        nameSw: "Ratiba ya Muhula wa 2 2026",
        category: "Academic Timetables",
        fileUrl: "#",
        fileSize: "320 KB",
      },
      {
        nameEn: "Exam Invigilation Schedule",
        nameSw: "Ratiba ya Uangalizi wa Mtihani",
        category: "Academic Timetables",
        fileUrl: "#",
        fileSize: "195 KB",
      },
      {
        nameEn: "End of Year Exam Timetable",
        nameSw: "Ratiba ya Mtihani wa Mwisho wa Mwaka",
        category: "Academic Timetables",
        fileUrl: "#",
        fileSize: "280 KB",
      },
      {
        nameEn: "April Holiday Assignment - Form 1",
        nameSw: "Kazi ya Likizo ya Aprili - Form 1",
        category: "Holiday Assignments",
        fileUrl: "#",
        fileSize: "510 KB",
      },
      {
        nameEn: "April Holiday Assignment - Form 2",
        nameSw: "Kazi ya Likizo ya Aprili - Form 2",
        category: "Holiday Assignments",
        fileUrl: "#",
        fileSize: "540 KB",
      },
      {
        nameEn: "April Holiday Assignment - Form 3",
        nameSw: "Kazi ya Likizo ya Aprili - Form 3",
        category: "Holiday Assignments",
        fileUrl: "#",
        fileSize: "560 KB",
      },
      {
        nameEn: "April Holiday Assignment - Form 4",
        nameSw: "Kazi ya Likizo ya Aprili - Form 4",
        category: "Holiday Assignments",
        fileUrl: "#",
        fileSize: "600 KB",
      },
    ],
  });

  // Seed Announcements
  await prisma.announcement.createMany({
    data: [
      {
        titleEn: "Term 2 Begins",
        titleSw: "Muhula wa 2 Unaandaa",
        contentEn: "Term 2 begins on May 12, 2026 — All students report by 8:00 AM",
        contentSw: "Muhula wa 2 unaanza Mei 12, 2026 — Wanafunzi wote waripoti kufikia saa 2:00 asubuhi",
        priority: "high",
      },
      {
        titleEn: "KCSE 2025 Results",
        titleSw: "Matokeo ya KCSE 2025",
        contentEn: "KCSE 2025 Results: Mean Grade C+ — Congratulations!",
        contentSw: "Matokeo ya KCSE 2025: Wastani C+ — Hongera!",
        priority: "high",
      },
      {
        titleEn: "Annual Sports Day",
        titleSw: "Siku ya Michezo",
        contentEn: "Annual Sports Day — June 14, 2026",
        contentSw: "Siku ya Michezo — Juni 14, 2026",
        priority: "normal",
      },
    ],
  });

  // Seed Staff
  await prisma.staff.createMany({
    data: [
      {
        name: "Mr. Joseph Wekesa",
        roleEn: "Principal",
        roleSw: "Mwalimu Mkuu",
        department: "Administration",
        bioEn: "Over 20 years of experience in educational leadership. Dedicated to academic excellence and character development.",
        bioSw: "Zaidi ya miaka 20 ya uzoefu katika uongozi wa elimu. Kujitolea kwa ubora wa masomo na maendeleo ya tabia.",
        email: "joseph.wekesa@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-16:00",
        sortOrder: 0,
      },
      {
        name: "Mrs. Grace Akinyi",
        roleEn: "Deputy Principal",
        roleSw: "Naibu Mwalimu Mkuu",
        department: "Administration",
        bioEn: "Experienced administrator committed to fostering a positive learning environment for all students.",
        bioSw: "Msimamizi mwenye ujuzi anayejitolea kukuza mazingira mazuri ya kujifunzia kwa wanafunzi wote.",
        email: "grace.akinyi@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-16:00",
        sortOrder: 1,
      },
      {
        name: "Mr. David Ochieng",
        roleEn: "Head of Sciences",
        roleSw: "Mkuu wa Sayansi",
        department: "Sciences",
        bioEn: "Specialist in Physics and Chemistry with a passion for hands-on laboratory learning.",
        bioSw: "Mtaalamu wa Fizikia na Kemia aliye na shauku ya kujifunza kwa vitendo maabara.",
        email: "david.ochieng@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-15:00",
        sortOrder: 2,
      },
      {
        name: "Mrs. Faith Wanjiku",
        roleEn: "Head of Mathematics",
        roleSw: "Mkuu wa Hisabati",
        department: "Mathematics",
        bioEn: "Mathematics educator dedicated to making abstract concepts accessible and engaging.",
        bioSw: "Mwalimu wa hisabati anayejitolea kufanya dhana dhahania kueleweka na kuvutia.",
        email: "faith.wanjiku@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-15:00",
        sortOrder: 3,
      },
      {
        name: "Mr. Peter Otieno",
        roleEn: "Head of Languages",
        roleSw: "Mkuu wa Lugha",
        department: "Languages",
        bioEn: "Literature and linguistics expert fostering a love for reading and writing.",
        bioSw: "Mtaalamu wa fasihi na isimu anayekuza upendo wa kusoma na kuandika.",
        email: "peter.otieno@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-15:00",
        sortOrder: 4,
      },
      {
        name: "Mrs. Agnes Nafula",
        roleEn: "Head of Humanities",
        roleSw: "Mkuu wa Sanaa",
        department: "Humanities",
        bioEn: "History and Geography specialist who brings the world into the classroom.",
        bioSw: "Mtaalamu wa Historia na Jiografia anayeleta ulimwengu darasani.",
        email: "agnes.nafula@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-15:00",
        sortOrder: 5,
      },
      {
        name: "Mr. Samuel Barasa",
        roleEn: "Games Master",
        roleSw: "Mwalimu wa Michezo",
        department: "Technical",
        bioEn: "Passionate about sports and physical education, coaching multiple school teams.",
        bioSw: "Ana shauku ya michezo na elimu ya viungo, akifundisha timu mbalimbali za shule.",
        email: "samuel.barasa@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-16:00",
        sortOrder: 6,
      },
      {
        name: "Mrs. Esther Mukhwana",
        roleEn: "Dean of Students",
        roleSw: "Mkuu wa Wanafunzi",
        department: "Administration",
        bioEn: "Student welfare advocate ensuring a supportive and disciplined school environment.",
        bioSw: "Wakili wa ustawi wa wanafunzi anayehakikisha mazingira ya shule yanasaidia na yenye nidhamu.",
        email: "esther.mukhwana@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-16:00",
        sortOrder: 7,
      },
      {
        name: "Mr. John Simiyu",
        roleEn: "Computer Studies Teacher",
        roleSw: "Mwalimu wa TEHAMA",
        department: "Technical",
        bioEn: "ICT specialist preparing students for the digital future with programming and computer skills.",
        bioSw: "Mtaalamu wa TEHAMA anayewatayarisha wanafunzi kwa mustakabali wa dijiti.",
        email: "john.simiyu@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-15:00",
        sortOrder: 8,
      },
      {
        name: "Mrs. Mercy Okoth",
        roleEn: "Music & Arts Teacher",
        roleSw: "Mwalimu wa Muziki na Sanaa",
        department: "Creative Arts",
        bioEn: "Creative arts educator nurturing talent in music, drama, and visual arts.",
        bioSw: "Mwalimu wa sanaa anayekuza vipaji katika muziki, mchezo wa kuigiza, na sanaa za kuona.",
        email: "mercy.okoth@bululwe.sc.ke",
        hours: "Mon-Fri 8:00-15:00",
        sortOrder: 9,
      },
    ],
  });

  // Seed Fee Structure
  await prisma.feeStructure.createMany({
    data: [
      { labelEn: "Tuition Fee", labelSw: "Ada ya Masomo", formLevel: "Form 1", category: "Boarding", amount: 45000, academicYear: "2026" },
      { labelEn: "Tuition Fee", labelSw: "Ada ya Masomo", formLevel: "Form 1", category: "Day", amount: 18500, academicYear: "2026" },
      { labelEn: "Tuition Fee", labelSw: "Ada ya Masomo", formLevel: "Form 2", category: "Boarding", amount: 42000, academicYear: "2026" },
      { labelEn: "Tuition Fee", labelSw: "Ada ya Masomo", formLevel: "Form 2", category: "Day", amount: 17500, academicYear: "2026" },
      { labelEn: "Tuition Fee", labelSw: "Ada ya Masomo", formLevel: "Form 3", category: "Boarding", amount: 44000, academicYear: "2026" },
      { labelEn: "Tuition Fee", labelSw: "Ada ya Masomo", formLevel: "Form 3", category: "Day", amount: 18000, academicYear: "2026" },
      { labelEn: "Tuition Fee", labelSw: "Ada ya Masomo", formLevel: "Form 4", category: "Boarding", amount: 46000, academicYear: "2026" },
      { labelEn: "Tuition Fee", labelSw: "Ada ya Masomo", formLevel: "Form 4", category: "Day", amount: 19500, academicYear: "2026" },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
