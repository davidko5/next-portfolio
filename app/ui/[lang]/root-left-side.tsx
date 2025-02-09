import { GeneralInformation, SocialMediaLink } from '@/app/lib/types';
import { archivo_black } from '../fonts';
import { getDictionary } from '@/app/[lang]/dictionaries';
import Link from 'next/link';
import EmailIcon from '../icons/email';
import GithubLogoIcon from '../icons/linkedin-logo';
import LinkedinLogoIcon from '../icons/github-logo';
import { ReactElement } from 'react';
import { LanguageSelect } from './language-select';

const linkToSvgMap: { [key: string]: ReactElement } = {
  email: (
    <EmailIcon className='w-[24px] h-[24px] hover:w-[25px] hover:h-[25px] hover:text-accent transition-all ease-in-out duration-300' />
  ),
  github: (
    <GithubLogoIcon className='w-[24px] h-[24px] hover:w-[25px] hover:h-[25px] hover:text-accent transition-all ease-in-out duration-300' />
  ),
  linkedin: (
    <LinkedinLogoIcon className='w-[24px] h-[24px] hover:w-[25px] hover:h-[25px] hover:text-accent transition-all ease-in-out duration-300' />
  ),
};

export async function RootLeftSide({
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
    <div className='ml-6 md:ml-[72px] w-[517px] md:sticky top-0'>
      {/* Language Select Dropdown rendered here for wide screens */}
      <div className='flex justify-end md:hidden'>
        <LanguageSelect lang={lang} />
      </div>
      <h1
        className={`${archivo_black.className} text-5xl text-accent mt-[102px] max-w-[486px] leading-[52.22px]`}
      >
        {generalInformation.name}
      </h1>
      <p className='mt-[16px] text-primary text-2xl font-light leading-[31.2px]'>
        {generalInformation.position}
      </p>
      <p className='mt-[16px] text-white text-lg font-normal leading-[23px]'>
        {generalInformation.sideShortInfo}
      </p>

      {/* Navigation */}
      <ul className='mt-[38px] pl-4 border-l border-l-white flex flex-col justify-between'>
        <li className='h-[37.3px]'>
          <Link
            href={'#aboutMe'}
            className='text-base leading-[37.3px] uppercase font-medium hover:ml-1.5  hover:text-accent hover:text-[17px] transition-all ease-in-out duration-300'
          >
            {dict.aboutMe}
          </Link>
        </li>
        <li className='h-[37.3px]'>
          <Link
            href={'#experience'}
            className='text-base leading-[37.3px] uppercase font-medium hover:ml-1.5 hover:text-accent hover:text-[17px] transition-all ease-in-out duration-300'
          >
            {dict.experience}
          </Link>
        </li>
        <li className='h-[37.3px]'>
          <Link
            href={'#projects'}
            className='text-base leading-[37.3px] uppercase font-medium hover:ml-1.5 hover:text-accent hover:text-[17px] transition-all ease-in-out duration-300'
          >
            {dict.projects}
          </Link>
        </li>
      </ul>

      {/* Social media links */}
      <ul className='mt-[82px] flex'>
        {socialMediaLinks.map((socialMedia) => (
          <li className='mr-[26px]' key={socialMedia.url}>
            <Link href={socialMedia.url} target='_blank'>
              {linkToSvgMap[socialMedia.platformName]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
