'use client';
import { Grid, GridContainer } from '@trussworks/react-uswds';
import Image from 'next/image';
import { basePath } from './utils/constants';
import Carousel from './components/Carousel/Carousel';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { LinkButton } from './components/LinkButton/LinkButton';
import { useHeroInit } from './hooks/useHeroInit';
import { homePageHero, homeContent } from './data/home';

export default function Home() {
  useHeroInit(homePageHero);
  return (
    <>
      <DibbsSection />
      <ValueSection />
      <JurisdictionSection />
      <InvitationCta />
    </>
  );
}

function DibbsSection() {
  return (
    <ContentContainer align>
      <div className="grid grid-cols-1 justify-items-center gap-4 xl:grid-cols-[1fr_2fr] xl:justify-items-start xl:gap-14">
        <div className="order-1">
          <Image
            className="xl:max-h-[20rem] xl:max-w-[30rem]"
            src={`${basePath}/images/placeholder.png`}
            width={480}
            height={320}
            alt="Placeholder"
          />
        </div>
        <div className="order-2 flex flex-col gap-5">
          <h2 className="min-w-full text-center text-[1.5rem] font-bold text-[#224a58] xl:text-left xl:text-[2rem]">
            Introducing Data Integration Building Blocks
          </h2>
          <div className="flex flex-col gap-2">
            <p className="m-0 max-w-[39.7rem] p-0 text-base font-normal leading-relaxed text-[#224a58]">
              {homeContent.dibbs.description}
            </p>
            <ul className="text-base font-semibold leading-relaxed text-[#224a58]">
              {homeContent.dibbs.benefits.map((benefit, index) => (
                <li className="min-w-full" key={`benefit-${index}`}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

function ValueSection() {
  const { valueSection } = homeContent;

  return (
    <ContentContainer align>
      <div className="grid grid-cols-1 justify-items-center gap-4 xl:grid-cols-[2fr_3fr] xl:justify-items-start xl:gap-0">
        <div className="order-2 justify-items-center xl:order-1 xl:justify-items-start">
          <h2 className="text-center text-[1.5rem] font-bold text-[#224a58] xl:max-w-[23.25rem] xl:text-start xl:text-[2rem]">
            {valueSection.title}
          </h2>
          <p className="text-base font-normal leading-relaxed text-[#224a58] xl:max-w-[28.13rem]">
            {valueSection.description}
          </p>
          <LinkButton href={valueSection.ctaHref} variant="primary">
            {valueSection.ctaText}
          </LinkButton>
        </div>
        <div className="order-1 xl:order-2 xl:justify-self-start">
          <Image
            className="xl:max-h-[20rem] xl:max-w-[30rem]"
            src={`${basePath}/images/placeholder.png`}
            width={480}
            height={320}
            alt="Placeholder"
          />
        </div>
      </div>
    </ContentContainer>
  );
}

function JurisdictionSection() {
  const { jurisdictions } = homeContent;

  return (
    <>
      <ContentContainer align classes="px-14 pt-20 pb-10 sm:pb-10">
        <Grid row gap>
          <Grid col={12}>
            <div className="flex flex-col items-center">
              <h2 className="text-center text-[1.5rem] font-bold text-[#224a58] xl:text-[2rem]">
                {jurisdictions.title}
              </h2>
              <p className="text-center text-base font-normal leading-relaxed text-[#224a58]">
                {jurisdictions.description}
              </p>
            </div>
          </Grid>
        </Grid>
      </ContentContainer>
      <div className="ml-8 mr-8 pb-20 pt-0">
        <Carousel />
      </div>
    </>
  );
}

function InvitationCta() {
  return (
    <section className="usa-graphic-list usa-section usa-section--light-blue">
      <GridContainer>
        <div className="flex flex-col items-center justify-center gap-5 self-stretch">
          <div className="self-stretch text-center text-[1.5rem] font-bold text-[#224a58] xl:text-[2rem]">
            {homeContent.cta.title}
          </div>
          <div className="self-stretch text-center text-base font-normal leading-relaxed text-[#224a58]">
            {homeContent.cta.description}
          </div>
          <LinkButton href={homeContent.cta.ctaHref} variant="secondary">
            {homeContent.cta.ctaText}
          </LinkButton>
        </div>
      </GridContainer>
    </section>
  );
}
