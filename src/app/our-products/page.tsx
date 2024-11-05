import Image from 'next/image';
import Link from 'next/link';
import { basePath } from '../utils/constants';
import Hero from '../components/Hero/Hero';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';

export default function OurProducts() {
  return (
    <div>
      <Hero
        header="Our ecosystem of DIBBs products"
        subheader="Find out how DIBBs products can help empower your jurisdiction with
            more usable data."
      />
      <StandaloneProducts />
      <DataPipeline />
    </div>
  );
}

function StandaloneProducts() {
  return (
    <ContentContainer>
      <h2>Standalone Products</h2>
      <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2">
        <ProductCard
          title="eCR Viewer"
          text="Makes it easier for public health staff to find relevant
                information in eCR documents. It combines both the eICR and RR
                records into a single view and highlights relevant lab or
                clinical information for conditions present in the eCR."
          imgSrc={`${basePath}/images/placeholder.png`}
          linkText="Learn more about eCR Viewer"
          linkToHref="#"
        />
        <ProductCard
          title="Query Connector"
          text="Allows public health staff to query a wide network of healthcare
              organizations for data relevant to a given condition. It gives
              staff access to more complete and timely data without the need for
              a direct connection to a healthcare provider."
          imgSrc={`${basePath}/images/placeholder.png`}
          linkText="Learn more about Query Connector"
          linkToHref=""
        />
        <ProductCard
          title="eCR Parser"
          text="Enables public health staff to extract relevant data from eCR
              messages based on a user-defined parsing schema. It exports that
              data into a simple JSON file that can be easily loaded into a
              tabular format (like a spreadsheet)."
          imgSrc={`${basePath}/images/placeholder.png`}
          linkText="Learn more about eCR Parser"
          linkToHref=""
        />
        <ProductCard
          title="eCR Refiner"
          text="Reduces eCR files down to only the most useful, necessary
              information to alleviate performance and storage burden on disease
              surveillance systems and bring focus to pertinent data for a given
              condition."
          imgSrc={`${basePath}/images/placeholder.png`}
          linkText="Learn more about eCR Refiner"
          linkToHref=""
        />
      </div>
    </ContentContainer>
  );
}

interface ProductCardProps {
  title: string;
  text: string;
  imgSrc: string;
  linkText: string;
  linkToHref: string;
}
function ProductCard({
  title,
  text,
  imgSrc,
  linkText,
  linkToHref,
}: ProductCardProps) {
  return (
    <div className="grid max-w-[33.75rem] grid-cols-1 items-start">
      <div className="add-aspect-16x9">
        <Image src={imgSrc} width="540" height="280" alt="Placeholder" />
      </div>
      <div className="flex flex-col items-start">
        <div className="content mb-5 mt-4 flex flex-col gap-3">
          <h3>{title}</h3>
          <p className="m-0 p-0 text-base font-normal leading-relaxed text-[#224a58]">
            {text}
          </p>
        </div>
      </div>
      <Link
        aria-disabled={linkToHref ? 'false' : 'true'}
        href={linkToHref}
        className="usa-button self-end justify-self-start bg-[#224a58]"
      >
        {linkText}
      </Link>
    </div>
  );
}

interface DataPipelineCardProps {
  title: string;
  text: string;
  imgSrc: string;
}

function DataPipelineCard({ title, text, imgSrc }: DataPipelineCardProps) {
  return (
    <div className="rounded border border-dashed border-[#224A58] bg-background p-8">
      <Image
        className="pb-4"
        src={imgSrc}
        width={88}
        height={88}
        alt={`${title} icon`}
      />
      <div className="flex flex-col gap-y-2">
        <h3 className="font-bold">{title}</h3>
        <p className="m-0 p-0">{text}</p>
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
    <ContentContainer>
      <div className="flex flex-col gap-y-6 pb-6">
        <Image
          className="max-h-[10rem]"
          src={`${basePath}/images/placeholder.png`}
          width="1120"
          height="160"
          alt="Placeholder"
        />
        <div className="flex flex-col gap-y-2">
          <h2>DIBBs to support the entire data pipeline</h2>
          <p className="max-w-[48rem] text-base font-normal leading-relaxed text-[#224a58]">
            These are the underlying services that power each of our products;
            they can be configured in a variety of ways to support the unique
            needs of your jurisdiction.
          </p>
        </div>
      </div>
      <p>FOR DATA PROCESSING</p>
      <DataPipelineGrid>
        <DataPipelineCard
          title="Orchestration"
          text="Enables coordinated execution of DIBBs in any order, allowing for
              fully automated workflows"
          imgSrc={`${basePath}/icons/our-products/orchestration.svg`}
        />
        <DataPipelineCard
          title="FHIR Converter"
          text="Converts incoming messages into the FHIR (Fast Healthcare
                Interoperability Resources) standard; acts as a common language
                between data streams that allows for ease of processing data in
                all the different DIBBs"
          imgSrc={`${basePath}/icons/our-products/fhirConverter.svg`}
        />
        <DataPipelineCard
          title="Validation"
          text="Reads and validates all eCR fields of interest based on specified, custom preferences; ensures that its XML structure is valid, that the required fields are present and in the correct format, and that the data is trustworthy"
          imgSrc={`${basePath}/icons/our-products/validation.svg`}
        />
      </DataPipelineGrid>
      <p>FOR DATA ENRICHMENT</p>
      <DataPipelineGrid>
        <DataPipelineCard
          title="Standardization"
          text="Standardizes data fields (including record name, date of birth, phone number, and geolocation) based on preset defaults to ensure consistency; for example, standardizing phone formats (888-555-1234 vs. (888)555-1234)"
          imgSrc={`${basePath}/icons/our-products/standardization.svg`}
        />
        <DataPipelineCard
          title="Geocoding"
          text="Enriches data by providing precise geographic locations based on patient street addresses from input data"
          imgSrc={`${basePath}/icons/our-products/geocoding.svg`}
        />
        <DataPipelineCard
          title="Record Linkage"
          text="Identifies multiple records referring to the same individual and combines them into a single, more complete patient record"
          imgSrc={`${basePath}/icons/our-products/recordLinkage.svg`}
        />
      </DataPipelineGrid>
      <p>FOR DATA TRANSFORMATION</p>
      <DataPipelineGrid>
        <DataPipelineCard
          title="Flat Formatter"
          text="Extracts relevant data from a given healthcare message and exports the data into a JSON file based on a user-defined parsing schema"
          imgSrc={`${basePath}/icons/our-products/flatFormatter.svg`}
        />
        <DataPipelineCard
          title="PHDC Converter"
          text="Converts a FHIR bundle to the Public Health Document Container (PHDC) format for ingestion into the National Electronic Disease Surveillance System (NEDSS) Base System (NBS)"
          imgSrc={`${basePath}/icons/our-products/phdcConverter.svg`}
        />
      </DataPipelineGrid>
    </ContentContainer>
  );
}
