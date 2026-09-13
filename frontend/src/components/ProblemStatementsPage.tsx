import { useEffect } from "react";
import { Header, Footer } from "./SewaSite";

type Category = {
  label: string;
  psTitle: string;
  psUrl?: string;
  idNumber: string;
  badgeBg: string;
  badgeText: string;
};

/* ── National Level categories ─────────────────────────────────────── */
export const NATIONAL_CATEGORIES: Category[] = [
  {
    label: "Defence, Intelligence, Space & National Security",
    psTitle: "PS1 TITLE",
    idNumber: "NAT-001",
    badgeBg: "#FDE8E8",
    badgeText: "#E03137",
  },
  {
    label: "Disaster Management & Resilience",
    psTitle: "PS2 TITLE",
    idNumber: "NAT-002",
    badgeBg: "#DBEAFE",
    badgeText: "#0284C7",
  },
  {
    label: "Manufacturing & Electronics, AI, Robotics & Autonomous Systems",
    psTitle: "PS3 TITLE",
    idNumber: "NAT-003",
    badgeBg: "#DCFCE7",
    badgeText: "#16A34A",
  },
  {
    label: "Energy & Sustainable Technology & Environment",
    psTitle: "PS4 TITLE",
    idNumber: "NAT-004",
    badgeBg: "#FEF3C7",
    badgeText: "#D97706",
  },
  {
    label: "Advanced Engineering, Infrastructure, Future Mobility & Transportation",
    psTitle: "PS5 TITLE",
    idNumber: "NAT-005",
    badgeBg: "#EDE9FE",
    badgeText: "#7C3AED",
  },
];

/* ── Community Level categories ─────────────────────────────────────── */
export const COMMUNITY_CATEGORIES: Category[] = [
  {
    label: "Village & Panchayat Development, Agriculture & Rural Economy",
    psTitle: "PS1 TITLE",
    idNumber: "REG-001",
    badgeBg: "#FDE8E8",
    badgeText: "#E03137",
  },
  {
    label: "Education & Skill Development",
    psTitle: "PS2 TITLE",
    idNumber: "REG-002",
    badgeBg: "#DBEAFE",
    badgeText: "#0284C7",
  },
  {
    label: "Healthcare & Community Well-being",
    psTitle: "PS3 TITLE",
    idNumber: "REG-003",
    badgeBg: "#DCFCE7",
    badgeText: "#16A34A",
  },
  {
    label: "City & Urban Problems",
    psTitle: "PS4 TITLE",
    idNumber: "REG-004",
    badgeBg: "#FEF3C7",
    badgeText: "#D97706",
  },
  {
    label: "Environment & Natural Resources",
    psTitle: "PS5 TITLE",
    idNumber: "REG-005",
    badgeBg: "#EDE9FE",
    badgeText: "#7C3AED",
  },
  {
    label: "Sports (Khelo India)",
    psTitle: "PS6 TITLE",
    idNumber: "REG-006",
    badgeBg: "#FDE8E8",
    badgeText: "#E03137",
  },
  {
    label: "Employment & Livelihood",
    psTitle: "PS7 TITLE",
    idNumber: "REG-007",
    badgeBg: "#DBEAFE",
    badgeText: "#0284C7",
  },
  {
    label: "Women & Child Safety and Development",
    psTitle: "PS8 TITLE",
    idNumber: "REG-008",
    badgeBg: "#DCFCE7",
    badgeText: "#16A34A",
  },
  {
    label: "Safety & Disaster Management",
    psTitle: "PS9 TITLE",
    idNumber: "REG-009",
    badgeBg: "#FEF3C7",
    badgeText: "#D97706",
  },
  {
    label: "Transport, Energy & Tourism",
    psTitle: "PS10 TITLE",
    idNumber: "REG-010",
    badgeBg: "#EDE9FE",
    badgeText: "#7C3AED",
  },
  {
    label: "Miscellaneous",
    psTitle: "PS11 TITLE",
    idNumber: "REG-011",
    badgeBg: "#FDE8E8",
    badgeText: "#E03137",
  },
];

