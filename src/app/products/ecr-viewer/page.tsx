'use client';
import { ContentContainer } from '@/app/components/ContentContainer/ContentContainer';
import { basePath } from '@/app/utils/constants';
import {
  ProcessList,
  ProcessListItem,
  ProcessListHeading,
  Accordion,
  Link,
  SideNav,
} from '@trussworks/react-uswds';
import classNames from 'classnames';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import './styles.scss';
import { RoundedBackground } from '@/app/components/RoundedBackground/RoundedBackground';

export default function EcrViewer() {
  return (
    <div>
      <ContentContainer align>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_3fr_1fr] lg:gap-0">
          <div className="pt-[.625rem]">
            <div className="lg:sticky lg:top-4">
              <Navigation />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-[3.75rem] px-[3.75rem]">
            <TitleSection
              title="eCR Viewer"
              text="An intuitive interface that helps epidemiologists and case
                investigators make better sense of eCR data, faster."
            />
            <div id="overview">
              <div className="flex flex-col gap-3">
                <SectionHeader>Overview</SectionHeader>
                <div className="flex flex-col gap-10">
                  <p className="font-['Public Sans'] m-0 flex flex-col gap-10 p-0 text-base font-normal leading-snug text-[#224a58]">
                    <span>
                      The eCR Viewer is a tool that aims to improve the
                      usability of electronic case reporting (eCR) data by
                      displaying a summary of key data contained in an eCR
                      document so that public health staff can quickly find the
                      information they need.
                    </span>
                    <span>
                      In user research with public health staff, we've heard
                      that eCR data is often difficult to make sense of — it's
                      like getting someone's entire medical record dropped on
                      your desk. The eCR Viewer aims to make relevant
                      information easier to find by displaying eCR data in a way
                      that's more intuitive.
                    </span>
                    <span>
                      There are two versions of the eCR Viewer — one that's
                      integrated directly into a case surveillance system, and
                      another that's an independent tool.
                    </span>
                    <span>
                      The integrated version allows users to access the eCR
                      Viewer directly within their surveillance system,
                      replacing the existing way they view eCR documents. Direct
                      integration is currently supported by NBS (National
                      Electronic Disease Surveillance System Base System).
                    </span>
                    <span>
                      The non-integrated version offers a standalone tool for
                      non-NBS jurisdictions to manage and view eCR documents
                      separately from their surveillance system.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <RoundedBackground className="flex flex-col gap-3 p-10">
              <SectionSubheader>The value to you</SectionSubheader>
              <ul className="list__full-width flex flex-col gap-3 text-base font-semibold leading-relaxed text-[#224a58]">
                <li>
                  Surfaces the most relevant information in a summary at the top
                  of the eCR, so any staff member can quickly find the
                  information they need
                </li>
                <li>
                  Combines information from both the eICR and RR, so
                  epidemiologists reviewing the eCR can understand why it was
                  sent to their jurisdiction
                </li>
                <li>
                  Lives outside your case surveillance system as an API, which
                  reduces storage burden on your overall system while allowing
                  seamless access for epidemiologists who need it
                </li>
                <li>
                  Keeps data formats consistent regardless of which EHR system
                  generated the eCR
                </li>
                <li>Open source and free to use</li>
                <li>
                  Offers flexible hosting, either within your jurisdiction or
                  through a CDC-hosted option
                </li>
              </ul>
            </RoundedBackground>
            <div id="demo">
              <div className="flex flex-col gap-3">
                <SectionSubheader>Demo</SectionSubheader>
                <figure className="flex flex-col gap-3">
                  <Image
                    alt="placeholder video"
                    width={652}
                    height={383}
                    src={`${basePath}/images/placeholder.png`}
                  />
                  <figcaption className="font-['Public Sans'] text-base font-normal leading-snug text-[#224a58]">
                    See how the eCR Viewer can improve the way your jurisdiction
                    uses eCR data.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div id="product-features">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <SectionHeader>Product features</SectionHeader>
                  <p className="m-0 p-0">
                    Using the eCR Viewer, public health staff can easily find
                    data relevant to a reportable condition. The eCR Viewer
                    offers several features that make eCR data more usable for
                    your jurisdiction.
                  </p>
                </div>
                <div className="flex flex-col gap-8">
                  <SectionSubheader>eCR Summary</SectionSubheader>
                  <p className="m-0 p-0">
                    The eCR Viewer surfaces key information in a summary at the
                    top of the eCR document, helping you understand the eCR
                    document at a glance. This eCR Summary is divided into three
                    categories: Patient Summary, Encounter Summary, and
                    Condition Summary.
                  </p>
                </div>
                <Image
                  alt="eCR Viewer - how it works"
                  width={652}
                  height={383}
                  src={`${basePath}/images/products/ecr-viewer/how-it-works.gif`}
                />
                <div className="flex flex-col gap-6">
                  <SectionSubheader>Combined RR and eICR</SectionSubheader>
                  <p className="m-0 flex flex-col gap-8 p-0">
                    <span>
                      The eCR Viewer combines electronic initial case report
                      (eICR) and Reportability Response (RR) data together,
                      enabling you to see all of the reportable conditions for
                      the eCR, why the eCR was triggered, and which
                      jurisdictions the eCR was sent to, none of which are
                      possible to view in the eICR data alone.
                    </span>
                    <span>
                      The eCR Viewer also pulls out more data fields from the
                      eICR XML, allowing public health staff to see more data
                      than what's currently available by default in the HTML or
                      surveillance system views
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <SectionSubheader>Consistent data display</SectionSubheader>
                  <p className="m-0 p-0">
                    No matter who sent the eCR, every eCR you view in the eCR
                    Viewer will look the same. The eCR Viewer groups the full
                    eCR document into five main sections:
                  </p>
                  <ul className="mt-0 flex list-disc flex-col gap-2 font-semibold">
                    <li>Patient Info</li>
                    <li>Encounter Info</li>
                    <li>Clinical Info</li>
                    <li>Lab Info</li>
                    <li>eCR Metadata</li>
                  </ul>
                  <p className="m-0 p-0">
                    The ordering of the five main sections, as well as the
                    fields within those sections, is always the same, so you can
                    quickly scroll through the eCR to find the information
                    you're looking for.
                  </p>
                </div>
              </div>
            </div>
            <div id="how-it-works">
              <SectionHeader>How it works</SectionHeader>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                  <p>We currently offer two versions of the eCR Viewer.</p>
                  <ol className="mt-0 list-decimal pl-4">
                    <li>Direct integration with NBS</li>
                    <li>Standalone option for non-NBS jurisdictions</li>
                  </ol>
                  <p>Below, we outline how each version works.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <SectionSubheader>Integrated eCR Viewer</SectionSubheader>
                  <p className="m-0 p-0">
                    The integrated version allows users to access the eCR Viewer
                    directly within their surveillance system. Direct
                    integration is currently supported by NBS. Once installed,
                    the eCR Viewer is activated from the existing eCR document
                    view in NBS, using the “View eICR Document” button. This
                    will open a separate window with the eCR Viewer.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <SectionSubheader>Non-integrated eCR Viewer</SectionSubheader>
                  <p className="m-0 p-0">
                    The non-integrated version offers a standalone tool for
                    users to view eCR documents outside of their jurisdiction's
                    surveillance system. In addition to the core eCR Viewer,
                    this tool provides an eCR Library homepage, allowing users
                    to filter and sort eCR documents. Users would log into the
                    standalone tool separately from their surveillance system.
                  </p>
                </div>
                <figure>
                  <Image
                    alt="eCR Viewer - how it works"
                    width={652}
                    height={383}
                    src={`${basePath}/images/products/ecr-viewer/non-integrated.png`}
                  />
                  <figcaption className="font-['Public Sans'] text-base font-normal leading-snug text-[#224a58]">
                    View of the eCR Library within the non-integrated eCR Viewer
                    containing sample data.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div id="getting-started">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <SectionHeader>Getting started</SectionHeader>
                  <div className="flex flex-col gap-6">
                    <p className="m-0 p-0 text-base font-normal leading-relaxed text-[#224a58]">
                      Before you can use the eCR Viewer, you'll need to set it
                      up and get your staff comfortable with how the eCR Viewer
                      can help improve their data workflows.
                    </p>
                    <div>
                      <SectionSubheader>
                        What's expected from a pilot partner:
                      </SectionSubheader>
                      <ul className="list__full-width text-base font-normal leading-relaxed text-[#224a58]">
                        <li>
                          Work with the DIBBs team to set expectations and
                          establish a regular meeting cadence
                        </li>
                        <li>
                          Deploy the eCR Viewer in your production environment
                        </li>
                        <li>
                          Provide feedback on an ongoing basis to ensure the eCR
                          Viewer in working properly
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <RoundedBackground className="p-10">
                  <ProcessList>
                    <ProcessListItem>
                      <ProcessListHeading type="h3">
                        Gather your team
                      </ProcessListHeading>
                      <p>
                        You'll need someone at your jurisdiction to act as the
                        point of contact with the DIBBs team as well as a
                        technical point of contact who is familiar with your
                        data environment. Sometimes one person fills both of
                        those roles.
                      </p>
                    </ProcessListItem>
                    <ProcessListItem>
                      <ProcessListHeading type="h3">
                        Attend kickoff call
                      </ProcessListHeading>
                      <p>
                        During this kickoff, we'll discuss how eCR Viewer works,
                        the technical requirements, and your eCR data needs.
                      </p>
                    </ProcessListItem>
                    <ProcessListItem>
                      <ProcessListHeading type="h3">
                        Get set up
                      </ProcessListHeading>
                      <p>
                        Work with the DIBBs team to test the eCR Viewer with
                        your staff and to get the tool up and running in your
                        data environment.
                      </p>
                    </ProcessListItem>
                    <ProcessListItem>
                      <ProcessListHeading type="h3">
                        Provide ongoing feedback
                      </ProcessListHeading>
                      <p>
                        Tell us what's going well and what could be better so we
                        can improve your experience with the eCR Viewer.
                      </p>
                    </ProcessListItem>
                  </ProcessList>
                </RoundedBackground>
              </div>
            </div>
            <div id="technical-resources">
              <div>
                <SectionHeader>Technical resources</SectionHeader>
                <p className="text-base font-normal leading-relaxed text-[#224a58]">
                  Find the resources you need to successfully use the eCR Viewer
                  in your jurisdiction.
                </p>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <SectionSubheader>Installing eCR Viewer</SectionSubheader>
                    <ul className="m-0 flex list-none flex-col gap-1 p-0">
                      <li>
                        <Link href="/">
                          Non Integrated Viewer Installation Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          Installation Guide for NBS integration
                        </Link>
                      </li>
                      <li>
                        <Link href="/">DIBBs Installation Guide - Helm</Link>
                      </li>
                      <li>
                        <Link href="/">Hosting options</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <SectionSubheader>Maintenance & Support</SectionSubheader>
                    <ul className="m-0 flex list-none flex-col gap-1 p-0">
                      <li>
                        <Link href="/">Runbook for common issues</Link>
                      </li>
                      <li>
                        <Link href="/">Maintenance guide</Link>
                      </li>
                      <li>
                        <Link href="/">Customer Support Plan Technical</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <SectionSubheader>Terraform</SectionSubheader>
                    <ul className="m-0 flex list-none flex-col gap-1 p-0">
                      <li>
                        <Link href="/">AWS Terraform Installation</Link>
                      </li>
                      <li>
                        <Link href="/">Azure Terraform Installation</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2">
                    <SectionSubheader>Troubleshooting</SectionSubheader>
                    <ul className="m-0 flex list-none flex-col gap-1 p-0">
                      <li>
                        <Link href="/">Usage Guide</Link>
                      </li>
                      <li>
                        <Link href="/">Azure Technical Testing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="faqs" className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <SectionHeader>FAQs</SectionHeader>
                <p className="font-['Public Sans'] m-0 p-0 text-base font-normal leading-snug text-[#224a58]">
                  Find answers to commonly asked questions about the eCR Viewer.
                </p>
              </div>
              <Accordion
                bordered={false}
                items={[
                  {
                    id: '1',
                    className: 'bg-[#f0f0f0]',
                    headingLevel: 'h4',
                    expanded: false,
                    title: 'Who will use this tool?',
                    content: (
                      <AccordionItemContent>
                        Case investigators, epidemiologists, and other public
                        health practitioners who actively reference eCRs for
                        their work will use the eCR Viewer as a workflow
                        optimization tool.
                      </AccordionItemContent>
                    ),
                  },
                  {
                    id: '2',
                    className: 'bg-[#f0f0f0]',
                    headingLevel: 'h4',
                    expanded: false,
                    title:
                      'What case surveillance systems are compatible with eCR Viewer?',
                    content: (
                      <AccordionItemContent>
                        We have two versions of eCR Viewer currently available:
                        <ol className="list-decimal pt-4">
                          <li>A version integrated directly within NBS</li>
                          <li>
                            A standalone version that operates outside of a
                            jurisdiction's surveillance system
                          </li>
                        </ol>
                        We are also working on a direct integration with
                        EpiTrax. If you're interested in integrating the eCR
                        Viewer with other surveillance systems, please reach out
                        to us at <SendMailLink />.
                      </AccordionItemContent>
                    ),
                  },
                  {
                    id: '3',
                    className: 'bg-[#f0f0f0]',
                    headingLevel: 'h4',
                    expanded: false,
                    title: 'Where can I find the eCR Viewer within NBS?',
                    content: (
                      <AccordionItemContent>
                        You can open the eCR Viewer by clicking the “View eICR
                        Document” button while looking at the eCR page in NBS.
                        Clicking this button would open the new eCR Viewer,
                        replacing the existing eCR document viewer.
                      </AccordionItemContent>
                    ),
                  },
                  {
                    id: '4',
                    className: 'bg-[#f0f0f0]',
                    headingLevel: 'h4',
                    expanded: false,
                    title:
                      "Can my jurisdiction set up eCR Viewer if we don't use NBS?",
                    content: (
                      <AccordionItemContent>
                        Yes! The standalone eCR Viewer offers flexibility for
                        jurisdictions with other surveillance systems (e.g.,
                        Maven). Staff will be able to view eCR documents through
                        a separate homepage called the eCR Library rather than
                        within the surveillance system itself.
                      </AccordionItemContent>
                    ),
                  },
                  {
                    id: '5',
                    className: 'bg-[#f0f0f0]',
                    headingLevel: 'h4',
                    expanded: false,
                    title:
                      'Who at our organization needs to be involved to set up this tool? ',
                    content: (
                      <AccordionItemContent>
                        We'll need participation from several people in your
                        public health department to successfully set up the eCR
                        Viewer. This includes:
                        <ol className="list-decimal pt-4">
                          <li>
                            A jurisdictional subject matter expert who can help
                            the DIBBs team understand how and where DIBBs
                            tooling could be hosted
                            <ol className="list-[lower-alpha] pl-4">
                              <li>
                                This could be an engineer or IT personnel,
                                either directly embedded in your public health
                                department or shared at the jurisdiction.
                              </li>
                            </ol>
                          </li>
                          <li>
                            An eCR expert who is familiar with existing eCR
                            workflows and data sources
                            <ol className="list-[lower-alpha] pl-4">
                              <li>
                                This could be an epidemiologist, program
                                manager, or anyone else in your jurisdiction who
                                is familiar with existing eCR data workflows.
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </AccordionItemContent>
                    ),
                  },
                  {
                    id: '6',
                    className: 'bg-[#f0f0f0]',
                    headingLevel: 'h4',
                    expanded: false,
                    title:
                      'Can you speak to privacy preservation in your tool?',
                    content: (
                      <AccordionItemContent>
                        All information is transmitted and protected using
                        standards mandated by individual jurisdictions or the
                        Department of Health and Human Services as applicable
                        based on hosting location.
                      </AccordionItemContent>
                    ),
                  },
                  {
                    id: '7',
                    className: 'bg-[#f0f0f0]',
                    headingLevel: 'h4',
                    expanded: false,
                    title: 'What is the long-term viability of this product?',
                    content: (
                      <AccordionItemContent>
                        Our team is working with stakeholders at CDC to
                        establish a roadmap for near- and long-term support. As
                        eCR data becomes more embedded in the public health
                        ecosystem, this product will also give your jurisdiction
                        the chance to provide direct feedback to CDC on what you
                        need to make eCR data as usable as possible to improve
                        public health outcomes.
                      </AccordionItemContent>
                    ),
                  },
                  {
                    id: '8',
                    className: 'bg-[#f0f0f0]',
                    headingLevel: 'h4',
                    expanded: false,
                    title: 'How do I get started?',
                    content: (
                      <AccordionItemContent>
                        Reach out to our team at <SendMailLink /> for a free
                        consultation and find our whether the eCR Viewer is
                        right for your jurisdiction.
                      </AccordionItemContent>
                    ),
                  },
                ]}
              />
              <div className="flex flex-col gap-3">
                <h3>Have a question that isn't answered above?</h3>
                <p className="font-['Public Sans'] m-0 p-0 text-base font-bold leading-snug text-[#224a58]">
                  Please get in touch with our team at <SendMailLink />
                </p>
              </div>
            </div>
          </div>
          <div>
            <GithubNav version="1.1.1" githubHref="/" />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}

