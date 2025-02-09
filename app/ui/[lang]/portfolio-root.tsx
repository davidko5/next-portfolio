import {
  Experience,
  GeneralInformation,
  Project,
  SocialMediaLink,
} from '@/app/lib/types';
import { RootLeftSide } from './root-left-side';
import { RootRightSide } from './root-right-side';

export function PortfolioRoot({
  generalInformation,
  socialMediaLinks,
  experiences,
  projects,
  lang,
}: {
  generalInformation: GeneralInformation;
  socialMediaLinks: Array<SocialMediaLink>;
  experiences: Array<Experience>;
  projects: Array<Project>;
  lang: string;
}) {
  return (
    // overflow-auto is needed for left side to be sticky 
    <div className='md:flex justify-between gap-10 h-[100vh] md:overflow-auto'>
      {/* Left Side */}
      <RootLeftSide
        lang={lang}
        generalInformation={generalInformation}
        socialMediaLinks={socialMediaLinks}
      />
      {/* Right Side */}
      <RootRightSide
        lang={lang}
        generalInformation={generalInformation}
        experiences={experiences}
        projects={projects}
      />
    </div>
  );
}
