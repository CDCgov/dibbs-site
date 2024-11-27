import {
  ContentContainer,
  PageContainer,
  ReturnToCaseStudiesLink,
  SectionContentContainer,
  Text,
  UnorderedList,
} from '../_ui';

const EcrViewer = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <section id="heading">
          <ReturnToCaseStudiesLink />
          <h1>
            Surfacing actionable insights from electronic case reporting data
          </h1>
        </section>
        <section id="challenge">
          <SectionContentContainer>
            <h2>The challenge</h2>
            <Text>
              <span>
                Electronic case reporting (eCR) is intended to make disease
                reporting faster and easier by automating the process of
                exchanging case report information between electronic health
                records (EHRs) and public health departments. However, public
                health departments often face challenges making use of
                electronic case reporting (eCR) data in case ascertainment and
                case investigation.
              </span>
              <span>
                When an eCR file arrives at a public health department, it
                contains more than just information on the reportable condition
                — it also includes data from a patient's entire health record,
                such as demographics, diagnoses, comorbidities, occupation,
                immunizations, medications, and more. The volume of information
                contained within an eCR makes it difficult for public health
                staff to figure out why the eCR was sent to them and where it
                should go next. To add to this challenge, each eCR file contains
                pages and pages of data that don't appear in a consistent order
                or with consistent formatting.
              </span>
              <span>
                As a result, it can take significant time and effort for public
                health staff to review incoming eCRs. Many public health
                departments still choose to manually contact healthcare
                providers for clinical information, which remains a
                time-consuming and onerous process for both healthcare providers
                and public health departments. To fulfill the promise of eCR,
                public health staff need to be able to quickly find key
                information from incoming eCR data so they can take timely
                public health action.
              </span>
            </Text>
          </SectionContentContainer>
        </section>
        <section id="solution">
          <SectionContentContainer>
            <h2>The solution</h2>
            <div className="flex flex-col gap-6">
              <Text>
                To make eCR data more usable for public health staff, the DIBBs
                team has developed the eCR Viewer, an intuitive interface that
                surfaces a summary of condition-specific information in a more
                readable format at the top of the eCR file. Using the eCR
                Viewer, public health staff can easily find data relevant to the
                reportable condition. The eCR Viewer also orders and organizes
                data consistently regardless of which electronic medical record
                system generated the eCR. Because the eCR Viewer makes it easier
                for public health staff to find clinical information for case
                investigation, eCR becomes a more useful data source, thereby
                reducing the need to manually contact healthcare providers.
              </Text>
              <Text>
                To date, the DIBBs team has undertaken the following work
                related to the eCR Viewer:
              </Text>
              <UnorderedList>
                <li>
                  Conducted generative research with staff at public health
                  departments to understand how eCR fits into case ascertainment
                  and case investigation workflows
                </li>
                <li>
                  Developed concept designs of the eCR Viewer and gathered
                  feedback from users to develop a lightweight MVP
                </li>
                <li>
                  Built out the product vision and measurement plan to ensure
                  the eCR Viewer will meet the intended impact for time savings
                </li>
                <li>
                  Partnered with the General Dynamics Information Technology
                  (GDIT) team to integrate the eCR Viewer into the CDC's
                  National Electronic Disease Surveillance System (NEDSS) Base
                  System (NBS) with pilot jurisdictions
                </li>
                <li>
                  Identified pilot jurisdictions to test and validate the eCR
                  Viewer in their public health data workflows; NBS pilot
                  partners include the states of Maine and Tennessee
                </li>
                <li>
                  Established a pilot partnership with the city of Philadelphia
                  to evaluate using the eCR Viewer outside of a surveillance
                  system as a web-based tool hosted by CDC
                </li>
              </UnorderedList>
              <Text>
                We are currently commencing pilots with jurisdictions to test
                the eCR Viewer in a production data environment and further
                validate the tool's downstream public health impact. Our aim is
                to scale the eCR Viewer with a wide range of jurisdictions to
                turn eCR into the go-to data source for case ascertainment and
                investigation.
              </Text>
            </div>
          </SectionContentContainer>
        </section>
        <section id="results">
          <SectionContentContainer>
            <h2>The results</h2>
            <UnorderedList>
              <li>
                Completed design and development of an eCR Viewer MVP and
                validated its potential time savings with public health staff
              </li>
              <li>
                Based on user testing with an MVP, the eCR Viewer allows staff
                to process an eCR file for case ascertainment in five clicks
                rather than twenty-five clicks
              </li>
              <li>
                Based on user journey mapping in Maine, the eCR Viewer enables
                staff to process all eCR files in a queue (over 5,000) in just
                one week rather than 4.5 months
              </li>
            </UnorderedList>
          </SectionContentContainer>
        </section>
      </ContentContainer>
    </PageContainer>
  );
};

export default EcrViewer;
