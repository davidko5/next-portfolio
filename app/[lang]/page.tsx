import {
  Experience,
  GeneralInformation,
  Project,
  SocialMediaLink,
} from "@/app/lib/types";
import AnimatedGradientBackground from "../ui/common/animated-background";
import { PortfolioRoot } from "../ui/[lang]/portfolio-root";
import { fetchData } from "../lib/api";
import { STRAPI_API_BASE_URL } from "../lib/constants";
import { Metadata } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl" }, { lang: "ua" }];
}

const SITE_URL = "https://portfolio.kondraten.dev";

const titles = {
  en: "Davyd Kondratenko — Full Stack Developer (React, Next.js, NestJS)",
  pl: "Davyd Kondratenko — Full Stack Developer (React, Next.js, NestJS)",
  ua: "Давид Кондратенко — Full Stack Developer (React, Next.js, NestJS)",
} as const;

const descriptions = {
  en: "Full Stack Developer with 3.5 years of experience shipping production apps with Next.js, React, and Node.js. Based in Rzeszów, Poland.",
  pl: "Full Stack Developer z 3,5-letnim doświadczeniem w tworzeniu aplikacji produkcyjnych z Next.js, React i Node.js. Rzeszów, Polska.",
  ua: "Full Stack Developer з 3,5 роками досвіду в продакшн-розробці на Next.js, React і Node.js. Жешув, Польща.",
} as const;

const ogLocales = {
  en: "en_US",
  pl: "pl_PL",
  ua: "uk_UA",
} as const;

const SUPPORTED_LANGS = ["en", "pl", "ua"] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];

const isSupportedLang = (value: string): value is Lang =>
  (SUPPORTED_LANGS as readonly string[]).includes(value);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const currentLang: Lang = isSupportedLang(lang) ? lang : "en";

  return {
    title: titles[currentLang],
    description: descriptions[currentLang],
    alternates: {
      canonical: `${SITE_URL}/${currentLang}`,
      languages: {
        en: `${SITE_URL}/en`,
        pl: `${SITE_URL}/pl`,
        "uk-UA": `${SITE_URL}/ua`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      type: "profile",
      siteName: "Davyd Kondratenko Portfolio",
      firstName: "Davyd",
      lastName: "Kondratenko",
      username: "davidko5",
      title: titles[currentLang],
      description: descriptions[currentLang],
      url: `${SITE_URL}/${currentLang}`,
      locale: ogLocales[currentLang],
      alternateLocale: SUPPORTED_LANGS.filter((l) => l !== currentLang).map(
        (l) => ogLocales[l],
      ),
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Davyd Kondratenko — Full Stack Developer",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@davidko5",
      title: titles[currentLang],
      description: descriptions[currentLang],
      images: [`${SITE_URL}/twitter-image`],
    },
  };
}

async function getPageData(lang: string): Promise<
  | {
      generalInformation: GeneralInformation;
      socialMediaLinks: Array<SocialMediaLink>;
      experiences: Array<Experience>;
      projects: Array<Project>;
    }
  | undefined
> {
  const localeMapping = lang === "ua" ? "uk" : lang === "pl" ? "pl" : "en";

  const endpoints = {
    generalInformation: `${STRAPI_API_BASE_URL}/general-information?populate=resumeLink&locale=${localeMapping}`,
    socialMediaLinks: `${STRAPI_API_BASE_URL}/social-media-links`,
    experience: `${STRAPI_API_BASE_URL}/experiences?populate=skills&locale=${localeMapping}`,
    projects: `${STRAPI_API_BASE_URL}/projects?populate[0]=thumbnail&populate[1]=skills&locale=${localeMapping}`,
  };

  try {
    const [generalInformation, socialMediaLinks, experiences, projects] =
      await Promise.all([
        fetchData<{ data: GeneralInformation }>(endpoints.generalInformation),
        fetchData<{ data: Array<SocialMediaLink> }>(endpoints.socialMediaLinks),
        fetchData<{ data: Array<Experience> }>(endpoints.experience),
        fetchData<{ data: Array<Project> }>(endpoints.projects),
      ]);

    return {
      generalInformation: generalInformation.data,
      socialMediaLinks: socialMediaLinks.data,
      experiences: experiences.data,
      projects: projects.data,
    };
  } catch (error) {
    if (error instanceof Error)
      throw new Error(`Error fetching data: ${error.message}`);
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const pageData = await getPageData(lang);

  if (!pageData) return null;

  return (
    <div className="container mx-auto">
      <AnimatedGradientBackground />
      <PortfolioRoot
        generalInformation={pageData.generalInformation}
        socialMediaLinks={pageData.socialMediaLinks}
        experiences={pageData.experiences}
        projects={pageData.projects}
        lang={lang}
      />
    </div>
  );
}
