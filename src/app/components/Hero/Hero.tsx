import { GridContainer } from '@trussworks/react-uswds';
import styles from './Hero.module.scss';

interface HeroProps {
  header: string;
  subheader: string;
}

export default function Hero({ header, subheader }: HeroProps) {
  return (
    <section className="usa-graphic-list usa-section usa-section--light-blue">
      <GridContainer>
        <div className={styles.content}>
          <div className="flex flex-col items-start gap-3 self-start">
            <h1 className={styles.heading}>{header}</h1>
            <p className="m-0 max-w-[53.9rem] text-[1.38rem] font-light leading-[2rem] text-[#224a58]">
              {subheader}
            </p>
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
