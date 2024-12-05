'use client';
import { Icon } from '@trussworks/react-uswds';

// Next can't render the USWDS icons server side, which is why this gets its own file
export const ArrowBackIcon = () => {
  return (
    <Icon.ArrowBack height={4} width={4} role="img" aria-label="Back arrow" />
  );
};
