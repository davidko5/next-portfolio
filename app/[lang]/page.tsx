import { GeneralInformation } from '@/lib/types';
import AnimatedGradientBackground from '../ui/common/animated-background';
import { PortfolioRoot } from '../ui/portfolio-root';

// export const revalidate = 1;
// export const dynamicParams = true

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }, { lang: 'ua' }];
}

async function getPageData(
  lang: string
): Promise<{ data: GeneralInformation }> {
  const localeMapping = lang === 'ua' ? 'uk' : lang === 'pl' ? 'pl' : 'en';
  const res = await fetch(
    `https://strapi-resume.onrender.com/api/general-information?locale=${localeMapping}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getPageData(lang);

  return (
    <>
      <AnimatedGradientBackground />
      <PortfolioRoot generalInformation={pageData.data} />
    </>
  );
}
