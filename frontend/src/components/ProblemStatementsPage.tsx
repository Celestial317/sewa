import { useEffect, useMemo, useState } from "react";
import { ExternalLink, FileText, Search, X } from "lucide-react";
import { Header, Footer } from "./SewaSite";

/* ── Reusable Pagination ──────────────────────────────────────────── */
function Pagination({ total, current, onChange }: { total: number; current: number; onChange: (page: number) => void }) {
  const btnBase =
    "t-content-sm font-semibold! inline-flex items-center justify-center h-9 min-w-[36px] rounded-xl border transition-colors select-none cursor-pointer";
  const activeCls = `${btnBase} bg-[#2368B2] border-[#2368B2] text-white shadow-[0px_2px_6px_rgba(35,104,178,0.3)]`;
  const inactiveCls = `${btnBase} bg-white border-[rgba(226,232,240,0.9)] text-[#374151] hover:bg-[#F1F5F9]`;
  const navCls = `${btnBase} px-4 gap-1.5 bg-white border-[rgba(226,232,240,0.9)] text-[#374151] hover:bg-[#F1F5F9]`;

  const pages = Array.from({ length: total }, (_, index) => index + 1);

  if (total <= 1) return null;

  return (
    <div className="mt-6 flex items-center justify-center gap-1.5 flex-wrap">
      {/* Previous */}
      <button type="button" className={navCls} aria-label="Previous page" disabled={current === 1} onClick={() => onChange(current - 1)}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Previous
      </button>

      {/* Page numbers */}
      {pages.map((p) => (
        <button key={p} type="button" className={p === current ? activeCls : inactiveCls} onClick={() => onChange(p)}
          aria-current={p === current ? "page" : undefined}
          style={{ padding: "0 12px" }}
        >
          {p}
        </button>
      ))}

      {/* Next */}
      <button type="button" className={navCls} aria-label="Next page" disabled={current === total} onClick={() => onChange(current + 1)}>
        Next
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
}

type ProblemProfile = {
  stage: "National Stage" | "Regional Stage";
  code: string;
  psNumber?: string;
  label: string;
  title: string;
  description: string;
  background: string;
  organisation: string;
  contact: string;
  badgeBg: string;
  badgeText: string;
};

/* ── National Level categories ─────────────────────────────────────── */
export const NATIONAL_CATEGORIES: ProblemProfile[] = [
  {
    stage: "National Stage",
    code: "DEF",
    label: "Defence, Intelligence, Space & National Security",
    title: "Adaptive systems for national security and resilient operations",
    description: "Design a scalable technology solution that strengthens situational awareness, response coordination, or operational resilience in a responsible and secure way.",
    background: "National security teams need interoperable, field-ready tools that can work with limited connectivity and turn complex information into timely decisions.",
    organisation: "Government of National Capital Territory of Delhi",
    contact: "SEWA FIRST Challenge Secretariat",
    badgeBg: "#FDE8E8",
    badgeText: "#E03137",
  },
  {
    stage: "National Stage",
    code: "DMR",
    label: "Disaster Management & Resilience",
    title: "Early warning and rapid response for urban disasters",
    description: "Build an affordable solution that helps communities predict, prepare for, or recover from natural and urban disasters with measurable impact.",
    background: "Dense cities face compounding risks from extreme weather, infrastructure failures, and disrupted services. Better local intelligence can shorten response time.",
    organisation: "Government of National Capital Territory of Delhi",
    contact: "SEWA FIRST Challenge Secretariat",
    badgeBg: "#DBEAFE",
    badgeText: "#0284C7",
  },
  {
    stage: "National Stage",
    code: "MAR",
    label: "Manufacturing & Electronics, AI, Robotics & Autonomous Systems",
    title: "Intelligent automation for safer, smarter manufacturing",
    description: "Create an AI, robotics, electronics, or autonomous-systems solution that improves productivity, quality, safety, or access to advanced manufacturing.",
    background: "Indian manufacturing needs adaptable systems that reduce waste and make advanced capabilities accessible to smaller plants and local enterprises.",
    organisation: "Government of National Capital Territory of Delhi",
    contact: "SEWA FIRST Challenge Secretariat",
    badgeBg: "#DCFCE7",
    badgeText: "#16A34A",
  },
  {
    stage: "National Stage",
    code: "ENE",
    label: "Energy & Sustainable Technology & Environment",
    title: "Practical pathways to cleaner and more efficient communities",
    description: "Develop a deployable technology that advances energy efficiency, circularity, conservation, or climate resilience while remaining accessible and measurable.",
    background: "The transition to a sustainable future depends on solutions that are economical in real settings, work across communities, and make resource use visible.",
    organisation: "Government of National Capital Territory of Delhi",
    contact: "SEWA FIRST Challenge Secretariat",
    badgeBg: "#FEF3C7",
    badgeText: "#D97706",
  },
  {
    stage: "National Stage",
    code: "FMT",
    label: "Advanced Engineering, Infrastructure, Future Mobility & Transportation",
    title: "Connected infrastructure for accessible future mobility",
    description: "Propose an engineering or mobility innovation that makes movement safer, cleaner, more inclusive, and more efficient across diverse Indian contexts.",
    background: "Growing cities need infrastructure and transport systems that respond to demand without compromising accessibility, safety, or environmental responsibility.",
    organisation: "Government of National Capital Territory of Delhi",
    contact: "SEWA FIRST Challenge Secretariat",
    badgeBg: "#EDE9FE",
    badgeText: "#7C3AED",
  },
];

const NATIONAL_PROBLEM_STATEMENTS = [
  ...NATIONAL_CATEGORIES.flatMap((category) => [
    { ...category, psNumber: "001" },
    ...[1, 2, 3, 4].map((variant) => ({
      ...category,
      psNumber: String(variant + 1).padStart(3, "0"),
      title: `${category.title} - Challenge ${variant}`,
      description: `${category.description} This additional challenge scenario is included for testing the multi-page problem statement experience.`,
      background: `${category.background} The challenge can be adapted to different implementation contexts and scales.`,
    })),
    {
      ...category,
      psNumber: "OPN",
      title: "Open Innovation Challenge",
      description: `Submit a nationally relevant, scalable, and implementable innovation for the ${category.label} theme, including ideas that do not fit the listed challenge statements.`,
      background: `${category.background} This open track welcomes interdisciplinary solutions related to this theme with potential for adoption across India.`,
    },
  ]),
];

/* ── Community Level categories ─────────────────────────────────────── */
export const COMMUNITY_CATEGORIES: ProblemProfile[] = [
  {
    stage: "Regional Stage",
    code: "AGR",
    label: "Village & Panchayat Development, Agriculture & Rural Economy",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "This category welcomes solutions shaped by the needs of villages, panchayats, farmers, and rural enterprises.",
    organisation: "SEWA FIRST Regional Challenge",
    contact: "Regional Challenge Secretariat",
    badgeBg: "#FDE8E8",
    badgeText: "#E03137",
  },
  {
    stage: "Regional Stage", code: "EDU",
    label: "Education & Skill Development",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Solutions may improve learning outcomes, access, employability, or practical skill development.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#DBEAFE",
    badgeText: "#0284C7",
  },
  {
    stage: "Regional Stage", code: "HLT",
    label: "Healthcare & Community Well-being",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Solutions should make preventive care, public health, or community well-being more accessible.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#DCFCE7",
    badgeText: "#16A34A",
  },
  {
    stage: "Regional Stage", code: "URB",
    label: "City & Urban Problems",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Bring forward practical responses to the everyday challenges experienced by growing towns and cities.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#FEF3C7",
    badgeText: "#D97706",
  },
  {
    stage: "Regional Stage", code: "ENV",
    label: "Environment & Natural Resources",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Solutions can protect local ecosystems, conserve resources, and help communities adapt to environmental change.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#EDE9FE",
    badgeText: "#7C3AED",
  },
  {
    stage: "Regional Stage", code: "SPT",
    label: "Sports (Khelo India)",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Design inclusive ideas that grow participation, improve training, or strengthen sports ecosystems.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#FDE8E8",
    badgeText: "#E03137",
  },
  {
    stage: "Regional Stage", code: "EMP",
    label: "Employment & Livelihood",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Help people discover dignified work, build livelihoods, and participate in local economic growth.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#DBEAFE",
    badgeText: "#0284C7",
  },
  {
    stage: "Regional Stage", code: "WCD",
    label: "Women & Child Safety and Development",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Prioritise safety, agency, education, health, and opportunity for women and children.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#DCFCE7",
    badgeText: "#16A34A",
  },
  {
    stage: "Regional Stage", code: "DRM",
    label: "Safety & Disaster Management",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Develop community-first tools and practices that reduce risk and improve preparedness and response.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#FEF3C7",
    badgeText: "#D97706",
  },
  {
    stage: "Regional Stage", code: "TET",
    label: "Transport, Energy & Tourism",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Improve local connectivity, energy access, and responsible tourism through solutions rooted in place.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#EDE9FE",
    badgeText: "#7C3AED",
  },
  {
    stage: "Regional Stage", code: "MSC",
    label: "Miscellaneous",
    title: "Open Innovation Challenge",
    description: "Submit a locally relevant, affordable, and implementable innovation for this regional category.",
    background: "Have an important community problem that does not fit another category? This is the place for it.",
    organisation: "SEWA FIRST Regional Challenge", contact: "Regional Challenge Secretariat",
    badgeBg: "#FDE8E8",
    badgeText: "#E03137",
  },
];

function getProfileId(profile: ProblemProfile, index: number) {
  const stageCode = profile.stage === "National Stage" ? "NAT" : "REG";
  const number = profile.psNumber ?? (profile.stage === "National Stage" ? String(index + 1).padStart(3, "0") : "OPN");
  return `${stageCode}-${profile.code}-${number}`;
}

/* ── Problem statement profile modal ───────────────────────────────── */
function ProfileModal({ profile, index, onClose }: { profile: ProblemProfile; index: number; onClose: () => void }) {
  const profileId = getProfileId(profile, index);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#122033]/45 p-4 backdrop-blur-[3px] sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        aria-labelledby="profile-modal-title"
        aria-modal="true"
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-4xl overflow-y-auto rounded-[20px] border border-[#E3EAF2] bg-white shadow-[0_24px_80px_rgba(15,35,65,0.25)] sm:max-h-[calc(100vh-3rem)]"
        role="dialog"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close problem statement details"
          className="absolute right-4 top-4 z-10 inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-[#EDF3F8] text-[#1E3554] transition-colors hover:bg-[#DDE8F2] focus-visible:ring-2 focus-visible:ring-[#2368B2]"
        >
          <X size={18} />
        </button>

        <div className="border-b border-[#E8EDF3] px-6 pb-6 pt-8 sm:px-8 sm:pt-9">
          <div className="mb-6 flex flex-wrap items-center gap-3 pr-10">
            <span className="rounded-full bg-[#EAF1F8] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#2368B2]">
              {profile.stage}
            </span>
            <span className="font-mono text-sm font-semibold text-[#60718B]">{profileId}</span>
          </div>
          <h2 id="profile-modal-title" className="max-w-3xl text-2xl font-bold leading-tight text-[#142340] sm:text-3xl">
            {profile.title}
          </h2>
          <p className="mt-3 text-sm text-[#60718B]">Complete information about this {profile.stage.toLowerCase()} challenge.</p>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-8">
          <dl className="overflow-hidden rounded-xl border border-[#DCE6F0] text-sm">
            <div className="grid border-b border-[#DCE6F0] sm:grid-cols-[180px_1fr]">
              <dt className="bg-[#F1F6FB] px-4 py-3 font-semibold text-[#263A56]">Problem Statement</dt>
              <dd className="px-4 py-3 font-semibold text-[#142340]">{profile.title}</dd>
            </div>
            <div className="grid border-b border-[#DCE6F0] sm:grid-cols-[180px_1fr]">
              <dt className="bg-[#F1F6FB] px-4 py-3 font-semibold text-[#263A56]">Description</dt>
              <dd className="space-y-5 px-4 py-4 text-[#45566E]">
                <div><strong className="block text-[#263A56]">Background:</strong><span className="mt-1 block">{profile.background}</span></div>
                <div><strong className="block text-[#263A56]">Challenge:</strong><span className="mt-1 block">{profile.description}</span></div>
              </dd>
            </div>
            <div className="grid border-b border-[#DCE6F0] sm:grid-cols-[180px_1fr]">
              <dt className="bg-[#F1F6FB] px-4 py-3 font-semibold text-[#263A56]">Organisation</dt>
              <dd className="px-4 py-3 text-[#45566E]">{profile.organisation}</dd>
            </div>
            <div className="grid border-b border-[#DCE6F0] sm:grid-cols-[180px_1fr]">
              <dt className="bg-[#F1F6FB] px-4 py-3 font-semibold text-[#263A56]">Theme / Category</dt>
              <dd className="px-4 py-3 text-[#45566E]">{profile.label}</dd>
            </div>
            <div className="grid sm:grid-cols-[180px_1fr]">
              <dt className="bg-[#F1F6FB] px-4 py-3 font-semibold text-[#263A56]">Contact info</dt>
              <dd className="px-4 py-3 text-[#45566E]">{profile.contact}</dd>
            </div>
          </dl>

          <div className="mt-6 flex justify-end">
            <button type="button" onClick={onClose} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#EAF1F8] px-5 py-2.5 text-sm font-semibold text-[#142340] transition-colors hover:bg-[#DDE8F2]">
              Close
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

/* ── Table Card ─────────────────────────────────────────────────────── */
function TableCard({ categories, onSelect }: { categories: ProblemProfile[]; onSelect: (profile: ProblemProfile, index: number) => void }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"category" | "id">("category");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();
    return categories
      .map((profile, index) => ({ profile, index, id: getProfileId(profile, index) }))
      .filter(({ profile, id }) => !query || id.toLowerCase().includes(query) || profile.label.toLowerCase().includes(query))
      .sort((left, right) => {
        const leftValue = sortBy === "id" ? left.id : left.profile.label;
        const rightValue = sortBy === "id" ? right.id : right.profile.label;
        return leftValue.localeCompare(rightValue);
      });
  }, [categories, search, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredCategories.length / pageSize));
  const visibleCategories = filteredCategories.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    setPage(1);
  }, [search, sortBy, categories]);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-[260px]">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#8291A7]" />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search PS ID"
            aria-label="Search problem statement ID"
            className="h-10 w-full rounded-lg border border-[#DCE6F0] bg-white pl-9 pr-3 text-sm text-[#142340] outline-none placeholder:text-[#8291A7] focus:border-[#2368B2] focus:ring-2 focus:ring-[#2368B2]/15"
          />
        </div>
        <label className="flex items-center gap-2 text-sm font-semibold text-[#60718B]">
          Sort by
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value as "category" | "id")} className="h-10 cursor-pointer rounded-lg border border-[#DCE6F0] bg-white px-3 text-sm font-semibold text-[#263A56] outline-none focus:border-[#2368B2]">
            <option value="category">Category</option>
            <option value="id">ID Number</option>
          </select>
        </label>
      </div>

      <div className="w-full overflow-hidden rounded-[24px] border border-[rgba(226,232,240,0.8)] bg-white shadow-[0px_4px_24px_rgba(0,0,0,0.03)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[780px] border-collapse">

          {/* ── Header ── */}
          <thead>
            <tr
              className="border-b border-[#E2E9F2]"
              style={{ background: "linear-gradient(180deg,#EDF2F7 0%,#E8EEF6 100%)" }}
            >
              {/* # */}
              <th className="w-[84px] px-6 py-4 text-center">
                <span className="t-content-sm font-bold! tracking-[0.65px] uppercase text-[#60718B]">
                  #
                </span>
              </th>
              {/* CATEGORY */}
              <th className="px-6 py-4 text-left" style={{ width: "38%" }}>
                <span className="t-content-sm font-bold! tracking-[0.65px] uppercase text-[#60718B]">
                  Category
                </span>
              </th>
              {/* PROBLEM STATEMENT */}
              <th className="px-6 py-4 text-left" style={{ width: "31%" }}>
                <span className="t-content-sm font-bold! tracking-[0.65px] uppercase text-[#60718B]">
                  Problem Statement
                </span>
              </th>
              {/* ID NUMBER */}
              <th className="px-6 py-4 text-center" style={{ width: "23%" }}>
                <span className="t-content-sm font-bold! tracking-[0.65px] uppercase text-[#60718B]">
                  ID Number
                </span>
              </th>
            </tr>
          </thead>

          {/* ── Body ── */}
          <tbody>
            {visibleCategories.map(({ profile: row, index }, i) => {
              const profileId = getProfileId(row, index);
              return (
              <tr
                key={profileId}
                className={`hover:bg-[#FAFBFD] transition-colors ${
                  i > 0 ? "border-t border-[#F1F5F9]" : ""
                }`}
              >
                {/* Number badge */}
                <td className="w-[84px] px-6 py-[20.5px] text-center">
                  <span
                    className="t-content-sm font-bold! inline-flex items-center justify-center w-9 h-9 rounded-full shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                    style={{ background: row.badgeBg, color: row.badgeText }}
                  >
                    {(page - 1) * pageSize + i + 1}
                  </span>
                </td>

                {/* Category name */}
                <td className="px-6 py-[27.5px]" style={{ width: "38%" }}>
                  <span className="t-content-sm font-bold! tracking-[-0.375px] text-[#142340]">
                    {row.label}
                  </span>
                </td>

                {/* Problem statement link */}
                <td className="px-6 py-[22.5px]" style={{ width: "31%" }}>
                  <button type="button" onClick={() => onSelect(row, index)} className="group flex w-full cursor-pointer items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2368B2] focus-visible:ring-offset-2">
                    {/* PDF icon badge */}
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-[#FECACA] bg-[rgba(254,242,242,0.6)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                      <FileText size={16} className="text-[#EF4444]" />
                    </span>

                    {/* Title */}
                    <span className="t-content-sm font-bold! text-[#142340] group-hover:text-[#2368B2]">
                      {row.title}
                    </span>

                    {/* External link badge */}
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-[rgba(226,232,240,0.8)] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                      <ExternalLink size={12} className="text-[#94A3B8]" />
                    </span>
                  </button>
                </td>

                {/* ID pill */}
                <td className="px-6 py-[24.5px] text-center" style={{ width: "23%" }}>
                  <span className="t-content-sm font-semibold! inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#EAF1F8] tracking-[0.3px] text-[#1E2F4D]">
                    {profileId}
                  </span>
                </td>
              </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
      {visibleCategories.length === 0 ? <p className="px-4 py-8 text-center text-sm text-[#60718B]">No problem statements match your search.</p> : null}
      <Pagination total={totalPages} current={page} onChange={setPage} />
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */
export function ProblemStatementsPage() {
  const [selectedProfile, setSelectedProfile] = useState<{ profile: ProblemProfile; index: number } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleSelect = (profile: ProblemProfile, index: number) => {
    setSelectedProfile({ profile, index });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div>
        <Header activeNav="problems" />

        <main className="pt-10 sm:pt-16 pb-20 sm:pb-28">
          <div className="site-shell">
            <h1 className="t-main-heading uppercase">Problem Statements</h1>

            <div className="t-section-stack mt-10 sm:mt-14 space-y-10 sm:space-y-14">

              {/* ── Theme 1 ── */}
              <section
                id="national"
                aria-labelledby="national-heading"
                className="scroll-mt-28 rounded-[28px] border border-[#eaecf0] bg-white px-6 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:px-10 sm:py-12"
              >
                <h2
                  id="national-heading"
                  className="t-subheading-2 text-[#112347] uppercase"
                >
                  Theme 1: National Level Innovation
                </h2>
                <p className="t-content mt-5 text-[#334155] sm:text-justify">
                  Participants will work on identified challenges and problem statements of national
                  significance, developing innovative, sustainable and scalable solutions with the
                  potential for adoption across India. Innovations should have a starting TRL of
                  4–6 and are expected to progress towards TRL 7–9 by the end of the Challenge,
                  demonstrating a clear pathway from validated technology to an operational,
                  deployable solution.
                </p>

                <div className="mt-8">
                  <TableCard categories={NATIONAL_PROBLEM_STATEMENTS} onSelect={handleSelect} />
                </div>
              </section>

              {/* ── Theme 2 ── */}
              <section
                id="community"
                aria-labelledby="community-heading"
                className="scroll-mt-28 rounded-[28px] border border-[#eaecf0] bg-white px-6 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.05)] sm:px-10 sm:py-12"
              >
                <h2
                  id="community-heading"
                  className="t-subheading-2 text-[#112347] uppercase"
                >
                  Theme 2: Local Community Level Innovations –{" "}
                  Village / District / State
                </h2>
                <p className="t-content mt-5 text-[#334155] sm:text-justify">
                  Participants will identify real problems and unmet needs within their own
                  villages, districts or states and develop locally relevant, affordable,
                  sustainable and implementable solutions that directly benefit the community and
                  have the potential to be replicated or scaled in other regions. Innovations
                  should have a starting TRL of 1–3 and are expected to progress towards TRL 6–7
                  by the end of the Challenge, demonstrating a clear journey from an initial
                  concept or proof of concept to a validated and demonstrable solution.
                </p>

                <div className="mt-8">
                  <TableCard categories={COMMUNITY_CATEGORIES} onSelect={handleSelect} />
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>

      <Footer />
      {selectedProfile ? (
        <ProfileModal
          profile={selectedProfile.profile}
          index={selectedProfile.index}
          onClose={() => setSelectedProfile(null)}
        />
      ) : null}
    </div>
  );
}