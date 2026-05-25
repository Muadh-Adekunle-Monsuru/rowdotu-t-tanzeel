import Image from "next/image";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { PhotoGallery } from "@/components/PhotoGallery";
import { HAFLAH_URL, LOGO_SRC, SCHOOL } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 text-center text-white">
        <HeroSlideshow />

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

          <p className="max-w-lg text-lg text-white/90 italic">
            {SCHOOL.tagline}
          </p>

          <div className="mt-2 rounded-xl border border-[#c9a227]/50 bg-white/10 px-6 py-4 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#e8c547]">
              Website under construction
            </p>
            <p className="mt-1 text-sm text-white/80">
              Our full site is coming soon. In the meantime, explore moments
              from our community below.
            </p>
          </div>

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

      <section className="bg-[#f4f6fb] px-6 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-serif text-2xl font-bold text-[#0c1f4a]">
            Moments from our madrasah
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-[#0c1f4a]/70">
            Glimpses from Rowdotu-T-Tanzeel Walimah &amp; Haflah — tap a photo to
            enlarge.
          </p>
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
          <p>{SCHOOL.address}</p>
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
