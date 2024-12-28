import { getDictionary } from '@/app/[lang]/dictionaries';
import { LanguageSelect } from './language-select';
import {
  Experience,
  GeneralInformation,
  Project,
} from '@/app/lib/types';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import EnvelopeIcon from '../icons/envelope';
import MapPointIcon from '../icons/map-point';
import Link from 'next/link';

export async function RootRightSide({
  lang,
  generalInformation,
  experiences,
  projects,
}: {
  lang: string;
  generalInformation: GeneralInformation;
  experiences: Array<Experience>;
  projects: Array<Project>;
}) {
  const dict = await getDictionary(lang);

  console.log('generalInformation', generalInformation);

  return (
    <div className='w-[517px]'>
      {/* Language Select Dropdown */}
      <div className='flex justify-end'>
        <LanguageSelect lang={lang} />
      </div>

      <div className='mr-[72px]'>
        {/* About Section */}
        <h2 id='aboutMe' className='mt-[59px] text-2xl font-semibold'>
          {dict.aboutSection}
        </h2>
        <p className='mt-[24px] text-accent text-lg font-light'>
          {generalInformation.mainDetailsInfo}
        </p>
        <p className='mt-[12px] text-white text-base font-normal'>
          {generalInformation.mainShortInfo}
        </p>

        {/* Projects Section */}
        <h2 id='experience' className='mt-[82px] text-2xl font-semibold'>
          {dict.experienceSection}
        </h2>
        <div className='border-l-[0.5px] border-l-white mt-6 pl-6'>
          {experiences.map((experience, index) => {
            const fromDate = new Date(experience.from);
            const tillDate = new Date(experience.till);

            return (
              <div key={index} className='mb-[34px]'>
                <div className='flex justify-between'>
                  <div className=''>
                    <p className='text-accent font-light'>
                      {experience.companyName}
                    </p>
                    <p className='font-medium'>{experience.position}</p>
                  </div>
                  <span className='text-accent text-xs font-light'>
                    {fromDate.getMonth() + 1}/{fromDate.getFullYear()} -{' '}
                    {experience.isCurrent
                      ? dict.tillPresent
                      : `${tillDate.getMonth()} / ${tillDate.getFullYear()}`}
                  </span>
                </div>
                <div className='mt-4 pl-3'>
                  <p className='text-sm font-light leading-[18.2px]'>
                    {experience.description}
                  </p>
                  <div className='mt-3 flex flex-wrap gap-[10px]'>
                    {experience.skills.map((skill, index) => (
                      <Badge key={index} variant='custom'>
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to full resume */}
        <div>
          <Link href={generalInformation.resumeLink.url} target='_blank'>
            {dict.fullResume}
          </Link>
        </div>

        {/* Projects Section */}
        <h2
          id='projects'
          className='mt-[82px] mb-[34px] text-2xl font-semibold'
        >
          {dict.projectsSection}
        </h2>
        {projects.map((project, index) => (
          <div key={index} className='mb-3'>
            <div className='flex justify-between border-b'>
              <div className='text-sm font-medium leading-6'>
                {project.name}
              </div>
              <div className='text-xs text-lightBlue leading-6'>
                ({project.date?.slice(0, 4)})
              </div>
            </div>
            <div className='mt-3 flex'>
              <Image
                src={project.thumbnail.url}
                alt={project.thumbnail.alternativeText || 'project-thumbnail'}
                width='129'
                height='86'
                className='w-[129px] h-[86px]'
              />
              <div className='ml-5'>
                <p className='text-sm leading-[18.2px]'>
                  {project.description}
                </p>
                <div className='mt-3 flex flex-wrap gap-[10px]'>
                  {project.skills.map((skill, index) => (
                    <Badge key={index} variant='custom'>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Contact section */}
        <h2 className='text-[32px] font-light mt-[82px]'>
          {dict.letsWorkTogether}
        </h2>
        <div className='flex items-center mt-6 font-medium'>
          <EnvelopeIcon className='text-accent mr-[9px]' />
          {generalInformation.email}
        </div>
        <div className='flex items-center mt-3 mb-[102px] font-medium'>
          <MapPointIcon className='text-accent ml-[2px] mr-[11px]' />
          {generalInformation.placeOfResidence}
        </div>
      </div>
    </div>
  );
}
