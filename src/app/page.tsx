import { Grid, GridContainer } from '@trussworks/react-uswds';
import Image from 'next/image';
import { basePath } from './utils/constants';
import Carousel from './components/Carousel/Carousel';
import Hero from './components/Hero/Hero';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import Link from 'next/link';

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
      </Grid>
    </ContentContainer>
  );
}

function SectionTwo() {
  return (
    <ContentContainer align>
      <Grid row gap>
        <div>
          <h2 className="font-['Source Sans Pro'] max-w-[23.25rem] text-[2rem] font-bold text-[#224a58]">
            Unlock the value of your jurisdiction's data
          </h2>
          <p className="font-['Source Sans Pro'] max-w-[28.13rem] text-base font-normal leading-relaxed text-[#224a58]">
            DIBBs products help jurisdictions make the most of their data. From
            improving the usability of electronic case reporting (eCR) data to
            streamlining data collection from healthcare providers without the
            need for a direct connection, our products save jurisdictions time
            and effort for case investigation and analysis.
          </p>
          <Link className="usa-button usa-button--active" href="/">
            Find out more about our products
          </Link>
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

function SectionThree() {
  return (
    <>
      <ContentContainer align classes="px-14 pt-20 pb-10 sm:pb-10">
        <Grid row gap>
          <Grid col={12}>
            <div className="flex flex-col items-center">
              <h2 className="text-center text-[2rem] font-bold text-[#224a58]">
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
            Interested in getting started with DIBBs?
          </div>
          <div className="self-stretch text-center text-base font-normal leading-relaxed text-[#224a58]">
            Contact our team to learn more about how our products can help
            improve your data workflows
          </div>
          <Link
            href="/engage-with-us"
            className="usa-btn inline-flex items-center justify-start gap-2.5 rounded border-2 border-[#224a58] bg-white px-5 py-3"
          >
            <span className="text-center text-base font-bold leading-none text-[#224a58]">
              Engage with us
            </span>
          </Link>
        </div>
      </GridContainer>
    </section>
  );
}
