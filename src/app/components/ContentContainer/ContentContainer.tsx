import { GridContainer } from '@trussworks/react-uswds';

interface ContentContainerProps {
  children: React.ReactNode;
}
export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <section>
      <GridContainer className="px-14 py-20">{children}</GridContainer>
    </section>
  );
}
