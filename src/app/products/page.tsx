'use client';
import Image from 'next/image';
import { basePath } from '../utils/constants';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { LinkButton } from '../components/LinkButton/LinkButton';
import { useHeroInit } from '../hooks/useHeroInit';
import { RoundedBackground } from '../components/RoundedBackground/RoundedBackground';
import { RoundedImage } from '../components/RoundedImage/RoundedImage';
import { Tag } from '@trussworks/react-uswds';

export default function OurProducts() {
  return (
    <div>
      <StandaloneProducts />
      <DataPipeline />
    </div>
  );
}

function StandaloneProducts() {
  useHeroInit({
    header: `Our ecosystem of DIBBs products`,
    subheader: `Find out how DIBBs products can help empower your jurisdiction with more usable data.`,
    heroClass: 'our-products-hero',
  });

  return (
    <div className="border-b border-[#adcfdc]">
      <ContentContainer classes="sm:py-[3.75rem] md:px-[10rem]">
        <h2 className="font-['Public Sans'] text-[1.75rem] font-bold leading-[2.4rem] text-[#14333d] lg:ml-[-2rem]">
          DIBBs-powered products
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <ProductCard
            title="eCR Viewer"
            text="Makes it easier for public health staff to find relevant
                information in eCR documents. It combines both the eICR and RR
                records into a single view and highlights relevant lab or
                clinical information for conditions present in the eCR."
            status="piloting"
            imgSrc={`${basePath}/images/products/ecr-viewer.png`}
            linkText="Learn more about eCR Viewer"
            linkToHref="/products/ecr-viewer"
            linkVariant="primary"
          />
          <ProductCard
            title="Query Connector"
            text="Allows public health staff to query a wide network of healthcare
              organizations for data relevant to a given condition. It gives
              staff access to more complete and timely data without the need for
              a direct connection to a healthcare provider."
            status="development"
            imgSrc={`${basePath}/images/products/query-connector.png`}
            linkText="Learn more about Query Connector"
            linkToHref=""
            linkVariant="primary"
          />
          <ProductCard
            title="eCR Parser"
            text="Enables public health staff to extract relevant data from eCR
              messages based on a user-defined parsing schema. It exports that
              data into a simple JSON file that can be easily loaded into a
              tabular format (like a spreadsheet)."
            status="development"
            linkText="Learn more about eCR Parser"
            linkToHref=""
            linkVariant="secondary"
          />
          <ProductCard
            title="eCR Refiner"
            text="Reduces eCR files down to only the most useful, necessary
              information to alleviate performance and storage burden on disease
              surveillance systems and bring focus to pertinent data for a given
              condition."
            status="development"
            linkText="Learn more about eCR Refiner"
            linkToHref=""
            linkVariant="secondary"
          />
        </div>
      </ContentContainer>
    </div>
  );
}

interface ProductCardProps {
  title: string;
  text: string;
  status: StatusTagProps['variant'];
  linkText: string;
  linkToHref: string;
  linkVariant: 'primary' | 'secondary' | 'transparent';
  imgSrc?: string;
}
function ProductCard({
  title,
  text,
  status,
  imgSrc,
  linkText,
  linkToHref,
  linkVariant,
}: ProductCardProps) {
  return (
    <RoundedBackground className="border-none !bg-white">
      <div className="grid h-full grid-cols-1 items-start lg:max-w-[33.75rem]">
        {imgSrc ? (
          <div>
            <RoundedImage
              className="rounded-br-none"
              src={imgSrc}
              width="540"
              height="200"
              alt=""
            />
          </div>
        ) : null}
        <div className="p-6">
          <div className="flex min-h-[11.12rem] flex-col">
            <div className="content mb-5 mt-4 flex flex-col gap-3">
              <div className="flex flex-row gap-2">
                <h3 className="font-['Public Sans'] text-xl font-bold leading-7 text-[#14333d]">
                  {title}
                </h3>
                <StatusTag variant={status} />
              </div>
              <p className="m-0 p-0 text-base font-normal leading-relaxed text-[#224a58]">
                {text}
              </p>
            </div>
          </div>
          <LinkButton
            className="justify-self-start"
            variant={linkVariant}
            href={linkToHref}
          >
            {linkText}
          </LinkButton>
        </div>
      </div>
    </RoundedBackground>
  );
}

interface StatusTagProps {
  variant: 'piloting' | 'development';
}
const StatusTag = ({ variant }: StatusTagProps) => {
  if (variant === 'piloting') {
    return (
      <Tag
        className="inline-flex h-6 items-center justify-start gap-2.5 rounded-sm px-2 py-1"
        background="#c4eeeb"
      >
        <p className="font-['Source Sans Pro'] m-0 p-0 text-base font-normal uppercase leading-none text-[#14333d]">
          currently piloting
        </p>
      </Tag>
    );
  }

  return (
    <Tag
      className="inline-flex h-6 items-center justify-start gap-2.5 rounded-sm px-2 py-1"
      background="#f1e5cd"
    >
      <p className="font-['Source Sans Pro'] m-0 p-0 text-base font-normal uppercase leading-none text-[#14333d]">
        Under development
      </p>
    </Tag>
  );
};

