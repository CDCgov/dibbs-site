'use client';
import { Icon } from '@trussworks/react-uswds';

// Next can't render the USWDS icons server side, which is why this gets its own file
export const NavigateNextIcon = () => {
  return (
    <Icon.NavigateNext
      className="fill-[#71767a]"
      size={3}
      role="img"
      aria-label="Navigate next arrow"
    />
  );
};