interface AccordionItemContentProps {
  children: React.ReactNode;
}

const AccordionItemContent = ({ children }: AccordionItemContentProps) => {
  return (
    <span className="font-['Public Sans'] text-base font-normal leading-snug text-[#224a58]">
      {children}
    </span>
  );
};

function Navigation() {
  const [selectedHash, setSelectedHash] = useState('#overview');

  return (
    <SideNav
      items={[
        <NavItem
          title="Overview"
          id="overview"
          key="overview"
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />,
        <NavItem
          title="Product features"
          id="product-features"
          key="product-features"
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />,
        <NavItem
          title="How it works"
          id="how-it-works"
          key="how-it-works"
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />,
        <NavItem
          title="Getting started"
          id="getting-started"
          key="getting-started"
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />,
        <NavItem
          title="Technical resources"
          id="technical-resources"
          key="technical-resources"
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />,
        <NavItem
          title="FAQs"
          id="faqs"
          key="faqs"
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />,
      ]}
    />
  );
}

interface NavItemProps {
  title: string;
  id: string;
  selectedHash: string;
  setSelectedHash: (value: SetStateAction<string>) => void;
}
function NavItem({ title, id, selectedHash, setSelectedHash }: NavItemProps) {
  const itemHash = `#${id}`;
  return (
    <a
      href={itemHash}
      key={id}
      className={classNames({
        'usa-current': itemHash === selectedHash,
      })}
      onClick={() => setSelectedHash(itemHash)}
    >
      {title}
    </a>
  );
}

