import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardGroup,
} from '@trussworks/react-uswds';
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
      <CardGroup>
        <Card
          gridLayout={{
            tablet: {
              col: 6,
            },
          }}
          containerProps={{ className: 'border-0 bg-background' }}
        >
          <CardBody className="p-0">
            <div className="flex flex-col gap-y-4">
              <div className="add-aspect-16x9">
                <Image
                  src={`${basePath}/images/placeholder.png`}
                  width="540"
                  height="280"
                  alt="Placeholder"
                />
              </div>
              <h3>eCR Viewer</h3>
              <p className="m-0 p-0">
                Makes it easier for public health staff to find relevant
                information in eCR documents. It combines both the eICR and RR
                records into a single view and highlights relevant lab or
                clinical information for conditions present in the eCR.
              </p>
            </div>
          </CardBody>
          <CardFooter className="mt-5 p-0">
            <Link href="#" className="usa-button bg-[#224a58]">
              Learn more about eCR Viewer
            </Link>
          </CardFooter>
        </Card>
        <Card
          gridLayout={{
            tablet: {
              col: 6,
            },
          }}
          containerProps={{ className: 'border-0 bg-background' }}
        >
          <CardBody className="p-0">
            <div className="flex flex-col gap-y-1">
              <div className="add-aspect-16x9">
                <Image
                  src={`${basePath}/images/placeholder.png`}
                  width="540"
                  height="280"
                  alt="Placeholder"
                />
              </div>
              <h3>Query Connector</h3>
              <p className="m-0 p-0">
                Allows public health staff to query a wide network of healthcare
                organizations for data relevant to a given condition. It gives
                staff access to more complete and timely data without the need
                for a direct connection to a healthcare provider.
              </p>
            </div>
          </CardBody>
          <CardFooter className="mt-5 p-0">
            <Button type="button" disabled>
              Learn more about Query Connector
            </Button>
          </CardFooter>
        </Card>
        <Card
          gridLayout={{
            tablet: {
              col: 6,
            },
          }}
          containerProps={{ className: 'border-0 bg-background' }}
        >
          <CardBody className="p-0">
            <div className="flex flex-col gap-y-4">
              <div className="add-aspect-16x9">
                <Image
                  src={`${basePath}/images/placeholder.png`}
                  width="540"
                  height="280"
                  alt="Placeholder"
                />
              </div>
              <h3>eCR Parser</h3>
              <p className="m-0 p-0">
                Enables public health staff to extract relevant data from eCR
                messages based on a user-defined parsing schema. It exports that
                data into a simple JSON file that can be easily loaded into a
                tabular format (like a spreadsheet).
              </p>
            </div>
          </CardBody>
          <CardFooter className="mt-5 p-0">
            <Button type="button" disabled>
              Learn more about eCR Parser
            </Button>
          </CardFooter>
        </Card>
        <Card
          gridLayout={{
            tablet: {
              col: 6,
            },
          }}
          containerProps={{ className: 'border-0 bg-background' }}
        >
          <CardBody className="p-0">
            <div className="flex flex-col gap-y-4">
              <div className="add-aspect-16x9">
                <Image
                  src={`${basePath}/images/placeholder.png`}
                  width="540"
                  height="280"
                  alt="Placeholder"
                />
              </div>
              <h3>eCR Refiner</h3>
              <p className="m-0 p-0">
                Reduces eCR files down to only the most useful, necessary
                information to alleviate performance and storage burden on
                disease surveillance systems and bring focus to pertinent data
                for a given condition.
              </p>
            </div>
          </CardBody>
          <CardFooter className="mt-5 p-0">
            <Button type="button" disabled>
              Learn more about eCR Refiner
            </Button>
          </CardFooter>
        </Card>
      </CardGroup>
    </ContentContainer>
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
          <p>
            These are the underlying services that power each of our products;
            they can be configured in a variety of ways to support the unique
            needs of your jurisdiction.
          </p>
        </div>
      </div>
      <p>FOR DATA PROCESSING</p>
      <CardGroup>
        <Card
          gridLayout={{
            tablet: {
              col: 4,
            },
          }}
          containerProps={{
            className: ' border-dashed border-[#224A58] bg-background',
          }}
        >
          <CardBody>
            <div className="flex flex-col gap-y-4">
              <Image
                src={`${basePath}/icons/our-products/orchestration.svg`}
                width={88}
                height={88}
                alt="Orchestration icon"
              />
              <h3 className="font-bold">Orchestration</h3>
              <p>
                Enables coordinated execution of DIBBs in any order, allowing
                for fully automated workflows
              </p>
            </div>
          </CardBody>
        </Card>
        <Card
          gridLayout={{
            tablet: {
              col: 4,
            },
          }}
          containerProps={{
            className: ' border-dashed border-[#224A58] bg-background',
          }}
        >
          <CardBody>
            <div className="flex flex-col gap-y-4">
              <Image
                src={`${basePath}/icons/our-products/fhirConverter.svg`}
                width={88}
                height={88}
                alt="FHIR Converter icon"
              />
              <h3 className="font-bold">FHIR Converter</h3>
              <p>
                Converts incoming messages into the FHIR (Fast Healthcare
                Interoperability Resources) standard; acts as a common language
                between data streams that allows for ease of processing data in
                all the different DIBBs
              </p>
            </div>
          </CardBody>
        </Card>
        <Card
          gridLayout={{
            tablet: {
              col: 4,
            },
          }}
          containerProps={{
            className: ' border-dashed border-[#224A58] bg-background',
          }}
        >
          <CardBody>
            <div className="flex flex-col gap-y-4">
              <Image
                src={`${basePath}/icons/our-products/validation.svg`}
                width={88}
                height={88}
                alt="Validation icon"
              />
              <h3 className="font-bold">Validation</h3>
              <p>
                Reads and validates all eCR fields of interest based on
                specified, custom preferences; ensures that its XML structure is
                valid, that the required fields are present and in the correct
                format, and that the data is trustworthy
              </p>
            </div>
          </CardBody>
        </Card>
      </CardGroup>

      <p>FOR DATA ENRICHMENT</p>
      <CardGroup>
        <Card
          gridLayout={{
            tablet: {
              col: 4,
            },
          }}
          containerProps={{
            className: ' border-dashed border-[#224A58] bg-background',
          }}
        >
          <CardBody>
            <div className="flex flex-col gap-y-4">
              <Image
                src={`${basePath}/icons/our-products/standardization.svg`}
                width={88}
                height={88}
                alt="Standardization icon"
              />
              <h3 className="font-bold">Standardization</h3>
              <p>
                Standardizes data fields (including record name, date of birth,
                phone number, and geolocation) based on preset defaults to
                ensure consistency; for example, standardizing phone formats
                (888-555-1234 vs. (888)555-1234)
              </p>
            </div>
          </CardBody>
        </Card>
        <Card
          gridLayout={{
            tablet: {
              col: 4,
            },
          }}
          containerProps={{
            className: ' border-dashed border-[#224A58] bg-background',
          }}
        >
          <CardBody>
            <div className="flex flex-col gap-y-4">
              <Image
                src={`${basePath}/icons/our-products/geocoding.svg`}
                width={88}
                height={88}
                alt="Geocoding icon"
              />
              <h3 className="font-bold">Geocoding</h3>
              <p>
                Enriches data by providing precise geographic locations based on
                patient street addresses from input data
              </p>
            </div>
          </CardBody>
        </Card>
        <Card
          gridLayout={{
            tablet: {
              col: 4,
            },
          }}
          containerProps={{
            className: ' border-dashed border-[#224A58] bg-background',
          }}
        >
          <CardBody>
            <div className="flex flex-col gap-y-4">
              <Image
                src={`${basePath}/icons/our-products/recordLinkage.svg`}
                width={88}
                height={88}
                alt="Record Linkage icon"
              />
              <h3 className="font-bold">Record Linkage</h3>
              <p>
                Identifies multiple records referring to the same individual and
                combines them into a single, more complete patient record
              </p>
            </div>
          </CardBody>
        </Card>
      </CardGroup>

      <p>FOR DATA TRANSFORMATION</p>
      <CardGroup>
        <Card
          gridLayout={{
            tablet: {
              col: 4,
            },
          }}
          containerProps={{
            className: ' border-dashed border-[#224A58] bg-background',
          }}
        >
          <CardBody>
            <div className="flex flex-col gap-y-4">
              <Image
                src={`${basePath}/icons/our-products/flatFormatter.svg`}
                width={88}
                height={88}
                alt="Flat Formatter icon"
              />
              <h3 className="font-bold">Flat Formatter</h3>
              <p>
                Extracts relevant data from a given healthcare message and
                exports the data into a JSON file based on a user-defined
                parsing schema
              </p>
            </div>
          </CardBody>
        </Card>
        <Card
          gridLayout={{
            tablet: {
              col: 4,
            },
          }}
          containerProps={{
            className: ' border-dashed border-[#224A58] bg-background',
          }}
        >
          <CardBody>
            <div className="flex flex-col gap-y-4">
              <Image
                src={`${basePath}/icons/our-products/phdcConverter.svg`}
                width={88}
                height={88}
                alt="PHDC Converter icon"
              />
              <h3 className="font-bold">PHDC Converter</h3>
              <p>
                Converts a FHIR bundle to the Public Health Document Container
                (PHDC) format for ingestion into the National Electronic Disease
                Surveillance System (NEDSS) Base System (NBS)
              </p>
            </div>
          </CardBody>
        </Card>
      </CardGroup>
    </ContentContainer>
  );
}
