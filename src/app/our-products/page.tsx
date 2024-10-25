import { Button, Grid, GridContainer } from '@trussworks/react-uswds';
import Image from 'next/image';
import { basePath } from '../utils/constants';

export default function OurProducts() {
  return (
    <div>
      <Intro />
      <StandaloneProducts />
      <DataPipeline />
    </div>
  );
}

function Intro() {
  return (
    <section className="usa-graphic-list usa-section usa-section--light-blue">
      <GridContainer>
        <div>
          <h1>Our ecosystem of DIBBs products</h1>
          <p className="grid-container p-0">
            Find out how DIBBs products can help empower your jurisdiction with
            more usable data.
          </p>
        </div>
      </GridContainer>
    </section>
  );
}

function StandaloneProducts() {
  return (
    <section className="usa-section">
      <GridContainer>
        <h2>Standalone Products</h2>
        <Grid row gap>
          <Grid
            tablet={{
              col: true,
            }}
          >
            <Image
              src={`${basePath}/images/placeholder.png`}
              width="540"
              height="280"
              alt="Placeholder"
            />
            <div className="mt-2 flex flex-col items-start">
              <h3 className="usa-graphic-list__heading">eCR Viewer</h3>
              <p>
                Graphic headings can be used a few different ways, depending on
                what your landing page is for. Highlight your values, specific
                program areas, or results.
              </p>
              <Button type="button">Learn more about eCR Viewer</Button>
            </div>
          </Grid>
          <Grid
            tablet={{
              col: true,
            }}
          >
            <Image
              src={`${basePath}/images/placeholder.png`}
              width="540"
              height="280"
              alt="Placeholder"
            />
            <div className="mt-2 flex flex-col items-start">
              <h3 className="usa-graphic-list__heading">Query Connector</h3>
              <p>
                Allows public health staff to query a wide network of healthcare
                organizations for data relevant to a given condition. It gives
                staff access to more complete and timely data without the need
                for a direct connection to a healthcare provider.
              </p>
              <Button type="button">Learn more about Query Connector</Button>
            </div>
          </Grid>
        </Grid>
        <Grid row gap="lg" className="usa-graphic-list__row">
          <Grid
            tablet={{
              col: true,
            }}
          >
            <Image
              src={`${basePath}/images/placeholder.png`}
              width="540"
              height="280"
              alt="Placeholder"
            />
            <div className="mt-2 flex flex-col items-start">
              <h3 className="usa-graphic-list__heading">eCR Parser</h3>
              <p>
                Enables public health staff to extract relevant data from eCR
                messages based on a user-defined parsing schema. It exports that
                data into a simple JSON file that can be easily loaded into a
                tabular format (like a spreadsheet).
              </p>
              <Button type="button">Learn more about eCR Parser</Button>
            </div>
          </Grid>
          <Grid
            tablet={{
              col: true,
            }}
          >
            <Image
              src={`${basePath}/images/placeholder.png`}
              width="540"
              height="280"
              alt="Placeholder"
            />
            <div className="mt-2 flex flex-col items-start">
              <h3 className="usa-graphic-list__heading">eCR Refiner</h3>
              <p>
                Reduces eCR files down to only the most useful, necessary
                information to alleviate performance and storage burden on
                disease surveillance systems and bring focus to pertinent data
                for a given condition.
              </p>
              <Button type="button">Learn more about eCR Refiner</Button>
            </div>
          </Grid>
        </Grid>
      </GridContainer>
    </section>
  );
}