/* ── Table Card ─────────────────────────────────────────────────────── */
function TableCard({ categories }: { categories: Category[] }) {
  return (
    /* Outer card — white, rounded-[24px], soft border + shadow */
    <div className="w-full rounded-[24px] border border-[rgba(226,232,240,0.8)] shadow-[0px_4px_24px_rgba(0,0,0,0.03)] bg-white overflow-hidden">
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
                <span className="text-[13px] font-bold tracking-[0.65px] uppercase text-[#60718B]">
                  #
                </span>
              </th>
              {/* CATEGORY */}
              <th className="px-6 py-4 text-left" style={{ width: "38%" }}>
                <span className="text-[13px] font-bold tracking-[0.65px] uppercase text-[#60718B]">
                  Category
                </span>
              </th>
              {/* PROBLEM STATEMENT */}
              <th className="px-6 py-4 text-left" style={{ width: "31%" }}>
                <span className="text-[13px] font-bold tracking-[0.65px] uppercase text-[#60718B]">
                  Problem Statement
                </span>
              </th>
              {/* ID NUMBER */}
              <th className="px-6 py-4 text-center" style={{ width: "23%" }}>
                <span className="text-[13px] font-bold tracking-[0.65px] uppercase text-[#60718B]">
                  ID Number
                </span>
              </th>
            </tr>
          </thead>

          {/* ── Body ── */}
          <tbody>
            {categories.map((row, i) => (
              <tr
                key={row.idNumber}
                className={`hover:bg-[#FAFBFD] transition-colors ${
                  i > 0 ? "border-t border-[#F1F5F9]" : ""
                }`}
              >
                {/* Number badge */}
                <td className="w-[84px] px-6 py-[20.5px] text-center">
                  <span
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[16px] font-bold leading-[24px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
                    style={{ background: row.badgeBg, color: row.badgeText }}
                  >
                    {i + 1}
                  </span>
                </td>

                {/* Category name */}
                <td className="px-6 py-[27.5px]" style={{ width: "38%" }}>
                  <span className="text-[15px] font-bold leading-[21px] tracking-[-0.375px] text-[#142340]">
                    {row.label}
                  </span>
                </td>

                {/* Problem statement link */}
                <td className="px-6 py-[22.5px]" style={{ width: "31%" }}>
                  <div className="flex items-center gap-3">
                    {/* PDF icon badge */}
                    <span className="inline-flex items-center justify-center w-8 h-8 shrink-0 rounded-lg border border-[#FECACA] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]" style={{ background: "rgba(254,242,242,0.6)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                    </span>

                    {/* Title */}
                    <span className="text-[14px] font-bold leading-[21px] text-[#142340]">
                      {row.psTitle}
                    </span>

                    {/* External link badge */}
                    <span className="inline-flex items-center justify-center w-7 h-7 shrink-0 rounded-full bg-white border border-[rgba(226,232,240,0.8)] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  </div>
                </td>

                {/* ID pill */}
                <td className="px-6 py-[24.5px] text-center" style={{ width: "23%" }}>
                  <span className="inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#EAF1F8] text-[12px] font-semibold tracking-[0.3px] text-[#1E2F4D]">
                    {row.idNumber}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────────── */
export function ProblemStatementsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

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
                  className="font-extrabold text-[20px] sm:text-[24px] leading-[1.2] tracking-[-0.02em] text-[#112347] uppercase"
                >
                  Theme 1: National Level Innovation
                </h2>
                <p className="mt-5 text-[15px] leading-[1.7] text-[#334155] sm:text-justify">
                  Participants will work on identified challenges and problem statements of national
                  significance, developing innovative, sustainable and scalable solutions with the
                  potential for adoption across India. Innovations should have a starting TRL of
                  4–6 and are expected to progress towards TRL 7–9 by the end of the Challenge,
                  demonstrating a clear pathway from validated technology to an operational,
                  deployable solution.
                </p>

                <div className="mt-8">
                  <TableCard categories={NATIONAL_CATEGORIES} />
                </div>

                {/* ── Pagination ── */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  {/* Page 1 — active */}
                  <button
                    type="button"
                    aria-current="page"
                    className="inline-flex items-center justify-center px-5 h-9 rounded-full bg-[#2368B2] text-white text-[14px] font-bold shadow-[0px_2px_6px_rgba(35,104,178,0.35)] hover:bg-[#1A4F8A] transition-colors"
                  >
                    Page 1
                  </button>

                  {/* Page 2 — inactive */}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-5 h-9 rounded-full border border-[rgba(226,232,240,0.8)] bg-white text-[14px] font-bold text-[#334155] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#F8FAFC] transition-colors"
                  >
                    Page 2
                  </button>

                  {/* Next chevron */}
                  <button
                    type="button"
                    aria-label="Next page"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(226,232,240,0.8)] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] text-[#64748B] hover:bg-[#F8FAFC] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
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
                  className="font-extrabold text-[20px] sm:text-[24px] leading-[1.2] tracking-[-0.02em] text-[#112347] uppercase"
                >
                  Theme 2: Local Community Level Innovations –{" "}
                  Village / District / State
                </h2>
                <p className="mt-5 text-[15px] leading-[1.7] text-[#334155] sm:text-justify">
                  Participants will identify real problems and unmet needs within their own
                  villages, districts or states and develop locally relevant, affordable,
                  sustainable and implementable solutions that directly benefit the community and
                  have the potential to be replicated or scaled in other regions. Innovations
                  should have a starting TRL of 1–3 and are expected to progress towards TRL 6–7
                  by the end of the Challenge, demonstrating a clear journey from an initial
                  concept or proof of concept to a validated and demonstrable solution.
                </p>

                <div className="mt-8">
                  <TableCard categories={COMMUNITY_CATEGORIES} />
                </div>

                {/* ── Pagination ── */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  {/* Page 1 — active */}
                  <button
                    type="button"
                    aria-current="page"
                    className="inline-flex items-center justify-center px-5 h-9 rounded-full bg-[#2368B2] text-white text-[14px] font-bold shadow-[0px_2px_6px_rgba(35,104,178,0.35)] hover:bg-[#1A4F8A] transition-colors"
                  >
                    Page 1
                  </button>

                  {/* Page 2 — inactive */}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-5 h-9 rounded-full border border-[rgba(226,232,240,0.8)] bg-white text-[14px] font-bold text-[#334155] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#F8FAFC] transition-colors"
                  >
                    Page 2
                  </button>

                  {/* Next chevron */}
                  <button
                    type="button"
                    aria-label="Next page"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[rgba(226,232,240,0.8)] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] text-[#64748B] hover:bg-[#F8FAFC] transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </section>

            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}