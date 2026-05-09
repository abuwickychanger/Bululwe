import { cache } from "react";
import { unstable_cache } from "next/cache";
import { prisma } from "./db";

// ──────────────────────────────────────────────
// Downloads
// ──────────────────────────────────────────────

export const getDownloads = unstable_cache(
  cache(async () => {
    try {
      return await prisma.download.findMany({ orderBy: { createdAt: "desc" } });
    } catch {
      return [];
    }
  }),
  ["downloads"],
  { tags: ["downloads"], revalidate: 3600 }
);

// ──────────────────────────────────────────────
// Announcements
// ──────────────────────────────────────────────

export const getAnnouncements = unstable_cache(
  cache(async () => {
    try {
      return await prisma.announcement.findMany({
        where: { isActive: true },
        orderBy: [{ priority: "asc" }, { createdAt: "desc" }],
      });
    } catch {
      return [];
    }
  }),
  ["announcements"],
  { tags: ["announcements"], revalidate: 300 }
);

export const getHighPriorityAnnouncements = unstable_cache(
  cache(async () => {
    try {
      return await prisma.announcement.findMany({
        where: { isActive: true, priority: "high" },
        orderBy: { createdAt: "desc" },
      });
    } catch {
      return [];
    }
  }),
  ["announcements-high"],
  { tags: ["announcements"], revalidate: 300 }
);

// ──────────────────────────────────────────────
// Staff
// ──────────────────────────────────────────────

export const getStaff = unstable_cache(
  async () => {
    try {
      return await prisma.staff.findMany({ orderBy: { sortOrder: "asc" } });
    } catch (e) {
      console.error("[getStaff] DB query failed:", e);
      return [];
    }
  },
  ["staff"],
  { tags: ["staff"], revalidate: 86400 }
);

// ──────────────────────────────────────────────
// Fee Structure
// ──────────────────────────────────────────────

export const getFeeStructure = unstable_cache(
  cache(async (academicYear = "2026") => {
    try {
      return await prisma.feeStructure.findMany({ where: { academicYear } });
    } catch {
      return [];
    }
  }),
  ["fees"],
  { tags: ["fees"], revalidate: 86400 }
);

export const getFeeMap = cache(async (year = "2026") => {
  const rows = await getFeeStructure(year);
  const map: Record<string, Record<string, number>> = {};
  for (const row of rows) {
    if (!map[row.formLevel]) map[row.formLevel] = {};
    map[row.formLevel][row.category] = row.amount;
  }
  return map;
});
