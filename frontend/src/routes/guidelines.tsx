import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText, MapPin, UsersRound } from "lucide-react";
import { Footer, Header } from "../components/SewaSite";

export const Route = createFileRoute("/guidelines")({
  head: () => ({
    meta: [
      { title: "Guidelines | SEWA 2026" },
      {
        name: "description",
        content: "Eligibility, registration, submission, and regional coordination guidelines for SEWA 2026.",
      },
    ],
  }),
  component: GuidelinesPage,
});

const eligibilityRows = [
  {
    number: "I",
    category: "School & Vocational",
    participants: (
      <>
        Students from <strong className="font-bold text-[#14234B]">Class X onwards up to ITI level</strong>, participating individually or in teams, with appropriate institutional support.
      </>
    ),
    badgeBg: "bg-[#5294E2]",
    rowBg: "bg-[#F0F7FF]",
    boldDesc: false,
  },
  {
    number: "II",
    category: "Diploma & Higher Education",
    participants: (
      <>
        Students/teams from <strong className="font-bold text-[#14234B]">Diploma, Undergraduate, Postgraduate and Ph.D. programmes</strong>, including technical and non-technical institutions.
      </>
    ),
    badgeBg: "bg-[#52AB77]",
    rowBg: "bg-[#EFF9F3]",
    boldDesc: false,
  },
  {
    number: "III",
    category: "Industry & Government",
    participants: (
      <>
        Urban/Rural industries, MSMEs, startups, R&amp;D organisations and Government laboratories, participating individually or through collaborative teams.
      </>
    ),
    badgeBg: "bg-[#F39C42]",
    rowBg: "bg-[#FFF8EE]",
    boldDesc: true,
  },
];

const eligibilityCards = [
  {
    key: "participation",
    category: "Participation",
    text: "Individuals, groups/teams and eligible organisations may participate, subject to the specific requirements of each challenge.",
    cardBg: "bg-[#F3F4FE]",
    badgeBg: "bg-[#ECEFFD]",
    titleColor: "text-[#14234B]",
    icon: <UsersRound className="size-6 text-[#5861B5]" strokeWidth={2.2} />,
    minHeight: "min-h-[96px]",
  },
  {
    key: "applicability",
    category: "Applicability",
    text: (
      <>
        In general, the same three participant categories will be applicable to both <strong className="font-bold text-[#14234B]">National-Level</strong> and <strong className="font-bold text-[#14234B]">Local-Level Challenges</strong>, however, may vary depending upon the problem statement.
      </>
    ),
    cardBg: "bg-[#EFF9F4]",
    badgeBg: "bg-[#DCF2E4]",
    titleColor: "text-[#10653D]",
    icon: <FileText className="size-6 text-[#147A46]" strokeWidth={2.2} />,
    minHeight: "min-h-[118px]",
  },
  {
    key: "northern-region",
    category: "Northern Region COORDINATION",
    text: "Participants from Jammu & Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Chandigarh, NCT of Delhi, Punjab, Haryana and Uttar Pradesh are eligible to participate under the Northern Region coordinated by DTU.",
    cardBg: "bg-[#FFF4F4]",
    badgeBg: "bg-[#F2DCDC]",
    titleColor: "text-[#F53838]",
    icon: <MapPin className="size-6 text-[#7A1414]" strokeWidth={2.2} />,
    minHeight: "min-h-[118px]",
  },
];

const sectionHeadingClass = "t-main-heading uppercase";

