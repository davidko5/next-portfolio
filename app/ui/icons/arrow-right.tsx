import { cn } from '@/app/lib/utils/cn';
import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

const ArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn('', className)}
      width='11'
      height='8'
      viewBox='0 0 11 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.6875 4.00001C0.6875 3.90884 0.723716 3.8214 0.788182 3.75694C0.852648 3.69247 0.940082 3.65626 1.03125 3.65626H9.13894L6.97538 1.49338C6.91083 1.42883 6.87457 1.34129 6.87457 1.25001C6.87457 1.15872 6.91083 1.07118 6.97538 1.00663C7.03992 0.942085 7.12747 0.905823 7.21875 0.905823C7.31003 0.905823 7.39758 0.942085 7.46212 1.00663L10.2121 3.75663C10.2441 3.78856 10.2695 3.8265 10.2869 3.86826C10.3042 3.91002 10.3131 3.95479 10.3131 4.00001C10.3131 4.04522 10.3042 4.08999 10.2869 4.13175C10.2695 4.17352 10.2441 4.21145 10.2121 4.24338L7.46212 6.99338C7.39758 7.05793 7.31003 7.09419 7.21875 7.09419C7.12747 7.09419 7.03992 7.05793 6.97538 6.99338C6.91083 6.92883 6.87457 6.84129 6.87457 6.75001C6.87457 6.65872 6.91083 6.57118 6.97538 6.50663L9.13894 4.34376H1.03125C0.940082 4.34376 0.852648 4.30754 0.788182 4.24307C0.723716 4.17861 0.6875 4.09118 0.6875 4.00001Z'
        fill='currentColor'
      />
    </svg>
  )
);

ArrowRightIcon.displayName = 'ArrowRightIcon';
export default ArrowRightIcon;
