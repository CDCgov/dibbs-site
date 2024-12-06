import { basePath } from '@/app/utils/constants';
import {
  PageContainer,
  ContentContainer,
  SectionContentContainer,
  Text,
  UnorderedList,
  ReadMore,
  HeadingContentContainer,
  HeadingImageContainer,
  HeadingImage,
} from '../_ui';

const DibbsPrototype = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <section id="heading">
          <HeadingContentContainer>
            <HeadingImageContainer>
              <HeadingImage
                src={`${basePath}/images/case-studies/image4.png`}
                alt=""
              />
            </HeadingImageContainer>
            <h1>
              Building a prototype for modernized public health infrastructure
              in Virginia
            </h1>
          </HeadingContentContainer>
        </section>
        <section id="challenge">
          <SectionContentContainer>
            <h2>The challenge</h2>
            <Text>
              <span>
                Data coming into public health departments is often messy,
                unstandardized, and incomplete. At the same time,
                epidemiologists lack the tools and methods to efficiently turn
                incoming data into meaningful intelligence that can drive timely
                public health action. During a public health crisis, this
                combination can slow down the entire data pipeline, from
                ingestion to processing to analysis. The Virginia Department of
                Health (VDH) experienced exactly this problem during the
                COVID-19 pandemic. Along with the high volume and spikes in
                COVID-19 data throughout the pandemic, VDH's public health data
                surveillance system relied on time- and resource-intensive
                manual processes. Data processing was slow, systems timed out,
                and there was no single source of truth for incoming data.
              </span>
              <span>
                VDH wanted to improve their processes for making incoming data
                from healthcare partners analysis-ready to more efficiently
                inform public health action. Specifically, they wanted to
                combine different data streams (ELR, eCR, and VXU) into a single
                database, where they could then quickly and easily perform
                analyses with minimal manual effort. Additionally, local
                jurisdictions within Virginia wanted to geocode the data to
                identify gaps in vaccination and then perform targeted outreach,
                such as holding vaccination drives within schools or apartment
                complexes.
              </span>
              <span>
                However, as it stood, VDH's existing system introduced
                inefficiencies and uncertainty into data processing, compromised
                their ability to share data analysis and findings to inform
                public health action, and ultimately reduced confidence in the
                integrity of the data itself.
              </span>
            </Text>
          </SectionContentContainer>
        </section>
        <section id="solution">
          <SectionContentContainer>
            <h2>The solution</h2>
            <Text>
              The DIBBs team partnered with VDH to experiment with new
              approaches for storing, processing, and linking different incoming
              data streams. In an effort to improve VDH's disease surveillance
              infrastructure, our team:
            </Text>
            <UnorderedList>
              <li>
                Engaged in discovery efforts to establish an understanding of
                the data workflow at VDH, from the receipt of public health data
                through processing to analysis
              </li>
              <li>
                Built a cloud-based prototype data processing pipeline for VDH
                that brought disparate data streams together into a single
                database using the Fast Healthcare Interoperability Resources
                (FHIR) standard to standardize data elements
              </li>
              <li>
                Developed a white paper as a central reference point for
                learnings from the pilot project to apply to other public health
                jurisdictions
              </li>
            </UnorderedList>
            <Text>
              Our team constructed this prototype pipeline using a set of
              open-source, modular tools known as Data Integration Building
              Blocks (DIBBs). When combined together, DIBBs can increase data
              processing speed for incoming data across a wide range of data
              formats (e.g., eCR, ELR, VXU). In the VDH test environment, the
              pipeline processed incoming data faster than the existing manual
              methods, created a source of truth, and removed the need for
              duplicative processes. Data that moved through this prototype
              pipeline was standardized, deduplicated, geocoded, and linked, and
              patient-level records were created to use for analysis.
              Additionally, the pipeline converted raw data into a tabular,
              human-readable format (e.g,. spreadsheet), enabling
              epidemiologists to quickly find data they needed. From this
              prototype, our team has continued to test and iterate on DIBBs
              products with a wide range of public health departments to solve
              their toughest data challenges.
            </Text>
          </SectionContentContainer>
        </section>
        <section id="results">
          <SectionContentContainer>
            <h2>The results</h2>
            <UnorderedList>
              <li>
                Built a prototype DIBBs pipeline that significantly improved
                data processing speed and broke down silos between different
                streams
              </li>
              <li>
                Reduced patient record duplication by 19% across data streams
              </li>
              <li>
                Using the prototype pipeline, VDH went from being able to handle
                5,800 incoming HL7 messages per hour, at peak, to 20,000
                messages per hour
              </li>
              <li>
                The DIBBs pipeline can generate a tabular, analysis-ready data
                mart for ~380,000 patient resources in under 15 minutes
              </li>
            </UnorderedList>
          </SectionContentContainer>
        </section>
        <section id="read-more">
          <SectionContentContainer>
            <ReadMore
              href="https://github.com/CDCgov/phdi/blob/main/publications/DMI_VAWhitePaper_V3.pdf"
              linkText="Findings From a Virginia Pilot - White Paper"
            />
          </SectionContentContainer>
        </section>
      </ContentContainer>
    </PageContainer>
  );
};

export default DibbsPrototype;
