import { cn } from '@/app/lib/utils/cn';
import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

const MapPointIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn('', className)}
      width='12'
      height='17'
      viewBox='0 0 12 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M6 16.5C6 16.5 12 10.814 12 6.5C12 4.9087 11.3679 3.38258 10.2426 2.25736C9.11742 1.13214 7.5913 0.5 6 0.5C4.4087 0.5 2.88258 1.13214 1.75736 2.25736C0.632141 3.38258 2.37122e-08 4.9087 0 6.5C0 10.814 6 16.5 6 16.5ZM6 9.5C5.20435 9.5 4.44129 9.18393 3.87868 8.62132C3.31607 8.05871 3 7.29565 3 6.5C3 5.70435 3.31607 4.94129 3.87868 4.37868C4.44129 3.81607 5.20435 3.5 6 3.5C6.79565 3.5 7.55871 3.81607 8.12132 4.37868C8.68393 4.94129 9 5.70435 9 6.5C9 7.29565 8.68393 8.05871 8.12132 8.62132C7.55871 9.18393 6.79565 9.5 6 9.5Z'
        fill='currentColor'
      />
    </svg>
  )
);

MapPointIcon.displayName = 'MapPointIcon';
export default MapPointIcon;
