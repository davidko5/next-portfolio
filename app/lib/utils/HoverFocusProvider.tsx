'use client';

import {
  DetailedHTMLProps,
  HTMLAttributes,
  useState,
  type ReactElement,
} from 'react';

type HoverFocusProviderProps = {
  readonly render: (state: 'hovered' | 'focused' | null) => ReactElement;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const HoverFocusProvider = (
  props: HoverFocusProviderProps
): ReactElement => {
  const { render, ...divProps } = props;
  const [state, setState] = useState<'hovered' | 'focused' | null>(null);

  // Not to lose focus/hover styling on mouseLeave if is focused
  const handleInteraction = (
    action: 'onFocus' | 'onBlur' | 'onMouseEnter' | 'onMouseLeave'
  ): void => {
    if (action === 'onFocus') setState('focused');
    else if (action === 'onMouseEnter' && state !== 'focused')
      setState('hovered');
    else if (action === 'onMouseLeave' && state !== 'focused') setState(null);
    else if (action === 'onBlur') setState(null);
  };

  return (
    <div
      {...divProps}
      onMouseEnter={() => {
        handleInteraction('onMouseEnter');
      }}
      onMouseLeave={() => {
        handleInteraction('onMouseLeave');
      }}
      onFocus={() => {
        handleInteraction('onFocus');
      }}
      onBlur={() => {
        handleInteraction('onBlur');
      }}
    >
      {render(state)}
    </div>
  );
};
