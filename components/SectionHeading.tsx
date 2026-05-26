type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  id?: string;
  variant?: "light" | "onDark";
};

export function SectionHeading({
  title,
  subtitle,
  id,
  variant = "light",
}: SectionHeadingProps) {
  const titleClass =
    variant === "onDark" ? "text-white" : "text-[#0c1f4a]";
  const subtitleClass =
    variant === "onDark" ? "text-white/75" : "text-[#0c1f4a]/70";

  return (
    <div id={id} className="scroll-mt-20 text-center">
      <h2
        className={`font-serif text-2xl font-bold sm:text-3xl ${titleClass}`}
      >
        {title}
      </h2>
      <div
        className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#c9a227]"
        aria-hidden
      />
      {subtitle ? (
        <p className={`mx-auto mt-3 max-w-2xl text-sm ${subtitleClass}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
