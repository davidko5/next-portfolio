import { getDictionary } from '@/app/[lang]/dictionaries';
import { Experience } from '@/app/lib/types';
import { Badge } from '@/components/ui/badge';

export async function ExperienceComponent({
  lang,
  experience,
}: {
  lang: string;
  experience: Experience;
}) {
  const dict = await getDictionary(lang);

  const fromDate = new Date(experience.from);
  const tillDate = new Date(experience.till);

  return (
    <div className='mb-[34px]'>
      <div className='flex justify-between'>
        <div>
          <p className='text-accent font-light'>{experience.companyName}</p>
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
}
