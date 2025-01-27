import Image from 'next/image';
import { LinkButton } from '../components/LinkButton/LinkButton';
import { RoundedBackground } from '../components/RoundedBackground/RoundedBackground';
import { RoundedImage } from '../components/RoundedImage/RoundedImage';
import { Tag } from '@trussworks/react-uswds';
import classNames from 'classnames';
import { Metadata } from 'next';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import ecrViewerImg from '/public/images/products/ecr-viewer.png';
import queryConnectorImg from '/public/images/products/query-connector.png';
import orchestrationIcon from '/public/icons/products/orchestration.svg';
import fhirConverterIcon from '/public/icons/products/fhirConverter.svg';
import validationIcon from '/public/icons/products/validation.svg';
import standardizationIcon from '/public/icons/products/standardization.svg';
import geocodingIcon from '/public/icons/products/geocoding.svg';
import recordLinkageIcon from '/public/icons/products/recordLinkage.svg';
import flatFormatterIcon from '/public/icons/products/flatFormatter.svg';
import phdcConverterIcon from '/public/icons/products/phdcConverter.svg';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    'Find out how DIBBs products can help empower your jurisdiction with more usable data.',
};

export default function OurProducts() {
  return (
    <div>
      <StandaloneProducts />
      <DataPipeline />
    </div>
  );
}

const StandaloneProducts = () => {
  return (
    <section>
      <div className="border-b border-[#adcfdc]">
        <ContentContainer className="gap-5 px-5 py-4 sm:py-[3.75rem] md:px-[10rem]">
          <h2>DIBBs-powered products</h2>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <ProductCard
              title="eCR Viewer"
              text="Makes it easier for public health staff to find relevant
                information in eCR documents. It combines both the eICR and RR
                records into a single view and highlights relevant lab or
                clinical information for conditions present in the eCR."
              status="piloting"
              imgSrc={ecrViewerImg}
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
              imgSrc={queryConnectorImg}
              linkText="Learn more about Query Connector"
              linkToHref="/products/query-connector"
              linkVariant="primary"
            />
            <ProductCard
              title="eCR Parser"
              text="Enables public health staff to extract relevant data from eCR
              messages based on a user-defined parsing schema. It exports that
              data into a simple JSON file that can be easily loaded into a
              tabular format (like a spreadsheet)."
              status="development"
              linkText="Connect with us to learn more"
              linkToHref="/engage-with-us"
              linkVariant="secondary"
            />
            <ProductCard
              title="eCR Refiner"
              text="Reduces eCR files down to only the most useful, necessary
              information to alleviate performance and storage burden on disease
              surveillance systems and bring focus to pertinent data for a given
              condition."
              status="development"
              linkText="Connect with us to learn more"
              linkToHref="/engage-with-us"
              linkVariant="secondary"
            />
          </div>
        </ContentContainer>
      </div>
    </section>
  );
};

interface ProductCardProps {
  title: string;
  text: string;
  status: StatusTagProps['variant'];
  linkText: string;
  linkToHref: string;
  linkVariant: 'primary' | 'secondary' | 'transparent';
  imgSrc?: string | StaticImport;
}
const ProductCard = ({
  title,
  text,
  status,
  imgSrc,
  linkText,
  linkToHref,
  linkVariant,
}: ProductCardProps) => {
  return (
    <RoundedBackground className="border-none !bg-white shadow-lg">
      <div className="grid h-full grid-cols-1 items-start lg:max-w-[33.75rem]">
        {imgSrc ? (
          <div className="bg-background">
            <RoundedImage
              className="h-full w-full rounded-br-none shadow-none"
              src={imgSrc}
              width="540"
              height="200"
              alt=""
            />
          </div>
        ) : null}
        <div className="p-6">
          <div className="flex min-h-[11.12rem] flex-col">
            <div className="content mb-4 flex flex-col gap-3">
              <div className="flex flex-col items-center gap-2 xl:flex-row">
                <h3>{title}</h3>
                <StatusTag variant={status} />
              </div>
              <p className="m-0 p-0">{text}</p>
            </div>
            <div className="self-center lg:self-start">
              <LinkButton variant={linkVariant} href={linkToHref}>
                {linkText}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </RoundedBackground>
  );
};

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
        <p className="m-0 p-0 uppercase leading-none text-blue-cool-80">
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
      <p className="m-0 p-0 uppercase leading-none text-blue-cool-80">
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

