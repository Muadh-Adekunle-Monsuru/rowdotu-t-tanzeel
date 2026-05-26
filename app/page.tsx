import Image from "next/image";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import {
  AboutSection,
  AimsSection,
  ContactSection,
  DepartmentsSection,
  LaurelsSection,
  MissionVisionSection,
  ProgramsSection,
  ScheduleSection,
} from "@/components/MadrasahSections";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { HAFLAH_URL, LOGO_SRC, SCHOOL } from "@/lib/site";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#contact", label: "Contact" },
  { href: "#gallery", label: "Gallery" },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 py-16 text-center text-white">
        <HeroSlideshow />

        <nav
          aria-label="Primary"
          className="absolute top-0 z-20 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-4 text-xs font-medium uppercase tracking-wide"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 transition hover:text-[#e8c547]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-5">
          <div className="overflow-hidden rounded-full ring-4 ring-[#c9a227]/80 shadow-lg">
            <Image
              src={LOGO_SRC}
              alt={`${SCHOOL.shortName} logo`}
              width={120}
              height={120}
              className="h-28 w-28 object-cover"
              priority
            />
          </div>

          <p className="text-sm font-medium uppercase tracking-widest text-[#e8c547]">
            {SCHOOL.location}
          </p>

          <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {SCHOOL.name}
          </h1>

          <p
            className="font-serif text-lg text-[#e8c547]/95 sm:text-xl"
            dir="rtl"
            lang="ar"
          >
            {SCHOOL.nameArabic}
          </p>

          <p className="max-w-lg text-lg text-white/90 italic">
            {SCHOOL.tagline}
          </p>

          <a
            href={HAFLAH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#c9a227] px-8 py-3 text-sm font-semibold text-[#0c1f4a] shadow-md transition hover:bg-[#e8c547] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1f4a]"
          >
            View our past Haflah photos
          </a>
        </div>
      </header>

      <AboutSection />
      <MissionVisionSection />
      <AimsSection />
      <ProgramsSection />
      <ScheduleSection />
      <DepartmentsSection />
      <LaurelsSection />
      <ContactSection />

      <section id="gallery" className="bg-[#f4f6fb] px-6 py-14 scroll-mt-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            title="Moments from our madrasah"
            subtitle="Glimpses from Rowdotu-T-Tanzeel Walimah & Haflah — tap a photo to enlarge."
          />
          <div className="mt-8">
            <PhotoGallery />
          </div>
        </div>
      </section>

      <footer className="mt-auto bg-[#0c1f4a] px-6 py-10 text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center text-sm">
          <p className="font-serif text-lg font-semibold text-[#e8c547]">
            {SCHOOL.shortName}
          </p>
          <p className="text-white/80">{SCHOOL.address}</p>
          <p>
            <a
              href={`mailto:${SCHOOL.email}`}
              className="underline-offset-2 hover:text-[#e8c547] hover:underline"
            >
              {SCHOOL.email}
            </a>
          </p>
          <p className="text-xs text-white/60">
            CAC Registration No: {SCHOOL.cacRegistration}
          </p>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {SCHOOL.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={`tel:${phone}`}
                  className="underline-offset-2 hover:text-[#e8c547] hover:underline"
                >
                  {phone}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {SCHOOL.name}
          </p>
        </div>
      </footer>
    </div>
  );
}
