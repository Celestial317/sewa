import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding announcements...");

  // Upsert so running the seed multiple times is safe
  const announcements = [
    {
      refNumber: "SEWA-CIR-01",
      category: "Problem Statements",
      title: "Release of UDAN Phase 1 Problem Statements & Evaluation Rubrics",
      summary:
        "Detailed problem statements across five national themes are now available. Registered teams should review the official submission template and evaluation rubrics.",
      detail:
        "Problem statements span AgriTech, Clean Energy, Healthcare & Biomedical, Smart Mobility, and Industry 4.0. Teams can download the Phase 1 submission dossier from their dashboard.",
    },
    {
      refNumber: "SEWA-CIR-02",
      category: "Mentorship",
      title: "DTU Central Innovation Labs & Prototyping Workshop Schedule",
      summary:
        "Shortlisted teams receive access to prototyping machinery, testing facilities and dedicated faculty mentors across engineering departments.",
      detail:
        "Hands-on sessions will be held at DTU Central Fabrication Facilities including 5-axis CNC machining, laser cutting, PCB fabrication, and high-performance computing clusters.",
    },
    {
      refNumber: "SEWA-CIR-03",
      category: "Guidelines",
      title: "Inter-Disciplinary Team Registration & Eligibility Norms",
      summary:
        "Teams may comprise two to five members from accredited universities, polytechnics or eligible early-stage student startups.",
      detail:
        "Cross-departmental collaboration is strongly prioritized. Teams must submit institutional verification letters by 20 September 2026.",
    },
    {
      refNumber: "SEWA-CIR-04",
      category: "Mentorship",
      title: "Technical Webinar on Patent Filing & IP Protection for Innovators",
      summary:
        "Join leading patent attorneys and incubator directors for a practical masterclass on protecting your innovation prior to public exhibitions.",
      detail:
        "Key topics include patent prior-art searches, provisional patent filing procedures, copyright for embedded firmware, and commercialization licensing strategies.",
    },
    {
      refNumber: "SEWA-CIR-05",
      category: "Evaluation",
      title: "Regional Hub Screening Criteria & UDAN Milestone 1 Deliverables",
      summary:
        "Screening committees across five regional hubs will evaluate entries on technical novelty, feasibility, and grassroots deployment impact.",
      detail:
        "Evaluations follow a standardized 100-point rubric assessing problem-solution fit (30%), engineering feasibility (30%), scalability (20%), and execution roadmap (20%).",
    },
    {
      refNumber: "SEWA-CIR-06",
      category: "Announcements",
      title: "Seed Grant Allocation & Incubation Fast-Track for Top Finalists",
      summary:
        "Top 25 validated prototypes receive direct equity-free prototype grants and incubation opportunities at DTU IIF.",
      detail:
        "Grants up to ₹5,00,000 per team alongside dedicated co-working spaces, cloud credits, and pilot deployment testing with institutional partners.",
    },
  ];

  for (const a of announcements) {
    await prisma.announcement.upsert({
      where: { title: a.title },
      update: { refNumber: a.refNumber, category: a.category, summary: a.summary, detail: a.detail },
      create: a,
    });
  }

  console.log(`✅ Seeded ${announcements.length} announcements.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
