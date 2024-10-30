import MarkdownContent from './components/MarkdownComponent';
import { Grid } from '@trussworks/react-uswds';
import Image from 'next/image';
import { basePath } from './utils/constants';
import Hero from './components/Hero';
import InvitationCta from './components/InvitationCta';

export default async function Home() {
  return (
    <>
      <Hero
        header="Improve the way your jurisdiction collects, processes, and views public
      health data"
        subheader="Turn your jurisdiction's data into meaningful intelligence that drives
      timely public health action using CDC's free, cloud-based products built
      from Data Integration Building Blocks, or DIBBs."
      />
      <section className="usa-section">
        <div className="grid-container">
          <Grid row>
            <Grid col={5} className="flex-vertical-center padding-x-1">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={480}
                height={320}
                alt="Placeholder"
              />
            </Grid>
            <Grid col={7}>{MarkdownContent('homepage/section_2.md')}</Grid>
          </Grid>
        </div>
      </section>
      <section className="usa-section">
        <div className="grid-container">
          <Grid row>
            <Grid col={5}>{MarkdownContent('homepage/section_3.md')}</Grid>
            <Grid col={7} className="flex-vertical-center padding-x-1">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={525}
                height={312}
                alt="Placeholder"
              />
            </Grid>
          </Grid>
        </div>
      </section>
      <section className="usa-section">
        <div className="grid-container">
          <Grid row>
            <Grid col={12} className="flex-center">
              {MarkdownContent('homepage/section_4.md')}
            </Grid>
          </Grid>
        </div>
      </section>
      <InvitationCta />
    </>
  );
}
