import {
  ABOUT_PARAGRAPHS,
  AIMS,
  DEPARTMENTS,
  LAURELS,
  MISSION,
  PROGRAMS,
  SCHEDULE,
  SPONSORSHIP,
  SCHOOL,
  VISION,
} from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[#c9a227]/25 bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="bg-white px-6 py-14">
      <div className="mx-auto max-w-3xl space-y-6">
        <SectionHeading
          title="About the Madrasah"
          subtitle={`Established ${SCHOOL.established} in Ile-Ife`}
        />
        <div className="mt-8 space-y-4 text-[#0c1f4a]/85 leading-relaxed">
          {ABOUT_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MissionVisionSection() {
  return (
    <section className="bg-[#f4f6fb] px-6 py-14">
      <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
        <Card>
          <h3 className="font-serif text-lg font-semibold text-[#0c1f4a]">
            Mission
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#0c1f4a]/80">
            {MISSION}
          </p>
        </Card>
        <Card>
          <h3 className="font-serif text-lg font-semibold text-[#0c1f4a]">
            Vision
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#0c1f4a]/80">
            {VISION}
          </p>
        </Card>
      </div>
    </section>
  );
}

export function AimsSection() {
  return (
    <section id="aims" className="bg-white px-6 py-14">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Aims and Objectives" />
        <ol className="mt-8 space-y-3">
          {AIMS.map((aim, index) => (
            <li
              key={aim}
              className="flex gap-4 rounded-lg border border-[#0c1f4a]/10 bg-[#f4f6fb] px-4 py-3 text-sm leading-relaxed text-[#0c1f4a]/85"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0c1f4a] text-xs font-semibold text-[#e8c547]">
                {index + 1}
              </span>
              <span className="pt-0.5">{aim}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-[#f4f6fb] px-6 py-14">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Our Programs"
          subtitle="Paths for memorization, Arabic, and recognized examinations"
        />
        <ul className="mt-8 space-y-3">
          {PROGRAMS.map((program) => (
            <li
              key={program}
              className="flex gap-3 rounded-xl border border-[#c9a227]/30 bg-white px-5 py-4 text-sm leading-relaxed text-[#0c1f4a]/85 shadow-sm"
            >
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#c9a227]"
                aria-hidden
              />
              {program}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-white px-6 py-14">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Duration & Class Period"
          subtitle="Full-time, weekend, and holiday options"
        />
        <ul className="mt-8 space-y-3 text-sm leading-relaxed text-[#0c1f4a]/85">
          {SCHEDULE.map((item) => (
            <li
              key={item}
              className="border-l-4 border-[#c9a227] bg-[#f4f6fb] py-2 pl-4 pr-2"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DepartmentsSection() {
  return (
    <section id="departments" className="bg-[#f4f6fb] px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Departments & Subjects" />
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {DEPARTMENTS.map((dept) => (
            <Card key={dept.name} className="flex flex-col">
              <h3 className="font-serif text-base font-semibold text-[#0c1f4a]">
                {dept.name}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[#0c1f4a]/75">
                {dept.subjects.map((subject) => (
                  <li key={subject} className="flex items-center gap-2">
                    <span className="text-[#c9a227]" aria-hidden>
                      •
                    </span>
                    {subject}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LaurelsSection() {
  return (
    <section id="laurels" className="bg-[#0c1f4a] px-6 py-14 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          variant="onDark"
          title="Laurels & Accolades"
          subtitle="Excellence in Qur'an competitions across Osun State and beyond"
        />
        <p className="mt-8 text-sm leading-relaxed text-white/90 sm:text-base">
          {LAURELS}
        </p>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-white px-6 py-14">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Contact & Sponsorship" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-serif text-lg font-semibold text-[#0c1f4a]">
              Contact Information
            </h3>
            <dl className="mt-4 space-y-3 text-sm text-[#0c1f4a]/85">
              <div>
                <dt className="font-medium text-[#0c1f4a]">CAC Registration</dt>
                <dd>{SCHOOL.cacRegistration}</dd>
              </div>
              <div>
                <dt className="font-medium text-[#0c1f4a]">Address</dt>
                <dd>{SCHOOL.address}</dd>
              </div>
              <div>
                <dt className="font-medium text-[#0c1f4a]">Email</dt>
                <dd>
                  <a
                    href={`mailto:${SCHOOL.email}`}
                    className="text-[#0c1f4a] underline-offset-2 hover:text-[#c9a227] hover:underline"
                  >
                    {SCHOOL.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[#0c1f4a]">Phone</dt>
                <dd>
                  <ul className="mt-1 space-y-1">
                    {SCHOOL.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone}`}
                          className="hover:text-[#c9a227] hover:underline"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Card>
          <Card className="border-[#c9a227]/40 bg-[#f4f6fb]">
            <h3 className="font-serif text-lg font-semibold text-[#0c1f4a]">
              For Sponsorship
            </h3>
            <dl className="mt-4 space-y-3 text-sm text-[#0c1f4a]/85">
              <div>
                <dt className="font-medium text-[#0c1f4a]">Account Name</dt>
                <dd className="leading-snug">{SPONSORSHIP.accountName}</dd>
              </div>
              <div>
                <dt className="font-medium text-[#0c1f4a]">Account Number</dt>
                <dd className="font-mono text-base tracking-wide">
                  {SPONSORSHIP.accountNumber}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[#0c1f4a]">Bank</dt>
                <dd>{SPONSORSHIP.bank}</dd>
              </div>
            </dl>
          </Card>
        </div>
      </div>
    </section>
  );
}
