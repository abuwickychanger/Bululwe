import { getFeeMap } from "@/lib/data";
import { FEE_ADDITIONALS } from "@/lib/constants";
import FeesClient from "@/views/FeesClient";
import SectionHeader from "@/components/shared/SectionHeader";

export default async function FeesPage() {
  const feeMap = await getFeeMap();

  return (
    <div>
      <section className="relative h-64 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/80" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMyAxLjM0MyAzIDNzLTEuMzQzIDMtMyAzLTMtMS4zNDMtMy0zIDEuMzQzLTMgMy0zeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Fee Structure
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Fee Calculator
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Transparent Fees"
            title="Calculate Your"
            highlight="School Fees"
          />

          <div className="glass rounded-2xl p-6 md:p-8">
            <FeesClient feeMap={feeMap} />
          </div>
        </div>
      </section>
    </div>
  );
}
