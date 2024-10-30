import { GridContainer } from '@trussworks/react-uswds';
import styles from '../styles/Hero.module.scss';

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
            <p className="font-['Source Sans Pro'] max-w-[862px] text-[22px] font-light leading-[33px] text-[#224a58]">
              {subheader}
            </p>
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