function DataPipeline() {
  return (
    <section className="usa-section">
      <GridContainer>
        <div className="flex flex-col gap-y-2">
          <Image
            src={`${basePath}/images/placeholder.png`}
            width="1120"
            height="160"
            style={{ maxHeight: '160px' }}
            alt="Placeholder"
          />
          <h2>DIBBs to support the entire data pipeline</h2>
          <p>
            These are the underlying services that power each of our products;
            they can be configured in a variety of ways to support the unique
            needs of your jurisdiction.
          </p>
        </div>
      </GridContainer>
      <DataPipelineGrid name="FOR DATA PROCESSING">
        <DataPipelineGridItem>
          <Image
            src={`${basePath}/icons/orchestration.svg`}
            width="88"
            height="88"
            alt="Placeholder"
            style={{ minWidth: 88, minHeight: 88 }}
          />
          <p className="font-bold">Orchestration</p>
          <p>
            Enables coordinated execution of DIBBs in any order, allowing for
            fully automated workflows
          </p>
        </DataPipelineGridItem>
        <DataPipelineGridItem>
          <Image
            src={`${basePath}/icons/fhirConverter.svg`}
            width="88"
            height="88"
            alt="Placeholder"
            style={{ minWidth: 88, minHeight: 88 }}
          />
          <p className="font-bold">FHIR Converter</p>
          <p>
            Converts incoming messages into the FHIR (Fast Healthcare
            Interoperability Resources) standard; acts as a common language
            between data streams that allows for ease of processing data in all
            the different DIBBs
          </p>
        </DataPipelineGridItem>
        <DataPipelineGridItem>
          <Image
            src={`${basePath}/icons/validation.svg`}
            width="88"
            height="88"
            alt="Placeholder"
            style={{ minWidth: 88, minHeight: 88 }}
          />
          <p className="font-bold">Validation</p>
          <p>
            Reads and validates all eCR fields of interest based on specified,
            custom preferences; ensures that its XML structure is valid, that
            the required fields are present and in the correct format, and that
            the data is trustworthy
          </p>
        </DataPipelineGridItem>
      </DataPipelineGrid>
      <DataPipelineGrid name="FOR DATA ENRICHMENT">
        <DataPipelineGridItem>
          <Image
            src={`${basePath}/icons/code.svg`}
            width="88"
            height="88"
            alt="Placeholder"
            style={{ minWidth: 88, minHeight: 88 }}
          />
          <p className="font-bold">Standardization</p>
          <p>
            Standardizes data fields (including record name, date of birth,
            phone number, and geolocation) based on preset defaults to ensure
            consistency; for example, standardizing phone formats (888-555-1234
            vs. (888)555-1234)
          </p>
        </DataPipelineGridItem>
        <DataPipelineGridItem>
          <Image
            src={`${basePath}/icons/messageParser.svg`}
            width="88"
            height="88"
            alt="Placeholder"
            style={{ minWidth: 88, minHeight: 88 }}
          />
          <p className="font-bold">Geocoding</p>
          <p>
            Enriches data by providing precise geographic locations based on
            patient street addresses from input data
          </p>
        </DataPipelineGridItem>
        <DataPipelineGridItem>
          <Image
            src={`${basePath}/icons/link.svg`}
            width="88"
            height="88"
            alt="Placeholder"
            style={{ minWidth: 88, minHeight: 88 }}
          />
          <p className="font-bold">Record Linkage</p>
          <p>
            Identifies multiple records referring to the same individual and
            combines them into a single, more complete patient record
          </p>
        </DataPipelineGridItem>
      </DataPipelineGrid>
      <DataPipelineGrid name="FOR DATA TRANSFORMATION">
        <DataPipelineGridItem>
          <Image
            src={`${basePath}/icons/code.svg`}
            width="88"
            height="88"
            alt="Placeholder"
            style={{ minWidth: 88, minHeight: 88 }}
          />
          <p className="font-bold">Flat Formatter</p>
          <p>
            Extracts relevant data from a given healthcare message and exports
            the data into a JSON file based on a user-defined parsing schema
          </p>
        </DataPipelineGridItem>
        <DataPipelineGridItem>
          <Image
            src={`${basePath}/icons/messageParser.svg`}
            width="88"
            height="88"
            alt="Placeholder"
            style={{ minWidth: 88, minHeight: 88 }}
          />
          <p className="font-bold">PHDC Converter</p>
          <p>
            Converts a FHIR bundle to the Public Health Document Container
            (PHDC) format for ingestion into the National Electronic Disease
            Surveillance System (NEDSS) Base System (NBS)
          </p>
        </DataPipelineGridItem>
        <DataPipelineGridItem>
          <p>Empty spot</p>
        </DataPipelineGridItem>
      </DataPipelineGrid>
    </section>
  );
}

interface DataPipelineGridProps {
  name: string;
  children: React.ReactNode;
}

function DataPipelineGrid({ name, children }: DataPipelineGridProps) {
  return (
    <GridContainer>
      <p>{name}</p>
      <Grid row gap className="usa-graphic-list__row">
        {children}
      </Grid>
    </GridContainer>
  );
}

interface DataPipelineGridItemProps {
  children: React.ReactNode;
}
function DataPipelineGridItem({ children }: DataPipelineGridItemProps) {
  return (
    <Grid
      tablet={{
        col: true,
      }}
    >
      <Grid className="mx-2 mt-2 h-full border border-dashed p-8">
        {children}
      </Grid>
    </Grid>
  );
}
