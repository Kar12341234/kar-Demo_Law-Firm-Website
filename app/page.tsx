import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  FileCheck2,
  Gavel,
  Globe2,
  Mail,
  Phone,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const practiceAreas = [
  {
    title: "Corporate Law",
    description:
      "Entity formation, governance, compliance, and business transaction support.",
    icon: Building2,
  },
  {
    title: "Contract Review",
    description:
      "Clear, risk-focused review for commercial agreements, vendors, and partnerships.",
    icon: FileCheck2,
  },
  {
    title: "Immigration",
    description:
      "Strategic guidance for employment visas, family petitions, and residency matters.",
    icon: Globe2,
  },
  {
    title: "Family Law",
    description:
      "Discreet representation for divorce, custody, support, and settlement planning.",
    icon: Users,
  },
  {
    title: "Litigation",
    description:
      "Commercial disputes, civil claims, negotiations, and courtroom advocacy.",
    icon: Gavel,
  },
  {
    title: "Intellectual Property",
    description:
      "Brand protection, licensing, portfolio review, and enforcement strategy.",
    icon: ShieldCheck,
  },
];

const attorneys = [
  {
    name: "Eleanor Hamilton",
    role: "Managing Partner",
    specialty: "Corporate Law, Mergers & Governance",
    initials: "EH",
  },
  {
    name: "Marcus Reed",
    role: "Senior Litigation Counsel",
    specialty: "Commercial Disputes, Arbitration",
    initials: "MR",
  },
  {
    name: "Clara Bennett",
    role: "Immigration & Family Law Attorney",
    specialty: "Immigration, Family Law, Mediation",
    initials: "CB",
  },
];

const achievements = [
  { value: "22+", label: "Years combined experience" },
  { value: "$48M", label: "Commercial matters resolved" },
  { value: "1,200+", label: "Clients advised" },
  { value: "96%", label: "Client satisfaction rate" },
];

const results = [
  "Negotiated a seven-figure settlement in a shareholder dispute before trial.",
  "Completed IP licensing review for a fast-growing technology consultancy.",
  "Secured family-based immigration approvals through complex documentation issues.",
];

