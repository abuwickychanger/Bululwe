import { getDownloads } from "@/lib/data";
import DownloadGrid from "@/components/downloads/DownloadGrid";
import { useLanguage, t } from "@/lib/LanguageContext";
import SectionHeader from "@/components/shared/SectionHeader";

export default async function DownloadsPage() {
  const downloads = await getDownloads();

  return (
    <div>
      <section className="relative h-64 md:h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMyAxLjM0MyAzIDNzLTEuMzQzIDMtMyAzLTMtMS4zNDMtMy0zIDEuMzQzLTMgMy0zeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Document Repository
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-bold">
              Downloads Center
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Resources"
            title="Download"
            highlight="Documents"
          />

          <DownloadGrid downloads={downloads} />
        </div>
      </section>
    </div>
  );
}