interface DataPipelineCardProps {
  title: string;
  text: string;
  imgSrc: string;
}

function DataPipelineCard({ title, text, imgSrc }: DataPipelineCardProps) {
  return (
    <div className="px-2 py-6">
      <Image className="pb-4" src={imgSrc} width={60} height={60} alt="" />
      <div className="flex flex-col gap-y-2">
        <h3 className="font-['Public Sans'] text-base font-bold leading-snug text-[#14333d]">
          {title}
        </h3>
        <p className="font-['Public Sans'] m-0 p-0 text-base font-normal leading-snug text-[#224a58]">
          {text}
        </p>
      </div>
    </div>
  );
}

interface DataPipelineGridProps {
  children: React.ReactNode;
}
function DataPipelineGrid({ children }: DataPipelineGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">{children}</div>
  );
}

function DataPipeline() {
  return (
    <ContentContainer
      classes="bg-[#dae9ee] md:px-[10rem]"
      sectionClasses="bg-[#dae9ee]"
    >
      <div className="flex flex-col gap-y-6 pb-6">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-[#14333d]">
            DIBBs to support the entire data pipeline
          </h2>
          <p className="max-w-[38.5rem] text-base font-normal leading-snug text-[#224a58]">
            These are the underlying services that power each of our products;
            they can be configured in a variety of ways to support the unique
            needs of your jurisdiction.
          </p>
        </div>
      </div>
      <DataSectionText>For data processing</DataSectionText>
      <DataPipelineGrid>
        <DataPipelineCard
          title="Orchestration"
          text="Enables coordinated execution of DIBBs in any order, allowing for
              fully automated workflows"
          imgSrc={`${basePath}/icons/products/orchestration.svg`}
        />
        <DataPipelineCard
          title="FHIR Converter"
          text="Converts incoming messages into the FHIR (Fast Healthcare
                Interoperability Resources) standard; acts as a common language
                between data streams that allows for ease of processing data in
                all the different DIBBs"
          imgSrc={`${basePath}/icons/products/fhirConverter.svg`}
        />
        <DataPipelineCard
          title="Validation"
          text="Reads and validates all eCR fields of interest based on specified, custom preferences; ensures that its XML structure is valid, that the required fields are present and in the correct format, and that the data is trustworthy"
          imgSrc={`${basePath}/icons/products/validation.svg`}
        />
      </DataPipelineGrid>
      <Break />
      <DataSectionText>For data enrichment</DataSectionText>
      <DataPipelineGrid>
        <DataPipelineCard
          title="Standardization"
          text="Standardizes data fields (including record name, date of birth, phone number, and geolocation) based on preset defaults to ensure consistency; for example, standardizing phone formats (888-555-1234 vs. (888)555-1234)"
          imgSrc={`${basePath}/icons/products/standardization.svg`}
        />
        <DataPipelineCard
          title="Geocoding"
          text="Enriches data by providing precise geographic locations based on patient street addresses from input data"
          imgSrc={`${basePath}/icons/products/geocoding.svg`}
        />
        <DataPipelineCard
          title="Record Linkage"
          text="Identifies multiple records referring to the same individual and combines them into a single, more complete patient record"
          imgSrc={`${basePath}/icons/products/recordLinkage.svg`}
        />
      </DataPipelineGrid>
      <Break />
      <DataSectionText>For data transformation</DataSectionText>
      <DataPipelineGrid>
        <DataPipelineCard
          title="Flat Formatter"
          text="Extracts relevant data from a given healthcare message and exports the data into a JSON file based on a user-defined parsing schema"
          imgSrc={`${basePath}/icons/products/flatFormatter.svg`}
        />
        <DataPipelineCard
          title="PHDC Converter"
          text="Converts a FHIR bundle to the Public Health Document Container (PHDC) format for ingestion into the National Electronic Disease Surveillance System (NEDSS) Base System (NBS)"
          imgSrc={`${basePath}/icons/products/phdcConverter.svg`}
        />
      </DataPipelineGrid>
    </ContentContainer>
  );
}

interface DataSectionText {
  children: React.ReactNode;
}
const DataSectionText = ({ children }: DataSectionText) => {
  return (
    <p className="font-['Public Sans'] text-[1.38rem] font-light uppercase leading-[1.93rem] text-[#14333d]">
      {children}
    </p>
  );
};

const Break = () => {
  return (
    <div className="py-10">
      <hr className="border border-[#6499af]" />
    </div>
  );
};
