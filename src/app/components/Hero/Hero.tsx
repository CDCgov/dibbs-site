import { GridContainer } from '@trussworks/react-uswds';

interface HeroProps {
  header: string;
  subheader: string;
}

export default function Hero({ header, subheader }: HeroProps) {
  return (
    <section className="usa-graphic-list usa-section">
      <GridContainer>
        <div className="flex max-w-[75rem] items-center gap-[3.75rem] px-[3rem] py-0">
          <div className="flex flex-col items-start gap-3 self-start">
            <h1 className="m-0 max-w-[38rem]">{header}</h1>
            <p className="m-0 max-w-[58rem] text-[1.38rem] font-extralight leading-[2rem]">
              {subheader}
            </p>
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
