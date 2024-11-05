import { GridContainer } from '@trussworks/react-uswds';
import classNames from 'classnames';

interface ContentContainerProps {
  children: React.ReactNode;
  align?: boolean;
}
export function ContentContainer({
  children,
  align = false,
}: ContentContainerProps) {
  return (
    <section>
      <GridContainer
        className={classNames('py-4 sm:px-14 sm:py-20', {
          'sm:px-32': !align,
        })}
      >
        {children}
      </GridContainer>
    </section>
  );
}