interface GithubNavProps {
  version: string;
  githubHref: string;
}

function GithubNav({ version, githubHref }: GithubNavProps) {
  return (
    <div className="max-w-[16.25rem] bg-[#e7f2f5] pb-5 pt-7">
      <div className="mr-10 flex flex-col items-center gap-1">
        <p className="m-0 p-0 text-base font-normal leading-relaxed text-[#224a58]">
          Current version: {version}
        </p>
        <hr className="ml-10 h-[0px] w-full border border-[#a9aeb1]" />
        <Link
          href={githubHref}
          className="text-base font-semibold leading-relaxed text-[#3a7d95] underline"
        >
          GitHub Respository
        </Link>
      </div>
    </div>
  );
}

interface SectionHeader {
  children: React.ReactNode;
}

const SectionHeader = ({ children }: SectionHeader) => {
  return (
    <h2 className="font-['Public Sans'] text-[1.75rem] font-bold leading-[2.4rem] text-[#14333d]">
      {children}
    </h2>
  );
};

const SectionSubheader = ({ children }: SectionHeader) => {
  return (
    <h3 className="font-['Public Sans'] text-xl font-bold leading-7 text-[#224a58]">
      {children}
    </h3>
  );
};

interface TitleSection {
  title: string;
  text: string;
}
function TitleSection({ title, text }: TitleSection) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-['Merriweather'] text-[2rem] font-bold leading-[2.8rem] text-[#224a58]">
        {title}
      </h1>
      <p className="font-['Public Sans'] m-0 p-0 text-[1.38rem] font-extralight leading-[2rem] text-[#224a58]">
        {text}
      </p>
    </div>
  );
}

function SendMailLink() {
  return (
    <Link
      className="font-['Public Sans'] text-base font-bold leading-snug text-[#3a7d95]"
      href="mailto:dibbs@cdc.gov"
    >
      dibbs@cdc.gov
    </Link>
  );
}
