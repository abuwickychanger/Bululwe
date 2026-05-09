import { getStaff } from "@/lib/data";
import CommunityClient from "@/components/community/CommunityClient";

export const dynamic = "force-dynamic";

export default async function CommunityPage() {
  const staff = await getStaff();

  return <CommunityClient staff={staff} />;
}
