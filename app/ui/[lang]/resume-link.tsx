'use client';

import { GeneralInformation } from '@/app/lib/types';
import { HoverFocusProvider } from '@/app/lib/utils/HoverFocusProvider';
import ArrowRightIcon from '../icons/arrow-right';
import clsx from 'clsx';

export function ResumeLink({
  generalInformation,
  dict,
}: {
  generalInformation: GeneralInformation;
  dict: Record<string, string>;
}) {
  return (
    <HoverFocusProvider
      render={(state) => (
        <div className='flex items-center ml-6'>
          <a
            className={clsx(
              'text-sm font-medium leading-6 underline underline-offset-[3px] decoration-1 transition-all ease-in-out duration-300',
              {
                'text-accent no-underline': state,
              }
            )}
            href={generalInformation.resumeLink.url}
            target='_blank'
          >
            {dict.fullResume}
          </a>
          <ArrowRightIcon
            className={clsx(
              'ml-[7px] transition-all ease-in-out duration-300',
              {
                'w-[15px] h-[15px] text-accent -rotate-45': state,
              }
            )}
          />
        </div>
      )}
    />
  );
}
