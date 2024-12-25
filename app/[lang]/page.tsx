import { GeneralInformation, SocialMediaLink } from '@/app/lib/types';
import AnimatedGradientBackground from '../ui/common/animated-background';
import { PortfolioRoot } from '../ui/[lang]/portfolio-root';
import { fetchData } from '../lib/api';

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }, { lang: 'ua' }];
}

async function getPageData(lang: string): Promise<
  | {
      generalInformation: GeneralInformation;
      socialMediaLinks: Array<SocialMediaLink>;
    }
  | undefined
> {
  const localeMapping = lang === 'ua' ? 'uk' : lang === 'pl' ? 'pl' : 'en';

  const endpoints = {
    generalInformation: `https://strapi-resume.onrender.com/api/general-information?locale=${localeMapping}`,
    socialMediaLinks:
      'https://strapi-resume.onrender.com/api/social-media-links',
  };

  try {
    const [generalInformation, socialMediaLinks] = await Promise.all([
      fetchData<{ data: GeneralInformation }>(endpoints.generalInformation),
      fetchData<{ data: Array<SocialMediaLink> }>(endpoints.socialMediaLinks),
    ]);

    return {
      generalInformation: generalInformation.data,
      socialMediaLinks: socialMediaLinks.data,
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
        lang={lang}
      />
    </>
  );
}
