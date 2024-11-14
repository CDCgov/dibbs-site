import { Grid, GridContainer } from '@trussworks/react-uswds';
import Image from 'next/image';
import { basePath } from './utils/constants';
import Carousel from './components/Carousel/Carousel';
import Hero from './components/Hero/Hero';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { LinkButton } from './components/LinkButton/LinkButton';

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

      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <InvitationCta />
    </>
  );
}

function SectionOne() {
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
              DIBBs are modular, open-source software that can be configured to
              clean, transform, and enrich data. We build cloud-enabled products
              that leverage DIBBs to provide the following benefits to public
              health jurisdictions:
            </p>
            <ul className="text-base font-semibold leading-relaxed text-[#224a58]">
              <li className="min-w-full">
                Better, higher quality data for use in data analysis
              </li>
              <li className="min-w-full">
                Time-savings for public health staff thanks to reduced manual
                work
              </li>
              <li className="min-w-full">
                More usable data that makes case investigation easier
              </li>
              <li className="min-w-full">
                Automated data processing that streamlines data workflows
              </li>
              <li className="min-w-full">
                Flexible cloud deployment options, including free central
                hosting through CDC
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

function SectionTwo() {
  return (
    <ContentContainer align>
      <div className="grid grid-cols-1 justify-items-center gap-4 xl:grid-cols-[2fr_3fr] xl:justify-items-start xl:gap-0">
        <div className="order-2 justify-items-center xl:order-1 xl:justify-items-start">
          <h2 className="text-center text-[1.5rem] font-bold text-[#224a58] xl:max-w-[23.25rem] xl:text-start xl:text-[2rem]">
            Unlock the value of your jurisdiction's data
          </h2>
          <p className="text-base font-normal leading-relaxed text-[#224a58] xl:max-w-[28.13rem]">
            DIBBs products help jurisdictions make the most of their data. From
            improving the usability of electronic case reporting (eCR) data to
            streamlining data collection from healthcare providers without the
            need for a direct connection, our products save jurisdictions time
            and effort for case investigation and analysis.
          </p>
          <LinkButton
            href="/our-products"
            variant="primary"
            className="justify-self-start"
          >
            Find out more about our products
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

function SectionThree() {
  return (
    <>
      <ContentContainer align classes="px-14 pt-20 pb-10 sm:pb-10">
        <Grid row gap>
          <Grid col={12}>
            <div className="flex flex-col items-center">
              <h2 className="text-center text-[1.5rem] font-bold text-[#224a58] xl:text-[2rem]">
                Jurisdictions working with DIBBs
              </h2>
              <p className="text-center text-base font-normal leading-relaxed text-[#224a58]">
                State and local public health jurisdictions across the United
                States used DIBBs to solve their toughest data challenges
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
            Interested in getting started with DIBBs?
          </div>
          <div className="self-stretch text-center text-base font-normal leading-relaxed text-[#224a58]">
            Contact our team to learn more about how our products can help
            improve your data workflows
          </div>
          <LinkButton href="/engage-with-us" variant="secondary">
            Engage with us
          </LinkButton>
        </div>
      </GridContainer>
    </section>
  );
}
