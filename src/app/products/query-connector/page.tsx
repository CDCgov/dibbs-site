import {
  GithubNav,
  GridContainer,
  GridLeft,
  GridMiddle,
  GridRight,
  SectionContentContainer,
  SectionHeader,
  SubsectionContainer,
  TitleSection,
  Text,
  ValueList,
  SectionSubheader,
  GettingStarted,
  HaveAQuestionSection,
  ContentContainer,
  ProductImage,
} from '../_ui';
import { basePath } from '@/app/utils/constants';
import { LinkButton } from '@/app/components/LinkButton/LinkButton';
import { Metadata } from 'next';
import { NavItem, SideNav } from '../_ui/SideNav';

export const metadata: Metadata = {
  title: 'Query Connector',
  description:
    'A data collection tool that helps public health staff pull relevant data from a wide network of healthcare providers.',
};

export default function QueryConnector() {
  const navItems: NavItem[] = [
    { title: 'Overview', id: 'overview' },
    { title: 'Product features', id: 'product-features' },
    { title: 'Development status', id: 'development-status' },
    { title: 'Getting started', id: 'getting-started' },
  ];
  return (
    <div>
      <ContentContainer>
        <GridContainer>
          <GridLeft>
            <SideNav items={navItems} />
          </GridLeft>
          <GridMiddle>
            <TitleSection
              title="Query Connector"
              text="A data collection tool that helps public health staff
pull relevant data from a wide network of healthcare providers."
            />
            <section id="overview">
              <SubsectionContainer>
                <SectionHeader>Overview</SectionHeader>
                <SectionContentContainer>
                  <Text className="flex flex-col gap-6">
                    <span>
                      The Query Connector helps public health staff quickly
                      search for data across healthcare organizations. It does
                      this by leveraging FHIR endpoints that are available
                      through data use agreements, such as the Data Use and
                      Reciprocal Support Agreement (DURSA) and the Trusted
                      Exchange Framework and Common Agreement (TEFCA).
                    </span>
                    <span>
                      By enabling data exchange between public health
                      jurisdictions and healthcare providers without requiring
                      direct connection and onboarding, the Query Connector
                      gives public health staff immediate access to a wide range
                      of patient records and case information relevant to their
                      specific use case.
                    </span>
                    <span>
                      There are two ways jurisdictions can use the Query
                      Connector — as a web-based portal or as an application
                      programming interface (API).
                    </span>
                    <span>
                      The web-based portal allows users to generate custom
                      queries for targeted use cases, enabling case
                      investigators to conduct individual data searches by
                      inputting patient demographics.
                    </span>
                    <span>
                      The API offers an automated way to connect with a
                      jurisdiction's own data system and works from anywhere in
                      a jurisdiction's workflow (most commonly via Rhapsody).
                    </span>
                  </Text>
                  <SubsectionContainer>
                    <ValueList>
                      <li>
                        Reduces the manual burden on public health case
                        investigators by replacing the process of collecting
                        patient data by phone or fax
                      </li>
                      <li>
                        Provides access to more complete and timely health data
                      </li>
                      <li>
                        Enables public health staff to track disease outbreaks
                        and manage public health responses using real-time data
                      </li>
                      <li>
                        Lives outside your jurisdiction’s case surveillance
                        system both as an API and as a web-based portal, which
                        reduces storage burden on your overall system while
                        allowing seamless access for staff
                      </li>
                      <li>
                        Integrates easily into existing data workflows without
                        the need for procurement
                      </li>
                      <li>
                        Doesn't retain data, avoiding data security issues
                      </li>
                      <li>
                        Supports adoption of innovative public health standards
                        for data sharing like TEFCA
                      </li>
                      <li>Open source and free to use</li>
                    </ValueList>
                  </SubsectionContainer>
                  <div>
                    <SubsectionContainer>
                      <SectionSubheader>Demo</SectionSubheader>
                      <Text>
                        See how the Query Connector can improve the way your
                        jurisdiction searches for data:
                      </Text>
                      <div>
                        <LinkButton
                          isExternal
                          variant="primary"
                          href="https://demo.queryconnector.dev/query"
                        >
                          Launch demo
                        </LinkButton>
                      </div>
                    </SubsectionContainer>
                  </div>
                </SectionContentContainer>
              </SubsectionContainer>
            </section>
            <section id="product-features">
              <SectionContentContainer>
                <SubsectionContainer>
                  <SectionHeader>Product features</SectionHeader>
                  <Text>
                    Using the Query Connector, public health staff can gain
                    access to more comprehensive data through their existing
                    data use agreements. The Query Connector offers several
                    features that make it easier for your jurisdiction to return
                    targeted data.
                  </Text>
                </SubsectionContainer>
                <SubsectionContainer>
                  <SectionSubheader>Surface patient data</SectionSubheader>
                  <Text>
                    Public health staff can interact with the Query Connector
                    manually by entering simple patient details — such as name
                    and date of birth — along with a custom query, into the
                    web-based portal. The Query Connector surfaces patient data
                    relevant to the use case in an easily readable format,
                    making data more usable for case investigation.
                  </Text>
                  <ProductImage
                    alt="Query Connector - enter patient information form"
                    src={`${basePath}/images/products/query-connector/surface-patient-data.png`}
                  />
                </SubsectionContainer>
                <SubsectionContainer>
                  <SectionSubheader>Build custom queries</SectionSubheader>
                  <Text>
                    Administrators at your jurisdiction can generate custom
                    queries from pre-set condition templates that leverage
                    values published by the Value Set Authority Center (VSAC).
                    Case investigators will use these custom queries to search
                    for data specific to their use case. Administrators can also
                    manage user access through custom permissions.
                  </Text>
                  <ProductImage
                    alt="Query Connector - custom query example"
                    src={`${basePath}/images/products/query-connector/custom-query.png`}
                  />
                </SubsectionContainer>
                <SubsectionContainer>
                  <SectionSubheader>Automated data connection</SectionSubheader>
                  <Text className="flex flex-col gap-6">
                    <span>
                      The Query Connector's API can automate the querying
                      process by returning a FHIR bundle that your IT team could
                      integrate directly into your data surveillance system.
                    </span>
                    <span>
                      For instance, if your jurisdiction wants to query back to
                      a healthcare provider every time you receive a lab for an
                      STI, our API would allow you to automate that process,
                      eliminating the need for a staff member to manually make
                      each query.
                    </span>
                  </Text>
                </SubsectionContainer>
              </SectionContentContainer>
            </section>
            <section id="development-status">
              <SectionContentContainer>
                <SubsectionContainer>
                  <SectionHeader>Development status</SectionHeader>
                  <div className="flex flex-col gap-5">
                    <Text className="flex flex-col gap-6">
                      <span>
                        We're currently testing the Query Connector with a small
                        group of pilot jurisdictions and are continuing to tweak
                        it and add new features.
                      </span>
                      <span>
                        Once these pilots are complete, we're hoping to open up
                        the Query Connector to a broader user audience with
                        robust documentation about how to implement the product
                        in different technical setups.
                      </span>
                    </Text>
                    <div>
                      <LinkButton href="/engage-with-us" variant="primary">
                        Become a pilot partner
                      </LinkButton>
                    </div>
                  </div>
                </SubsectionContainer>
              </SectionContentContainer>
            </section>
            <section id="getting-started">
              <SectionContentContainer>
                <GettingStarted systemName="Query Connector" />
              </SectionContentContainer>
            </section>
            <HaveAQuestionSection />
          </GridMiddle>
          <GridRight>
            <GithubNav
              version="1.0"
              githubHref="https://github.com/CDCgov/dibbs-query-connector"
            />
          </GridRight>
        </GridContainer>
      </ContentContainer>
    </div>
  );
}
