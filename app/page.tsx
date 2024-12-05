import { GeneralInformation } from '@/lib/types';
import AnimatedGradientBackground from './ui/common/animated-background';
import { Metadata } from 'next';
import { PortfolioRoot } from './ui/portfolio-root';

export const metadata: Metadata = {
  title: 'Root Page',
  description: 'This is the root page of the app.',
};

export const revalidate = false;

async function getPageData(): Promise<{ data: GeneralInformation }> {
  const res = await fetch(
    'https://strapi-resume.onrender.com/api/general-information',
    {
      next: { revalidate },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  return res.json();
}

export default async function Page() {
  const pageData = await getPageData();

  return (
    <>
      <AnimatedGradientBackground />
      <PortfolioRoot generalInformation={pageData.data} />
    </>
  );
}
