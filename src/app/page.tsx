import { Grid } from '@trussworks/react-uswds';
import Image from 'next/image';
import { basePath } from './utils/constants';
import Hero from './components/Hero/Hero';
import InvitationCta from './components/InvitationCta/InvitationCta';
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
    <ContentContainer>
      <Grid row gap>
        <Image
          className="max-h-[320px] max-w-[480px]"
          src={`${basePath}/images/placeholder.png`}
          width={480}
          height={320}
          alt="Placeholder"
        />
        <div className="flex max-w-screen-md flex-col gap-5">
          <h2 className="font-['Source Sans Pro'] text-[32px] font-bold text-[#224a58]">
            Introducing Data Integration Building Blocks
          </h2>
          <div className="flex flex-col gap-2">
            <p className="font-['Source Sans Pro'] m-0 max-w-[635px] p-0 text-base font-normal leading-relaxed text-[#224a58]">
              DIBBs are modular, open-source software that can be configured to
              clean, transform, and enrich data. We build cloud-enabled products
              that leverage DIBBs to provide the following benefits to public
              health jurisdictions:
            </p>
            <ul className="font-['Source Sans Pro'] text-base font-semibold leading-relaxed text-[#224a58]">
              <li>Better, higher quality data for use in data analysis</li>
              <li>
                Time-savings for public health staff thanks to reduced manual
                work
              </li>
              <li>More usable data that makes case investigation easier</li>
              <li>Automated data processing that streamlines data workflows</li>
              <li>
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
    <ContentContainer>
      <Grid row gap>
        <div>
          <h2 className="font-['Source Sans Pro'] max-w-[372px] text-[32px] font-bold text-[#224a58]">
            Unlock the value of your jurisdiction's data
          </h2>
          <p className="font-['Source Sans Pro'] max-w-[450px] text-base font-normal leading-relaxed text-[#224a58]">
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
          className="max-h-[320px] max-w-[480px]"
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
    <ContentContainer>
      <div className="flex flex-col items-center">
        <h2 className="font-['Source Sans Pro'] text-center text-[32px] font-bold text-[#224a58]">
          Jurisdictions working with DIBBs
        </h2>
        <p className="font-['Source Sans Pro'] text-center text-base font-normal leading-relaxed text-[#224a58]">
          State and local public health jurisdictions across the United States
          used DIBBs to solve their toughest data challenges
        </p>
      </div>
    </ContentContainer>
  );
}
