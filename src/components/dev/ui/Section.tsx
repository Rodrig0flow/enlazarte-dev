interface SectionProps {
  children: React.ReactNode;
  className?: string;
  withGradient?: boolean;
  id?: string;
}

export function Section({
  children,
  className = "",
  withGradient = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        w-full px-6 py-24 md:py-32
        ${withGradient ? "bg-gradient-to-b from-[#0a0a1a] to-black" : "bg-black"}
        ${className}
      `}
    >
      <div className="max-w-4xl mx-auto animate-fade-in">{children}</div>
    </section>
  );
}
