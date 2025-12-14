import {
  Experience,
  GeneralInformation,
  Project,
  SocialMediaLink,
} from '@/app/lib/types';
import AnimatedGradientBackground from '../ui/common/animated-background';
import { PortfolioRoot } from '../ui/[lang]/portfolio-root';
import { fetchData } from '../lib/api';
import { STRAPI_API_BASE_URL } from '../lib/constants';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }, { lang: 'ua' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const titles = {
    en: 'Davyd Kondratenko - Fullstack Developer',
    pl: 'Davyd Kondratenko - Fullstack Developer',
    ua: 'Давид Кондратенко - Fullstack Developer',
  };

  const descriptions = {
    en: 'Fullstack Developer with 3.5 years of experience in React, Next.js, TypeScript, and NestJS. Building EV charger management systems.',
    pl: 'Fullstack Developer z 3.5-letnim doświadczeniem w React, Next.js, TypeScript i NestJS. Tworzę systemy zarządzania ładowarkami EV.',
    ua: 'Fullstack Developer з 3.5 роками досвіду в React, Next.js, TypeScript та NestJS. Створюю системи управління зарядними станціями.',
  };

  const locales = {
    en: 'en_US',
    pl: 'pl_PL',
    ua: 'uk_UA',
  };

  const currentLang = (lang === 'en' || lang === 'pl' || lang === 'ua'
    ? lang
    : 'en') as 'en' | 'pl' | 'ua';

  return {
    title: titles[currentLang],
    description: descriptions[currentLang],
    alternates: {
      canonical: `https://portfolio.kondraten.dev/${lang}`,
      languages: {
        en: 'https://portfolio.kondraten.dev/en',
        pl: 'https://portfolio.kondraten.dev/pl',
        'uk-UA': 'https://portfolio.kondraten.dev/ua',
      },
    },
    openGraph: {
      title: titles[currentLang],
      description: descriptions[currentLang],
      url: `https://portfolio.kondraten.dev/${lang}`,
      locale: locales[currentLang],
      alternateLocale: Object.entries(locales)
        .filter(([key]) => key !== currentLang)
        .map(([, value]) => value),
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
  const localeMapping = lang === 'ua' ? 'uk' : lang === 'pl' ? 'pl' : 'en';

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
    <div className='container mx-auto'>
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
