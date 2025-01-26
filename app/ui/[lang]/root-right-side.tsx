import { getDictionary } from '@/app/[lang]/dictionaries';
import { LanguageSelect } from './language-select';
import { Experience, GeneralInformation, Project } from '@/app/lib/types';
import EnvelopeIcon from '../icons/envelope';
import MapPointIcon from '../icons/map-point';
import { ProjectComponent } from './project';
import { ExperienceComponent } from './experience';
import { ResumeLink } from './resume-link';

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

  return (
    <div className='w-[517px]'>
      {/* Language Select Dropdown */}
      <div className='flex justify-end'>
        <LanguageSelect lang={lang} />
      </div>

      <div className='md:mr-[72px]'>
        {/* About Section */}
        <div className='ml-6'>
          <h2 id='aboutMe' className='mt-[59px] text-2xl font-semibold'>
            {dict.aboutSection}
          </h2>
          <p className='mt-[24px] text-accent text-lg font-light leading-[23.4px]'>
            {generalInformation.mainDetailsInfo}
          </p>
          <p className='mt-[12px] text-white text-base font-normal leading-[20.8px]'>
            {generalInformation.mainShortInfo}
          </p>
        </div>

        {/* Experiences Section */}
        <div className='ml-6'>
          <h2 id='experience' className='mt-[82px] text-2xl font-semibold'>
            {dict.experienceSection}
          </h2>
          <div className='border-l-[0.5px] border-l-white mt-6 pl-6'>
            {experiences.map((experience, index) => (
              <ExperienceComponent
                key={index}
                lang={lang}
                experience={experience}
              />
            ))}
          </div>

          {/* Link to full resume */}
          <ResumeLink dict={dict} generalInformation={generalInformation} />
        </div>

        {/* Projects Section */}
        <h2
          id='projects'
          className='mt-[82px] mb-[34px] ml-6 text-2xl font-semibold'
        >
          {dict.projectsSection}
        </h2>
        {projects.map((project, index) => (
          <ProjectComponent key={index} project={project} />
        ))}

        {/* Contact section */}
        <div className='ml-6 md:ml-0 mb-[102px]'>
          <h2 className='text-[32px] font-light mt-[82px] leading-[41.6px]'>
            {dict.letsWorkTogether}
          </h2>
          <div className='flex items-center mt-6 font-medium leading-[20.8px]'>
            <EnvelopeIcon className='text-accent mr-[9px]' />
            {generalInformation.email}
          </div>
          <div className='flex items-center mt-3 font-medium leading-[20.8px]'>
            <MapPointIcon className='text-accent ml-[2px] mr-[11px]' />
            {generalInformation.placeOfResidence}
          </div>
        </div>
      </div>
      <div className='h-1' />
    </div>
  );
}
