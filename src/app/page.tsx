import MarkdownContent from './components/MarkdownComponent';
import { Grid } from '@trussworks/react-uswds';
import Image from 'next/image';
import { basePath } from './utils/constants';
import SimpleCarousel from './components/Carousel';

export default async function Home() {
  return (
    <>
      <section className="usa-graphic-list usa-section usa-section--light-blue">
        <div className="grid-container">
          {MarkdownContent('homepage/section_1.md')}
        </div>
      </section>
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
          <Grid row>
            <SimpleCarousel />
          </Grid>
        </div>
      </section>
    </>
  );
}
