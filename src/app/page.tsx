'use client';
import { Grid } from '@trussworks/react-uswds';
import { basePath } from './utils/constants';
import Carousel from './components/Carousel/Carousel';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { LinkButton } from './components/LinkButton/LinkButton';
import { useHeroInit } from './hooks/useHeroInit';
import { homePageHero, homeContent } from './data/home';
import { ImageCard } from './components/ImageCard/ImageCard';
import { Heading, Paragraph } from './_ui';
import styles from './_styles/Homepage.module.scss';
import { InvitationCta } from './components/InvitationCta/InvitationCta';
const DibbsSection = () => (
  <section>
    <ContentContainer align>
      <ImageCard
        imageUrl={`${basePath}/images/homepage-1.jpeg`}
        imageAlt=""
        imageFirst={true}
        imageStyle={{
          transform: 'scale(1.4) translate(-8%, 3%)',
        }}
      >
        <Heading className="min-w-full text-center xl:text-left">
          Introducing Data Integration Building Blocks
        </Heading>
        <div className="flex flex-col gap-2">
          <Paragraph className="m-0 max-w-[39.7rem] p-0">
            {homeContent.dibbs.description}
          </Paragraph>
          <ul className="font-semibold leading-relaxed text-[#224a58]">
            {homeContent.dibbs.benefits.map((benefit, index) => (
              <li className="min-w-full" key={`benefit-${index}`}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </ImageCard>
    </ContentContainer>
  </section>
);

const ValueSection = () => {
  const { valueSection } = homeContent;

  return (
    <section>
      <div className={styles.valueSection}>
        <ContentContainer align>
          <ImageCard
            imageFirst={false}
            imageUrl={`${basePath}/images/homepage-2.jpeg`}
            xlHideImage={true}
            imageAlt=""
            imageStyle={{
              transform: 'scale(1.4) translate(-8%, 3%)',
            }}
            cardBackground="none"
          >
            <div className="my-auto flex flex-col gap-2">
              <Heading className="text-center xl:max-w-[23.25rem] xl:text-start">
                {valueSection.title}
              </Heading>
              <Paragraph className="xl:max-w-[28.13rem]">
                {valueSection.description}
              </Paragraph>
            </div>
            <div>
              <LinkButton href={valueSection.ctaHref} variant="primary">
                {valueSection.ctaText}
              </LinkButton>
            </div>
          </ImageCard>
        </ContentContainer>
      </div>
    </section>
  );
};

const JurisdictionSection = () => {
  const { jurisdictions } = homeContent;

  return (
    <>
      <section>
        <ContentContainer align classes="sm:pb-10">
          <Grid row gap>
            <Grid col={12}>
              <div className="flex flex-col items-center gap-2">
                <Heading className="text-center">{jurisdictions.title}</Heading>
                <Paragraph className="text-center">
                  {jurisdictions.description}
                </Paragraph>
              </div>
            </Grid>
          </Grid>
        </ContentContainer>
      </section>
      <section>
        <div className="ml-8 mr-8 pb-20 pt-0">
          <Carousel />
        </div>
      </section>
    </>
  );
};

const Home = () => {
  useHeroInit(homePageHero);

  return (
    <>
      <DibbsSection />
      <ValueSection />
      <JurisdictionSection />
      <InvitationCta />
    </>
  );
};

export default Home;
