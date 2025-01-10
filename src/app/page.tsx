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
import Image from 'next/image';
import classNames from 'classnames';

const DibbsSection = () => (
  <section>
    <PageContainer>
      <div className="flex flex-col items-center rounded-tl-[2.5rem] bg-white p-10 shadow-lg xl:flex-row xl:p-0">
        <Image
          src={`${basePath}/images/home/intro-tout.png`}
          alt=""
          width={480}
          height={411}
          className="shrink-0 rounded-tl-[2.5rem]"
        />
        <div className="flex h-full w-full flex-col gap-6 rounded-br-[2.5rem] bg-white p-10">
          <div className="flex flex-col gap-2">
            <Heading className="text-center xl:text-left">
              Introducing Data Integration Building Blocks
            </Heading>
            <Paragraph className="m-0 max-w-[35rem] p-0">
              {homeContent.dibbs.description}
            </Paragraph>
          </div>

          <ul className="flex list-none flex-col gap-4 pl-0 font-semibold text-blue-cool-70">
            {homeContent.dibbs.benefits.map((benefit, index) => (
              <li
                className="w-fit bg-[#ebe3f9] before:mr-[.5rem] before:pl-2 before:content-['◿'] after:pr-2 last:mr-[-20px] last:min-w-fit"
                key={`benefit-${index}`}
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageContainer>
  </section>
);

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ml-auto mr-auto flex justify-center pb-[5rem] pt-[3.75rem] lg:px-[7.5rem]">
      {children}
    </div>
  );
};

const ValueSection = () => {
  const { valueSection } = homeContent;

  return (
    <section>
      <div
        className={classNames(
          styles.valueSection,
          'after:left-[44%] 2xl:after:left-[46%]',
        )}
      >
        <ContentContainer>
          <ImageCard
            imageFirst={false}
            imageUrl={`${basePath}/images/home/value-tout.png`}
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
        <ContentContainer classes="sm:pb-10">
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
        <div className="pb-20 pt-0">
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
