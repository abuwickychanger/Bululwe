export default function SectionHeader({
  eyebrow,
  title,
  highlight,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
}) {
  return (
    <div className="text-center mb-12">
      <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
        {title}{" "}
        <span className="text-gradient">{highlight}</span>
      </h2>
    </div>
  );
}
