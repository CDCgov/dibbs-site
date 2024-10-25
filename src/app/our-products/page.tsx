import { Button, Grid, GridContainer } from '@trussworks/react-uswds';
import Image from 'next/image';
import { basePath } from '../utils/constants';

export default function OurProducts() {
  return (
    <div>
      <section className="usa-graphic-list usa-section usa-section--light-blue">
        <GridContainer>
          <div>
            <h1>Our ecosystem of DIBBs products</h1>
            <p className="grid-container p-0">
              Find out how DIBBs products can help empower your jurisdiction
              with more usable data.
            </p>
          </div>
        </GridContainer>
      </section>
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
                  Graphic headings can be used a few different ways, depending
                  on what your landing page is for. Highlight your values,
                  specific program areas, or results.
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
                  Allows public health staff to query a wide network of
                  healthcare organizations for data relevant to a given
                  condition. It gives staff access to more complete and timely
                  data without the need for a direct connection to a healthcare
                  provider.
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
                  messages based on a user-defined parsing schema. It exports
                  that data into a simple JSON file that can be easily loaded
                  into a tabular format (like a spreadsheet).
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
        <GridContainer>
          <p>FOR DATA PROCESSING</p>
          <Grid row gap className="usa-graphic-list__row">
            <Grid
              tablet={{
                col: true,
              }}
              className="border border-dashed"
            >
              <Image
                src={`${basePath}/icons/orchestration.svg`}
                width="88"
                height="88"
                alt="Placeholder"
              />
              <p className="font-bold">Orchestration</p>
              <p>
                Enables coordinated execution of DIBBs in any order, allowing
                for fully automated workflows
              </p>
            </Grid>
            <Grid
              tablet={{
                col: true,
              }}
              className="border border-dashed"
            >
              <Image
                src={`${basePath}/icons/fhirConverter.svg`}
                width="88"
                height="88"
                alt="Placeholder"
              />
              <p className="font-bold">FHIR Converter</p>
              <p>
                Enables coordinated execution of DIBBs in any order, allowing
                for fully automated workflows
              </p>
            </Grid>
            <Grid
              tablet={{
                col: true,
              }}
              className="border border-dashed"
            >
              <Image
                src={`${basePath}/icons/validation.svg`}
                width="88"
                height="88"
                alt="Placeholder"
              />
              <p className="font-bold">Validation</p>
              <p>
                Enables coordinated execution of DIBBs in any order, allowing
                for fully automated workflows
              </p>
            </Grid>
          </Grid>
        </GridContainer>
        <GridContainer>
          <p>FOR DATA ENRICHMENT</p>
          <Grid row gap className="usa-graphic-list__row">
            <Grid
              tablet={{
                col: true,
              }}
              className="border border-dashed"
            >
              <Image
                src={`${basePath}/icons/code.svg`}
                width="88"
                height="88"
                alt="Placeholder"
              />
              <p className="font-bold">Standardization</p>
              <p>
                Enables coordinated execution of DIBBs in any order, allowing
                for fully automated workflows
              </p>
            </Grid>
            <Grid
              tablet={{
                col: true,
              }}
              className="border border-dashed"
            >
              <Image
                src={`${basePath}/icons/messageParser.svg`}
                width="88"
                height="88"
                alt="Placeholder"
              />
              <p className="font-bold">Geocoding</p>
              <p>
                Enables coordinated execution of DIBBs in any order, allowing
                for fully automated workflows
              </p>
            </Grid>
            <Grid
              tablet={{
                col: true,
              }}
              className="border border-dashed"
            >
              <Image
                src={`${basePath}/icons/link.svg`}
                width="88"
                height="88"
                alt="Placeholder"
              />
              <p className="font-bold">Record Linkage</p>
              <p>
                Enables coordinated execution of DIBBs in any order, allowing
                for fully automated workflows
              </p>
            </Grid>
          </Grid>
        </GridContainer>
        <GridContainer>
          <p>FOR DATA TRANSFORMATION</p>
          <Grid row gap="lg" className="usa-graphic-list__row">
            <Grid
              tablet={{
                col: true,
              }}
              className="border border-dashed"
            >
              <Image
                src={`${basePath}/icons/code.svg`}
                width="88"
                height="88"
                alt="Placeholder"
              />
              <p className="font-bold">Flat Formatter</p>
              <p>
                Enables coordinated execution of DIBBs in any order, allowing
                for fully automated workflows
              </p>
            </Grid>
            <Grid
              tablet={{
                col: true,
              }}
              className="border border-dashed"
            >
              <Image
                src={`${basePath}/icons/messageParser.svg`}
                width="88"
                height="88"
                alt="Placeholder"
              />
              <p className="font-bold">PHDC Converter</p>
              <p>
                Enables coordinated execution of DIBBs in any order, allowing
                for fully automated workflows
              </p>
            </Grid>
          </Grid>
        </GridContainer>
      </section>
    </div>
  );
}
