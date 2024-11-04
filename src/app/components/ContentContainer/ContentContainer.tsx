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
        className={classNames('px-14 py-20', {
          'px-32': !align,
        })}
      >
        {children}
      </GridContainer>
    </section>
  );
}
