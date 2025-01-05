'use client';

import { Project } from '@/app/lib/types';
import { HoverFocusProvider } from '@/app/lib/utils/HoverFocusProvider';
import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';
import Image from 'next/image';
import ArrowRightIcon from '../icons/arrow-right';
import Link from 'next/link';

export function ProjectComponent({ project }: { project: Project }) {
  return (
    <HoverFocusProvider
      render={(state) => (
        <Link href={project.projectUrl} target='_blank'>
          <div
            className={clsx(
              'px-6 mb-3 pt-[10px] pb-[15px] rounded-[10px] transition-all ease-in-out duration-300',
              state
                ? 'opacity-100 bg-projectBg shadow-[0px_0px_3px_0px] shadow-projectShadow'
                : 'opacity-70'
            )}
          >
            <div className='flex justify-between border-b'>
              <div className='flex items-center'>
                <div
                  className={clsx(
                    'text-sm font-medium leading-6 transition-all ease-in-out duration-300',
                    {
                      'text-accent': state,
                    }
                  )}
                >
                  {project.name}
                </div>
                <ArrowRightIcon
                  className={clsx(
                    'ml-[7px] transition-all ease-in-out duration-300',
                    {
                      'w-[15px] h-[15px] text-accent -rotate-45': state,
                    }
                  )}
                />
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
        </Link>
      )}
    />
  );
}
