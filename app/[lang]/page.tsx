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

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }, { lang: 'ua' }];
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
    <>
      <AnimatedGradientBackground />
      <PortfolioRoot
        generalInformation={pageData.generalInformation}
        socialMediaLinks={pageData.socialMediaLinks}
        experiences={pageData.experiences}
        projects={pageData.projects}
        lang={lang}
      />
    </>
  );
}