function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Header activeNav="guidelines" />

      <main className="t-section-stack site-shell max-w-[1200px] py-10 sm:py-16">
        <section aria-labelledby="eligibility-heading" className="w-full">
          <h1 id="eligibility-heading" className={`${sectionHeadingClass} text-center`}>
            ELIGIBILITY
          </h1>
          <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-[14px]">
            {/* Table Header & Category Rows with horizontal scroll protection on mobile */}
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="min-w-[760px] md:min-w-0 flex flex-col gap-[14px]">
                {/* Table Column Headers */}
                <div className="w-full h-[50.5px] bg-[#EBF1F8] rounded-[16px] grid grid-cols-[115px_285px_1fr] items-center">
                  <div className="flex items-center justify-center font-bold text-[15px] leading-[22px] text-[#334155]">
                    #
                  </div>
                  <div className="pl-[24px] font-bold text-[15px] leading-[22px] text-[#1F2D48]">
                    Category
                  </div>
                  <div className="pl-[32px] pr-5 font-bold text-[15px] leading-[22px] text-[#1F2D48]">
                    Eligible Participants
                  </div>
                </div>

                {/* Category Rows */}
                {eligibilityRows.map((row) => (
                  <article
                    key={row.number}
                    className={`w-full min-h-[88px] ${row.rowBg} rounded-[16px] grid grid-cols-[115px_285px_1fr] items-center py-3.5`}
                  >
                    <div className="flex items-center pl-[20px]">
                      <div
                        className={`size-[48px] ${row.badgeBg} rounded-full flex items-center justify-center text-white font-bold text-[18px] leading-[28px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]`}
                      >
                        {row.number}
                      </div>
                    </div>
                    <div className="pl-[24px] pr-4 h-full flex items-center border-r border-black/[0.04]">
                      <h3 className="t-subheading-2 text-[#112347]">
                        {row.category}
                      </h3>
                    </div>
                    <div className="pl-[32px] pr-5 flex items-center">
                      <p
                        className={`t-content ${row.boldDesc ? "font-bold text-[#14234B]" : "text-[#475569]"
                          }`}
                      >
                        {row.participants}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Info Cards */}
            {eligibilityCards.map((card) => (
              <article
                key={card.key}
                className={`w-full ${card.minHeight} ${card.cardBg} rounded-[16px] p-5 flex flex-row items-center gap-6`}
              >
                <div
                  className={`size-[56px] ${card.badgeBg} rounded-full flex items-center justify-center shrink-0 shadow-[0px_1px_2px_rgba(0,0,0,0.05)]`}
                >
                  {card.icon}
                </div>
                <div className="w-[1px] h-[40px] bg-[#E2E8F0] shrink-0" aria-hidden="true" />
                <div className="flex flex-col gap-[2px] min-w-0 flex-1">
                  <h3 className={`t-subheading-2 ${card.titleColor}`}>
                    {card.category}
                  </h3>
                  <div className="t-content text-[#475569]">
                    {card.text}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="participate-heading" className="w-full">
          <h2 id="participate-heading" className={sectionHeadingClass}>
            How to participate
          </h2>
          <p className="t-content w-full text-justify text-black mb-8">
            Eligible participants can take part in the SEWA First RYIC 2026 through the structured registration journey, designed to guide them from identifying a challenge to presenting their innovation.
            <br />
            The registration process and key steps are outlined below:
          </p>

          {/* Alternating 6-Step Infographic Diagram */}
          <div className="relative w-full overflow-x-auto pb-8 pt-4">
            <div className="min-w-[1100px] relative px-8 py-20">
              {/* Continuous Segmented Horizontal Baseline Bar */}
              <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-[18px] rounded-full overflow-hidden flex z-0 shadow-sm">
                <div className="flex-1 bg-[#E85929]" />
                <div className="flex-1 bg-[#F1A914]" />
                <div className="flex-1 bg-[#76B82A]" />
                <div className="flex-1 bg-[#0FB5B3]" />
                <div className="flex-1 bg-[#2368B2]" />
                <div className="flex-1 bg-[#6C2582]" />
              </div>

              {/* 6 Steps Grid Layout */}
              <div className="relative grid grid-cols-6 z-10">
                {/* ==================== STEP 01 (Down) ==================== */}
                <div className="flex flex-col items-center">
                  {/* Upper Spacer */}
                  <div className="h-[180px]" />
                  {/* Baseline Number Pill Node */}
                  <div className="w-14 h-14 rounded-full bg-[#E85929] text-white flex items-center justify-center font-extrabold text-xl shadow-md border-[5px] border-white z-20">
                    01
                  </div>
                  {/* Downward Connector Line */}
                  <div className="w-[3px] h-[75px] bg-[#E85929]" />
                  {/* Content Area (Ring Icon + Adjacent Text) */}
                  <div className="flex items-start gap-3 w-full px-2">
                    {/* Ring Icon Badge */}
                    <div className="shrink-0 w-20 h-20 rounded-full border-[3.5px] border-[#E85929] bg-white shadow-sm flex items-center justify-center p-4">
                      {/* Checklist / Clipboard SVG */}
                      <svg
                        className="w-full h-full text-[#E85929]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                        <path d="m9 14 2 2 4-4" />
                        <path d="M9 10h6" />
                      </svg>
                    </div>
                    {/* Text */}
                    <div className="flex-1 text-left pt-1">
                      <h3 className="text-[#E85929] font-extrabold text-sm uppercase leading-tight tracking-tight">
                        01 Check
                        <br />
                        Eligibility
                      </h3>
                      <p className="text-slate-600 text-[11px] leading-relaxed mt-1.5 font-medium">
                        Confirm your eligibility and select the appropriate regional or participation category.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==================== STEP 02 (Up) ==================== */}
                <div className="flex flex-col items-center">
                  {/* Content Area (Ring Icon + Adjacent Text) */}
                  <div className="flex items-center gap-3 w-full px-2">
                    {/* Ring Icon Badge */}
                    <div className="shrink-0 w-20 h-20 rounded-full border-[3.5px] border-[#F1A914] bg-white shadow-sm flex items-center justify-center p-4">
                      {/* Signpost / Directional Crossroad SVG */}
                      <svg
                        className="w-full h-full text-[#F1A914]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2v20" />
                        <path
                          d="M18 6H6a1 1 0 0 1-.8-.4l-2.5-3 2.5-3A1 1 0 0 1 6 0h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z"
                          transform="translate(0, 4)"
                        />
                        <path
                          d="M6 14h12a1 1 0 0 0 .8-.4l2.5-3-2.5-3A1 1 0 0 0 18 7H6a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1z"
                          transform="translate(0, 6)"
                        />
                      </svg>
                    </div>
                    {/* Text */}
                    <div className="flex-1 text-left">
                      <h3 className="text-[#F1A914] font-extrabold text-sm uppercase leading-tight tracking-tight">
                        02 Select
                        <br />
                        Innovation Track
                      </h3>
                      <p className="text-slate-600 text-[11px] leading-relaxed mt-1.5 font-medium">
                        Choose either National Level Innovation or Local Community Level Innovation.
                      </p>
                    </div>
                  </div>
                  {/* Upward Connector Line */}
                  <div className="w-[3px] h-[75px] bg-[#F1A914]" />
                  {/* Baseline Number Pill Node */}
                  <div className="w-14 h-14 rounded-full bg-[#F1A914] text-white flex items-center justify-center font-extrabold text-xl shadow-md border-[5px] border-white z-20">
                    02
                  </div>
                  {/* Lower Spacer */}
                  <div className="h-[180px]" />
                </div>

                {/* ==================== STEP 03 (Down) ==================== */}
                <div className="flex flex-col items-center">
                  {/* Upper Spacer */}
                  <div className="h-[180px]" />
                  {/* Baseline Number Pill Node */}
                  <div className="w-14 h-14 rounded-full bg-[#76B82A] text-white flex items-center justify-center font-extrabold text-xl shadow-md border-[5px] border-white z-20">
                    03
                  </div>
                  {/* Downward Connector Line */}
                  <div className="w-[3px] h-[75px] bg-[#76B82A]" />
                  {/* Content Area (Ring Icon + Adjacent Text) */}
                  <div className="flex items-start gap-3 w-full px-2">
                    {/* Ring Icon Badge */}
                    <div className="shrink-0 w-20 h-20 rounded-full border-[3.5px] border-[#76B82A] bg-white shadow-sm flex items-center justify-center p-4">
                      {/* Lightbulb Theme SVG */}
                      <svg
                        className="w-full h-full text-[#76B82A]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                    </div>
                    {/* Text */}
                    <div className="flex-1 text-left pt-1">
                      <h3 className="text-[#76B82A] font-extrabold text-sm uppercase leading-tight tracking-tight">
                        03 Select
                        <br />
                        Theme
                      </h3>
                      <p className="text-slate-600 text-[11px] leading-relaxed mt-1.5 font-medium">
                        Choose the theme that best matches the challenge you wish to address.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==================== STEP 04 (Up) ==================== */}
                <div className="flex flex-col items-center">
                  {/* Content Area (Ring Icon + Adjacent Text) */}
                  <div className="flex items-center gap-3 w-full px-2">
                    {/* Ring Icon Badge */}
                    <div className="shrink-0 w-20 h-20 rounded-full border-[3.5px] border-[#0FB5B3] bg-white shadow-sm flex items-center justify-center p-4">
                      {/* Document Search Problem Statement SVG */}
                      <svg
                        className="w-full h-full text-[#0FB5B3]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <circle cx="11.5" cy="14.5" r="2.5" />
                        <path d="m13.5 16.5 2 2" />
                      </svg>
                    </div>
                    {/* Text */}
                    <div className="flex-1 text-left">
                      <h3 className="text-[#0FB5B3] font-extrabold text-sm uppercase leading-tight tracking-tight">
                        04 Select Problem
                        <br />
                        Statement
                      </h3>
                      <p className="text-slate-600 text-[11px] leading-relaxed mt-1.5 font-medium">
                        Select a specific problem statement from the list available under the chosen theme. You may also propose a relevant problem, where permitted.
                      </p>
                    </div>
                  </div>
                  {/* Upward Connector Line */}
                  <div className="w-[3px] h-[75px] bg-[#0FB5B3]" />
                  {/* Baseline Number Pill Node */}
                  <div className="w-14 h-14 rounded-full bg-[#0FB5B3] text-white flex items-center justify-center font-extrabold text-xl shadow-md border-[5px] border-white z-20">
                    04
                  </div>
                  {/* Lower Spacer */}
                  <div className="h-[180px]" />
                </div>

                {/* ==================== STEP 05 (Down) ==================== */}
                <div className="flex flex-col items-center">
                  {/* Upper Spacer */}
                  <div className="h-[180px]" />
                  {/* Baseline Number Pill Node */}
                  <div className="w-14 h-14 rounded-full bg-[#2368B2] text-white flex items-center justify-center font-extrabold text-xl shadow-md border-[5px] border-white z-20">
                    05
                  </div>
                  {/* Downward Connector Line */}
                  <div className="w-[3px] h-[75px] bg-[#2368B2]" />
                  {/* Content Area (Ring Icon + Adjacent Text) */}
                  <div className="flex items-start gap-3 w-full px-2">
                    {/* Ring Icon Badge */}
                    <div className="shrink-0 w-20 h-20 rounded-full border-[3.5px] border-[#2368B2] bg-white shadow-sm flex items-center justify-center p-4">
                      {/* Group / Team SVG */}
                      <svg
                        className="w-full h-full text-[#2368B2]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    {/* Text */}
                    <div className="flex-1 text-left pt-1">
                      <h3 className="text-[#2368B2] font-extrabold text-sm uppercase leading-tight tracking-tight">
                        05 Form Your
                        <br />
                        Team
                      </h3>
                      <p className="text-slate-600 text-[11px] leading-relaxed mt-1.5 font-medium">
                        Create your team and designate a Team Leader.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==================== STEP 06 (Up) ==================== */}
                <div className="flex flex-col items-center">
                  {/* Content Area (Ring Icon + Adjacent Text) */}
                  <div className="flex items-center gap-3 w-full px-2">
                    {/* Ring Icon Badge */}
                    <div className="shrink-0 w-20 h-20 rounded-full border-[3.5px] border-[#6C2582] bg-white shadow-sm flex items-center justify-center p-4">
                      {/* Laptop / Proposal Submit SVG */}
                      <svg
                        className="w-full h-full text-[#6C2582]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="18" height="12" x="3" y="4" rx="2" />
                        <line x1="2" x2="22" y1="20" y2="20" />
                        {/* Mouse pointer on screen */}
                        <path d="m14 9-2 5 1.5-1 1.5 2 1-1-1.5-2L16 11z" fill="currentColor" stroke="none" />
                      </svg>
                    </div>
                    {/* Text */}
                    <div className="flex-1 text-left">
                      <h3 className="text-[#6C2582] font-extrabold text-sm uppercase leading-tight tracking-tight">
                        06 Submit
                        <br />
                        Innovation Proposal
                      </h3>
                      <p className="text-slate-600 text-[11px] leading-relaxed mt-1.5 font-medium">
                        Describe the problem, proposed solution, innovation, technology, beneficiaries, feasibility and expected impact.
                      </p>
                    </div>
                  </div>
                  {/* Upward Connector Line */}
                  <div className="w-[3px] h-[75px] bg-[#6C2582]" />
                  {/* Baseline Number Pill Node */}
                  <div className="w-14 h-14 rounded-full bg-[#6C2582] text-white flex items-center justify-center font-extrabold text-xl shadow-md border-[5px] border-white z-20">
                    06
                  </div>
                  {/* Lower Spacer */}
                  <div className="h-[180px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="submission-heading" className="w-full">
          <h2 id="submission-heading" className={sectionHeadingClass}>
            Submission format
          </h2>
          <p className="t-content w-full text-justify text-black mb-8">
            Participants are required to submit their innovation proposal in the prescribed 15-slide presentation format. The presentation should be concise, structured and focused on demonstrating the journey from problem identification to innovation, prototype development and potential impact. The prescribed slide format is appended for reference
          </p>

          <div className="w-full max-w-[1180px] mx-auto flex flex-col gap-4">
            {/* National Theme Card */}
            <div className="w-full bg-white border border-[#F1F5F9] rounded-[16px] p-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0px_2px_8px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative w-11 h-14 bg-[#EA4335] rounded-lg flex flex-col items-center justify-center text-white shadow-sm shrink-0">
                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#D93025] rounded-bl" />
                  <span className="text-[10px] font-black tracking-wider mt-1">PPT</span>
                </div>
                <h3 className="t-subheading-2 text-[#112347]">
                  National Theme Submission Format
                </h3>
              </div>

              <div className="flex items-center gap-6 self-end sm:self-auto shrink-0">
                <span className="text-[14px] font-medium text-[#64748B]">291 KB</span>
                <a
                  href="#download-national"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF1F2] text-[#E11D48] hover:bg-[#FFE4E6] font-semibold text-[13.5px] transition-colors"
                >
                  <Download className="size-4" strokeWidth={2.2} />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Regional Theme Card */}
            <div className="w-full bg-white border border-[#F1F5F9] rounded-[16px] p-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0px_2px_8px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-4 min-w-0">
                <div className="relative w-11 h-14 bg-[#EA4335] rounded-lg flex flex-col items-center justify-center text-white shadow-sm shrink-0">
                  <div className="absolute top-0 right-0 w-3 h-3 bg-[#D93025] rounded-bl" />
                  <span className="text-[10px] font-black tracking-wider mt-1">PPT</span>
                </div>
                <h3 className="t-subheading-2 text-[#112347]">
                  Regional Theme Submission Format
                </h3>
              </div>

              <div className="flex items-center gap-6 self-end sm:self-auto shrink-0">
                <span className="text-[14px] font-medium text-[#64748B]">291 KB</span>
                <a
                  href="#download-regional"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FFF1F2] text-[#E11D48] hover:bg-[#FFE4E6] font-semibold text-[13.5px] transition-colors"
                >
                  <Download className="size-4" strokeWidth={2.2} />
                  <span>Download</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}