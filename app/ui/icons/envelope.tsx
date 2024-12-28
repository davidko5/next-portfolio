import { cn } from '@/app/lib/utils/cn';
import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

const EnvelopeIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn('', className)}
      width='16'
      height='13'
      viewBox='0 0 16 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.05 2.055C0.150818 1.61324 0.398655 1.21881 0.752922 0.936308C1.10719 0.653804 1.54688 0.49997 2 0.5H14C14.4531 0.49997 14.8928 0.653804 15.2471 0.936308C15.6013 1.21881 15.8492 1.61324 15.95 2.055L8 6.914L0.05 2.055ZM0 3.197V10.301L5.803 6.743L0 3.197ZM6.761 7.33L0.191 11.357C0.353327 11.6993 0.609527 11.9884 0.929782 12.1908C1.25004 12.3931 1.62117 12.5004 2 12.5H14C14.3788 12.5001 14.7498 12.3926 15.0698 12.1901C15.3899 11.9876 15.6459 11.6983 15.808 11.356L9.238 7.329L8 8.086L6.761 7.33ZM10.197 6.744L16 10.301V3.197L10.197 6.744Z'
        fill='currentColor'
      />
    </svg>
  )
);

EnvelopeIcon.displayName = 'EnvelopeIcon';
export default EnvelopeIcon;
