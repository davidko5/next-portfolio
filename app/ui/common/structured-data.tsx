export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Davyd Kondratenko',
    jobTitle: 'Fullstack Developer',
    url: 'https://portfolio.kondraten.dev',
    image: 'https://portfolio.kondraten.dev/profile-pic.webp',
    email: 'dajan526@gmail.com',
    telephone: '+48-575-395-659',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rzeszów',
      addressCountry: 'Poland',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Rzeszow University of Technology',
    },
    sameAs: [
      'https://www.linkedin.com/in/davyd-kondratenko',
      'https://github.com/davidko5',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'NestJS',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'PostgreSQL',
      'MongoDB',
      'Redux',
      'React Native',
      'Tailwind CSS',
      'Strapi CMS',
      'Framer Motion',
      'AWS',
      'Express',
      'Playwright',
      'GitHub Actions',
      'CI/CD',
      'Web Development',
      'Frontend Development',
      'Backend Development',
      'REST API',
      'Database Design',
      'Electric Vehicle Software',
      'Mobile App Development',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Sola',
    },
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
