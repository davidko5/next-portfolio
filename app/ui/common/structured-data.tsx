import type { Graph, Person, ProfilePage, WebSite } from "schema-dts";

const SITE_URL = "https://portfolio.kondraten.dev";

const person: Person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Davyd Kondratenko",
  jobTitle: "Full Stack Developer",
  url: SITE_URL,
  image: `${SITE_URL}/profile-pic.webp`,
  email: "dajan526@gmail.com",
  telephone: "+48-575-395-659",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rzeszów",
    addressCountry: "Poland",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Rzeszow University of Technology",
    url: "https://weii.prz.edu.pl",
  },
  knowsLanguage: ["en", "pl", "uk"],
  sameAs: [
    "https://www.linkedin.com/in/davyd-kondratenko/",
    "https://github.com/davidko5",
  ],
  knowsAbout: [
    "TypeScript",
    "Next.js",
    "NestJS",
    "Node.js",
    "Strapi",
    "React",
    "JavaScript",
    "React Query",
    "Tailwind CSS",
    "Git",
    "Express",
    "SQL",
    "PostgreSQL",
    "Docker",
    "Zod",
    "Playwright",
    "Coolify",
    "GitHub Actions",
    "Redux",
    "RTK",
    "MongoDB",
    "AWS",
    "Firebase",
    "shadcn/ui",
    "React Testing Library",
    "MUI",
    "Python",
    "CSS",
    "HTML",
    "GraphQL",
    "CI/CD",
    "REST API",
    "Frontend Development",
    "Backend Development",
    "Web Development",
    "Electric Vehicle Software",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Boring Owl Software House",
    url: "https://boringowl.io",
  },
};

const website: WebSite = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Davyd Kondratenko Portfolio",
  inLanguage: ["en", "pl", "uk"],
  publisher: { "@id": `${SITE_URL}/#person` },
};

const profilePage: ProfilePage = {
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profile`,
  url: SITE_URL,
  mainEntity: { "@id": `${SITE_URL}/#person` },
  about: { "@id": `${SITE_URL}/#person` },
  isPartOf: { "@id": `${SITE_URL}/#website` },
};

const graph: Graph & { "@context": "https://schema.org" } = {
  "@context": "https://schema.org",
  "@graph": [person, website, profilePage],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
