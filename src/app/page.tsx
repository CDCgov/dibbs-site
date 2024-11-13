import { Grid, GridContainer } from '@trussworks/react-uswds';
import Image from 'next/image';
import { basePath } from './utils/constants';
import Carousel from './components/Carousel/Carousel';
import Hero from './components/Hero/Hero';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { LinkButton } from './components/LinkButton/LinkButton';

const homeContent = {
  hero: {
    header:
      'Improve the way your jurisdiction collects, processes, and views public health data',
    subheader:
      "Turn your jurisdiction's data into meaningful intelligence that drives timely public health action using CDC's free, cloud-based products built from Data Integration Building Blocks, or DIBBs.",
  },
  dibbs: {
    title: 'Introducing Data Integration Building Blocks',
    description:
      'DIBBs are modular, open-source software that can be configured to clean, transform, and enrich data. We build cloud-enabled products that leverage DIBBs to provide the following benefits to public health jurisdictions:',
    benefits: [
      'Better, higher quality data for use in data analysis',
      'Time-savings for public health staff thanks to reduced manual work',
      'More usable data that makes case investigation easier',
      'Automated data processing that streamlines data workflows',
      'Flexible cloud deployment options, including free central hosting through CDC',
    ],
  },
  valueSection: {
    title: "Unlock the value of your jurisdiction's data",
    description:
      'DIBBs products help jurisdictions make the most of their data. From improving the usability of electronic case reporting (eCR) data to streamlining data collection from healthcare providers without the need for a direct connection, our products save jurisdictions time and effort for case investigation and analysis.',
    ctaText: 'Find out more about our products',
    ctaHref: '/our-products',
  },
  jurisdictions: {
    title: 'Jurisdictions working with DIBBs',
    description:
      'State and local public health jurisdictions across the United States used DIBBs to solve their toughest data challenges',
  },
  cta: {
    title: 'Interested in getting started with DIBBs?',
    description:
      'Contact our team to learn more about how our products can help improve your data workflows',
    ctaText: 'Engage with us',
    ctaHref: '/engage-with-us',
  },
};

export default async function Home() {
  return (
    <>
      <Hero
        header={homeContent.hero.header}
        subheader={homeContent.hero.subheader}
      />

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
      <Grid row gap>
        <Image
          className="max-h-[20rem] max-w-[30rem]"
          src={`${basePath}/images/placeholder.png`}
          width={480}
          height={320}
          alt="Placeholder"
        />
        <div className="flex max-w-screen-lg flex-col gap-5">
          <h2 className="text-[2rem] font-bold text-[#224a58]">
            {homeContent.dibbs.title}
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
      </Grid>
    </ContentContainer>
  );
}

function ValueSection() {
  return (
    <ContentContainer align>
      <Grid row gap>
        <div>
          <h2 className="font-['Source Sans Pro'] max-w-[23.25rem] text-[2rem] font-bold text-[#224a58]">
            {homeContent.valueSection.title}
          </h2>
          <p className="font-['Source Sans Pro'] max-w-[28.13rem] text-base font-normal leading-relaxed text-[#224a58]">
            {homeContent.valueSection.description}
          </p>
          <LinkButton href={homeContent.valueSection.ctaHref} variant="primary">
            {homeContent.valueSection.ctaText}
          </LinkButton>
        </div>
        <Image
          className="max-h-[20rem] max-w-[30rem]"
          src={`${basePath}/images/placeholder.png`}
          width={480}
          height={320}
          alt="Placeholder"
        />
      </Grid>
    </ContentContainer>
  );
}

function JurisdictionSection() {
  return (
    <>
      <ContentContainer align classes="px-14 pt-20 pb-10 sm:pb-10">
        <Grid row gap>
          <Grid col={12}>
            <div className="flex flex-col items-center">
              <h2 className="text-center text-[2rem] font-bold text-[#224a58]">
                {homeContent.jurisdictions.title}
              </h2>
              <p className="text-center text-base font-normal leading-relaxed text-[#224a58]">
                {homeContent.jurisdictions.description}
              </p>
            </div>
          </Grid>
        </Grid>
      </ContentContainer>
      <div className="pb-20 pt-0">
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
          <div className="self-stretch text-center text-[2rem] font-bold text-[#224a58]">
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
