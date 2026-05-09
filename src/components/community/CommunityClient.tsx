"use client";

import { useLanguage, t } from "@/lib/LanguageContext";
import { IMAGES } from "@/lib/constants";
import StaffDirectoryBento from "@/components/community/StaffDirectoryBento";
import AlumniSection from "@/components/community/AlumniSection";
import PortalPreview from "@/components/community/PortalPreview";

interface StaffMember {
  id: string;
  name: string;
  roleEn: string;
  roleSw: string;
  department: string;
  bioEn: string | null;
  bioSw: string | null;
  imageUrl: string | null;
  email: string | null;
  hours: string;
  sortOrder: number;
}

export default function CommunityClient({ staff }: { staff: StaffMember[] }) {
  const { lang } = useLanguage();
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={IMAGES.library}
          alt="Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              {t("Community", "Jamii", lang)}
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              {t("Our Community", "Jamii Yetu", lang)}
            </h1>
          </div>
        </div>
      </section>

      <StaffDirectoryBento staff={staff.map((s) => ({
        id: s.id,
        name: s.name,
        roleEn: s.roleEn,
        roleSw: s.roleSw,
        department: s.department,
        bioEn: s.bioEn,
        bioSw: s.bioSw,
        imageUrl: s.imageUrl,
        email: s.email,
        hours: s.hours,
        sortOrder: s.sortOrder,
      }))} />
      <AlumniSection />
      <PortalPreview />
    </div>
  );
}
