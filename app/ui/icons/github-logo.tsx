import { cn } from '@/app/lib/utils/cn';
import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

const GithubLogoIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn('', className)}
       width='100%'
      height='100%'
      viewBox='0 0 23 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 1.64737C0 0.737437 0.756125 0 1.68906 0H21.3109C22.2439 0 23 0.737437 23 1.64737V21.3526C23 22.2626 22.2439 23 21.3109 23H1.68906C0.756125 23 0 22.2626 0 21.3526V1.64737ZM7.10556 19.2539V8.86794H3.65412V19.2539H7.10556ZM5.38056 7.44913C6.58375 7.44913 7.33269 6.65275 7.33269 5.65513C7.31112 4.63594 6.58519 3.86113 5.40356 3.86113C4.22194 3.86113 3.45 4.63737 3.45 5.65513C3.45 6.65275 4.19894 7.44913 5.35756 7.44913H5.38056ZM12.4358 19.2539V13.4536C12.4358 13.1431 12.4588 12.8326 12.5508 12.6112C12.7995 11.9916 13.3673 11.3491 14.3218 11.3491C15.571 11.3491 16.0698 12.3007 16.0698 13.6979V19.2539H19.5212V13.2969C19.5212 10.1056 17.8193 8.62213 15.548 8.62213C13.7166 8.62213 12.8958 9.62838 12.4358 10.3371V10.373H12.4128L12.4358 10.3371V8.86794H8.98581C9.02894 9.84256 8.98581 19.2539 8.98581 19.2539H12.4358Z'
        fill='currentColor'
      />
    </svg>
  )
);

GithubLogoIcon.displayName = 'GithubLogoIcon';
export default GithubLogoIcon;
