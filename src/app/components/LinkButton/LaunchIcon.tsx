'use client';
import { Icon } from '@trussworks/react-uswds';

// Next can't render the USWDS icons server side, which is why this gets its own file
export const LaunchIcon = () => {
  return <Icon.Launch size={3} role="img" aria-label="Launch icon" />;
};
