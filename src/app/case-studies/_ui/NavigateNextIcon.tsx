'use client';
import { Icon } from '@trussworks/react-uswds';
import styles from './styles.module.scss';

// Next can't render the USWDS icons server side, which is why this gets its own file
export const ArrowForwardIcon = () => {
  return (
    <Icon.NavigateNext
      className={styles.svgGrayFill}
      size={3}
      role="img"
      aria-label="Navigate next arrow"
    />
  );
};
