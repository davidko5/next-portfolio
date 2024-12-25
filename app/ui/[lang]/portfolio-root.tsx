import { GeneralInformation, SocialMediaLink } from '@/app/lib/types';
import { LanguageSelect } from './language-select';
import { getDictionary } from '../../[lang]/dictionaries';
import { RootLeftSide } from './root-left-side';

export async function PortfolioRoot({
  generalInformation,
  socialMediaLinks,
  lang,
}: {
  generalInformation: GeneralInformation;
  socialMediaLinks: Array<SocialMediaLink>;
  lang: string;
}) {
  const dict = await getDictionary(lang);

  return (
    <div className='flex justify-between'>
      {/* Left Side */}
      <RootLeftSide generalInformation={generalInformation} socialMediaLinks={socialMediaLinks}  lang={lang} />
      {/* Right Side */}
      <div className='w-[517px]'>
        <div className='flex justify-end'>
          <LanguageSelect lang={lang} />
        </div>
        <div className='mr-[72px]'>
          <h2 id='aboutMe' className='mt-[59px] text-2xl font-semibold'>
            {dict.aboutSection}
          </h2>
          <p className='mt-[24px] text-accent text-lg font-light'>
            {generalInformation.mainDetailsInfo}
          </p>
          <p className='mt-[12px] text-white text-base font-normal'>
            {generalInformation.mainShortInfo}
          </p>

          <h2 id='experience' className='mt-[82px] text-2xl font-semibold'>
            {dict.experienceSection}
          </h2>

          <h2 id='projects' className='mt-[82px] text-2xl font-semibold'>
            {dict.projectsSection}
          </h2>
        </div>
      </div>
    </div>
  );
}