const DataPipelineCard = ({ title, text, imgSrc }: DataPipelineCardProps) => {
  return (
    <div className="px-2 py-5">
      <Image
        className="ml-[-3px] pb-4"
        src={imgSrc}
        width={60}
        height={60}
        alt=""
      />
      <div className="flex flex-col gap-y-2">
        <h3 className="text-[1rem]">{title}</h3>
        <p className="m-0 p-0">{text}</p>
      </div>
    </div>
  );
};

interface DataPipelineGridProps {
  children: React.ReactNode;
}
const DataPipelineGrid = ({ children }: DataPipelineGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">{children}</div>
  );
};

const DataPipeline = () => {
  return (
    <section className="bg-[#dae9ee]">
      <ContentContainer className="gap-[3.75rem] px-5 py-[5rem] md:px-[10rem]">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <h2>DIBBs to support the entire data pipeline</h2>
            <p className="max-w-[38.5rem] font-normal leading-snug text-blue-cool-70">
              These are the underlying services that power each of our products;
              they can be configured in a variety of ways to support the unique
              needs of your jurisdiction:
            </p>
          </div>
        </div>
        <div>
          <DataSectionText>For data processing</DataSectionText>
          <DataPipelineGrid>
            <DataPipelineCard
              title="Orchestration"
              text="Enables coordinated execution of DIBBs in any order, allowing for
              fully automated workflows"
              imgSrc={orchestrationIcon}
            />
            <DataPipelineCard
              title="FHIR Converter"
              text="Converts incoming messages into the FHIR (Fast Healthcare
                Interoperability Resources) standard; acts as a common language
                between data streams that allows for ease of processing data in
                all the different DIBBs"
              imgSrc={fhirConverterIcon}
            />
            <DataPipelineCard
              title="Validation"
              text="Reads and validates all eCR fields of interest based on specified, custom preferences; ensures that its XML structure is valid, that the required fields are present and in the correct format, and that the data is trustworthy"
              imgSrc={validationIcon}
            />
          </DataPipelineGrid>
          <Break />
          <DataSectionText>For data enrichment</DataSectionText>
          <DataPipelineGrid>
            <DataPipelineCard
              title="Standardization"
              text="Standardizes data fields (including record name, date of birth, phone number, and geolocation) based on preset defaults to ensure consistency; for example, standardizing phone formats (888-555-1234 vs. (888)555-1234)"
              imgSrc={standardizationIcon}
            />
            <DataPipelineCard
              title="Geocoding"
              text="Enriches data by providing precise geographic locations based on patient street addresses from input data"
              imgSrc={geocodingIcon}
            />
            <DataPipelineCard
              title="Record Linkage"
              text="Identifies multiple records referring to the same individual and combines them into a single, more complete patient record"
              imgSrc={recordLinkageIcon}
            />
          </DataPipelineGrid>
          <Break />
          <DataSectionText>For data transformation</DataSectionText>
          <DataPipelineGrid>
            <DataPipelineCard
              title="Flat Formatter"
              text="Extracts relevant data from a given healthcare message and exports the data into a JSON file based on a user-defined parsing schema"
              imgSrc={flatFormatterIcon}
            />
            <DataPipelineCard
              title="PHDC Converter"
              text="Converts a FHIR bundle to the Public Health Document Container (PHDC) format for ingestion into the National Electronic Disease Surveillance System (NEDSS) Base System (NBS)"
              imgSrc={phdcConverterIcon}
            />
          </DataPipelineGrid>
        </div>
      </ContentContainer>
    </section>
  );
};

interface DataSectionText {
  children: React.ReactNode;
}
const DataSectionText = ({ children }: DataSectionText) => {
  return (
    <p className="text-[1.38rem] font-light uppercase leading-[1.93rem] text-blue-cool-80">
      {children}
    </p>
  );
};

const Break = () => {
  return (
    <div className="py-10">
      <hr className="h-[.0625rem] border-none bg-[#6499af]" />
    </div>
  );
};

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}
const ContentContainer = ({
  children,
  className = '',
}: ContentContainerProps) => {
  return (
    <div
      className={classNames(
        'ml-auto mr-auto flex max-w-[87.5rem] flex-col',
        className,
      )}
    >
      {children}
    </div>
  );
};