const testimonials = [
  {
    quote:
      "Hamilton & Reed translated a complex commercial dispute into a clear plan. The communication was calm, practical, and precise.",
    name: "Daniel Cho",
    company: "Founder, Northline Advisory",
  },
  {
    quote:
      "The team reviewed our vendor contracts with the kind of detail that made our board feel confident moving forward.",
    name: "Amelia Grant",
    company: "COO, Meridian Studios",
  },
  {
    quote:
      "Professional, responsive, and deeply prepared. They made a sensitive family matter feel manageable from day one.",
    name: "Priya Shah",
    company: "Private Client",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-slate-950">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#" className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center border border-gold-400/70 text-gold-300">
              <Scale className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-serif text-xl font-semibold tracking-wide">
              Hamilton & Reed
            </span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-white/78 md:flex">
            <a className="transition hover:text-gold-300" href="#practice">
              Practice Areas
            </a>
            <a className="transition hover:text-gold-300" href="#attorneys">
              Attorneys
            </a>
            <a className="transition hover:text-gold-300" href="#results">
              Results
            </a>
            <a className="transition hover:text-gold-300" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="hero-grid relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.96),rgba(7,17,31,0.82),rgba(7,17,31,0.92))]" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 border-l-2 border-gold-400 pl-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold-300">
              Trusted Counsel for Complex Matters
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Strategic legal guidance for businesses and families.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
              Hamilton & Reed LLP is a boutique law firm built for decisive
              advice, discreet representation, and commercially sensible
              outcomes.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-navy-950 transition hover:bg-gold-300"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#practice"
                className="inline-flex items-center justify-center border border-white/20 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-gold-300 hover:text-gold-300"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="law-visual relative min-h-[470px] overflow-hidden shadow-2xl">
            <div className="absolute left-8 top-8 h-24 w-px bg-gold-400/70" />
            <div className="absolute right-8 top-8 h-24 w-px bg-gold-400/70" />
            <div className="absolute inset-x-10 bottom-12 top-24 border border-white/12 bg-white/6 backdrop-blur-sm" />
            <div className="absolute left-1/2 top-14 h-24 w-24 -translate-x-1/2 rounded-full border border-gold-300/70 bg-gold-500/10" />
            <div className="absolute left-1/2 top-20 -translate-x-1/2 text-gold-300">
              <Scale className="h-12 w-12" aria-hidden="true" />
            </div>
            <div className="absolute inset-x-16 bottom-28 grid grid-cols-4 gap-5">
              {[0, 1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="h-48 border border-gold-300/35 bg-white/8"
                />
              ))}
            </div>
            <div className="absolute inset-x-10 bottom-12 h-16 border-t border-gold-300/45 bg-navy-950/70" />
            <div className="absolute bottom-20 left-10 right-10 flex items-center justify-between border-y border-white/15 bg-navy-950/80 px-6 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-gold-300">
                  Boutique Legal Practice
                </p>
                <p className="mt-2 font-serif text-3xl font-semibold">
                  Counsel with precision
                </p>
              </div>
              <Award className="hidden h-12 w-12 text-gold-300 sm:block" />
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
              Practice Areas
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-navy-950 sm:text-5xl">
              Legal services designed for clarity and control.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((area) => {
              const Icon = area.icon;
              return (
                <article
                  key={area.title}
                  className="border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-navy-950 text-gold-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-navy-950">
                    {area.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
              About Firm
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-navy-950 sm:text-5xl">
              A steady legal partner for moments that matter.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Hamilton & Reed LLP provides practical, detail-driven legal
              counsel for entrepreneurs, families, executives, and growing
              organizations. Our work combines boardroom fluency with careful
              case preparation.
            </p>
            <p>
              Every matter is led by senior attorneys who value transparency,
              responsiveness, and disciplined strategy. Clients trust us because
              we explain the risk, define the path, and protect their position
              with measured advocacy.
            </p>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {["Confidential advice", "Senior-led matters", "Clear fee guidance"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-base">
                    <CheckCircle2
                      className="h-5 w-5 shrink-0 text-gold-500"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-navy-950">{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="attorneys" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
                Attorneys
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-navy-950 sm:text-5xl">
                Experienced counsel with focused expertise.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 border border-navy-950 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-navy-950 transition hover:bg-navy-950 hover:text-white"
            >
              Meet Our Team
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {attorneys.map((attorney) => (
              <article
                key={attorney.name}
                className="border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-navy-950">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-gold-300/70 bg-white/8 font-serif text-4xl font-semibold text-gold-300">
                    {attorney.initials}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-2xl font-semibold text-navy-950">
                    {attorney.name}
                  </h3>
                  <p className="mt-2 font-semibold text-gold-500">
                    {attorney.role}
                  </p>
                  <p className="mt-4 leading-7 text-slate-600">
                    {attorney.specialty}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="bg-navy-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-300">
                Case Results
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
                Proven outcomes, carefully handled.
              </h2>
              <p className="mt-6 leading-8 text-slate-300">
                Representative achievements are provided for demo purposes and
                reflect the type of credibility-focused content a professional
                services website can present.
              </p>
            </div>
            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {achievements.map((item) => (
                  <div key={item.label} className="border border-white/12 p-6">
                    <p className="font-serif text-5xl font-semibold text-gold-300">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm uppercase tracking-[0.16em] text-slate-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                {results.map((result) => (
                  <div key={result} className="flex gap-3 text-slate-200">
                    <CheckCircle2
                      className="mt-1 h-5 w-5 shrink-0 text-gold-300"
                      aria-hidden="true"
                    />
                    <p className="leading-7">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
              Testimonials
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-navy-950 sm:text-5xl">
              What clients say about the experience.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="border border-slate-200 bg-white p-7 shadow-sm"
              >
                <blockquote className="leading-8 text-slate-600">
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="mt-8 border-t border-slate-200 pt-5">
                  <p className="font-semibold text-navy-950">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-500">
              Contact
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-navy-950 sm:text-5xl">
              Book a confidential consultation.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Share a few details about your matter and our office will respond
              within one business day.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <Phone className="h-5 w-5 text-gold-500" aria-hidden="true" />
                <span>+1 (212) 555-0184</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="h-5 w-5 text-gold-500" aria-hidden="true" />
                <span>contact@hamiltonreed.demo</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <BriefcaseBusiness
                  className="h-5 w-5 text-gold-500"
                  aria-hidden="true"
                />
                <span>Business, family, immigration, and litigation matters</span>
              </div>
            </div>
          </div>

          <form className="border border-slate-200 bg-[#fbfaf7] p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-navy-950">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-gold-500"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-navy-950">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-gold-500"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-navy-950">
                  Phone
                </span>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  className="mt-2 w-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-gold-500"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-sm font-semibold text-navy-950">
                  Case description
                </span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Briefly describe your legal matter"
                  className="mt-2 w-full resize-none border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-gold-500"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-navy-950 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-navy-800 sm:w-auto"
            >
              Submit Inquiry
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-navy-950 px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-300 md:flex-row md:items-center">
          <p>&copy; 2026 Hamilton & Reed LLP. Website demo for portfolio use.</p>
          <p>Professional services web design by portfolio demo.</p>
        </div>
      </footer>
    </main>
  );
}
