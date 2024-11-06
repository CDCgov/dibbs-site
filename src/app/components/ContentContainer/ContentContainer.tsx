import { GridContainer } from '@trussworks/react-uswds';
import classNames from 'classnames';

interface ContentContainerProps {
  children: React.ReactNode;
  align?: boolean;
  classes?: string;
}
export function ContentContainer({
  children,
  align = false,
  classes = 'px-14 py20',
}: ContentContainerProps) {
  return (
    <section>
      <GridContainer
        className={classNames(classes, {
          'px-32': !align,
        })}
      >
        {children}
      </GridContainer>
    </section>
  );
}
