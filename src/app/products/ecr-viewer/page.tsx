'use client';
import { ContentContainer } from '@/app/components/ContentContainer/ContentContainer';
import Hero from '@/app/components/Hero/Hero';
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

export default function EcrViewer() {
  return (
    <div>
      <Hero
        header="eCR Viewer"
        subheader="An intuitive interface that helps epidemiologists and case investigators make better sense of eCR data, faster."
      />
      <ContentContainer align>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr]">
          <div className="pt-[.625rem]">
            <Navigation />
          </div>
          <div className="grid grid-cols-1 gap-[3.75rem] pl-10 pr-10">
            <div id="overview">
              <h1 className="font-['Source Sans Pro'] font-bold text-[#224a58]">
                Overview
              </h1>
              <p className="font-['Source Sans Pro'] flex flex-col gap-10 text-base font-normal leading-relaxed text-[#224a58]">
                <span>
                  The eCR Viewer is a tool that aims to improve the usability of
                  electronic case reporting (eCR) data by displaying a summary
                  of key data contained in an eCR so that public health staff
                  can quickly find the information they need.
                </span>
                <span>
                  In user research with public health staff who review eCRs and
                  other case data, we've heard that eCR data is often difficult
                  to make sense of — it's like getting someone's entire medical
                  record dropped on your desk. The eCR Viewer aims to make
                  relevant information easier to find by displaying eCR data in
                  a way that's more intuitive.
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h2>The value to you</h2>
              <ul className="font-['Source Sans Pro'] text-base font-semibold leading-relaxed text-[#224a58]">
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
            </div>
            <div id="demo">
              <h2>Demo</h2>
              <div>
                <Image
                  alt="placeholder video"
                  width={652}
                  height={383}
                  src={`${basePath}/images/placeholder.png`}
                />
                <span className="font-['Source Sans Pro'] w-[646.01px] text-base font-normal leading-relaxed text-[#224a58]">
                  See how the eCR Viewer can improve the way your jurisdiction
                  uses eCR data.
                </span>
              </div>
            </div>
            <div id="how-it-works">
              <div className="flex flex-col gap-3">
                <h2>How it works</h2>
                <p className="flex flex-col gap-10">
                  <span>
                    Using the eCR Viewer, public health staff can easily find
                    data relevant to a reportable condition.
                  </span>
                  <span>
                    The eCR Viewer surfaces key information in a summary at the
                    top of the eCR document. This eCR Summary divided into three
                    categories: Patient Summary, Encounter Summary, and
                    Condition Summary.
                  </span>
                </p>
                <div className="flex flex-col gap-3">
                  <h3>eCR Summary</h3>
                  <Image
                    alt="eCR Viewer - how it works"
                    width={652}
                    height={383}
                    src={`${basePath}/images/ecr-viewer_how-it-works.gif`}
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="font-['Source Sans Pro'] text-base font-bold leading-relaxed text-[#224a58]">
                      We've grouped the full eCR docuent into five main
                      sections:
                    </p>
                    <ul className="font-['Source Sans Pro'] text-base font-bold leading-relaxed text-[#224a58]">
                      <li>Patient Info</li>
                      <li>Encounter Info</li>
                      <li>Clinical Info</li>
                      <li>Lab Info</li>
                      <li>eCR Metadata</li>
                    </ul>
                  </div>
                  <p className="flex flex-col gap-8">
                    <span>
                      No matter who sent the eCR, every eCR you view in the eCR
                      Viewer will look the same. The ordering of the five main
                      sections, as well as the fields within those sections, is
                      always the same, so you can quickly scroll through the eCR
                      to find the information you're looking for.
                    </span>
                    <span>
                      You can use the side navigation to skip to any section
                      within the eCR. It's always visible as you scroll so you
                      can see where you are within the document and quickly move
                      to different sections.
                    </span>
                    <span>
                      The eCR Viewer allows you to see more data than what's
                      currently available by default in the HTML or surveillance
                      system views. We pull out more data fields from the eICR
                      XML and also combine eICR and RR data together.
                    </span>
                    <span>
                      For example, with the eCR Viewer, you can see all of the
                      reportable conditions for the eCR, why the eCR was
                      triggered, and which jurisdictions the eCR was sent to,
                      none of which are possible to view in the eICR data alone
                    </span>
                    <span>
                      With the eCR Viewer, you can quickly see what data is
                      missing in an eCR so you don't have to wonder whether you
                      can't find the data or if it's just not there. All of the
                      unavailable fields are consolidated at the bottom of the
                      eCR for quick scanning.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div id="getting-started">
              <div>
                <h1 className="font-['Source Sans Pro'] font-bold text-[#224a58]">
                  Getting started
                </h1>
                <div>
                  <p className="font-['Source Sans Pro'] text-base font-normal leading-relaxed text-[#224a58]">
                    Before you can use the eCR Viewer, you'll need to set it up
                    and get your staff comfortable with how the eCR Viewer can
                    help improve their data workflows.
                  </p>
                  <p className="font-['Source Sans Pro'] text-base font-bold leading-relaxed text-[#224a58]">
                    What's expected from a pilot partner:
                  </p>
                  <ul className="font-['Source Sans Pro'] text-base font-normal leading-relaxed text-[#224a58]">
                    <li>
                      Work with the DIBBs team to set expectations and establish
                      a regular meeting cadence
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
                <ProcessList>
                  <ProcessListItem>
                    <ProcessListHeading type="h4">
                      Gather your team
                    </ProcessListHeading>
                    <p>
                      You'll need someone at your jurisdiction to act as the
                      point of contact with the DIBBs team as well as a
                      technical point of contact who is familiar with your data
                      environment. Sometimes one person fills both of those
                      roles.
                    </p>
                  </ProcessListItem>
                  <ProcessListItem>
                    <ProcessListHeading type="h4">
                      Attend kickoff call
                    </ProcessListHeading>
                    <p>
                      During this kickoff, we'll discuss how eCR Viewer works,
                      the technical requirements, and your eCR data needs.
                    </p>
                  </ProcessListItem>
                  <ProcessListItem>
                    <ProcessListHeading type="h4">
                      Get set up
                    </ProcessListHeading>
                    <p>
                      Work with the DIBBs team to test the eCR Viewer with your
                      staff and to get the tool up and running in your data
                      environment.
                    </p>
                  </ProcessListItem>
                  <ProcessListItem>
                    <ProcessListHeading type="h4">
                      Provide ongoing feedback
                    </ProcessListHeading>
                    <p>
                      Tell us what's going well and what could be better so we
                      can improve your experience with the eCR Viewer.
                    </p>
                  </ProcessListItem>
                </ProcessList>
              </div>
            </div>
            <div id="technical-resources">
              <div>
                <h1 className="font-['Source Sans Pro'] font-bold text-[#224a58]">
                  Technical resources
                </h1>
                <p className="font-['Source Sans Pro'] text-base font-normal leading-relaxed text-[#224a58]">
                  Find the resources you need to successfully use the eCR Viewer
                  in your jurisdiction.
                </p>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl">Installing eCR Viewer</h2>
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
                    <h2 className="text-xl">Maintenance & Support</h2>
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
                    <h2 className="text-xl">Terraform</h2>
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
                    <h2 className="text-xl">Troubleshooting</h2>
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
            <div id="faqs">
              <div>
                <h1 className="font-['Source Sans Pro'] font-bold text-[#224a58]">
                  FAQs
                </h1>
                <p>
                  Find answers to commonly asked questions about the eCR Viewer.
                </p>
                <Accordion
                  bordered={false}
                  items={[
                    {
                      className: 'bg-background',
                      id: 'test',
                      headingLevel: 'h2',
                      expanded: false,
                      title: 'Who will use this tool?',
                      content:
                        'Case investigators, epidemiologists, and other public health practitioners who actively reference eCRs for their work will use the eCR Viewer as a workflow optimization tool.',
                    },
                  ]}
                />
              </div>
              <div>
                <h3>Have a question that isn't answered?</h3>
                <p>
                  Please get in touch with our team at{' '}
                  <Link href="mailto:dibbs@cdc.gov">dibbs@cdc.gov</Link>
                </p>
              </div>
            </div>
          </div>
          <div>Github links</div>
        </div>
      </ContentContainer>
    </div>
  );
}

function Navigation() {
  const [selectedHash, setSelectedHash] = useState('#overview');

  const subItems = [
    <NavItem
      title="Demo"
      id="demo"
      selectedHash={selectedHash}
      setSelectedHash={setSelectedHash}
    />,
  ];
  return (
    <SideNav
      items={[
        <>
          <NavItem
            title="Overview"
            id="overview"
            selectedHash={selectedHash}
            setSelectedHash={setSelectedHash}
          />
          <SideNav isSubnav items={subItems} />
        </>,
        <NavItem
          title="How it works"
          id="how-it-works"
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />,
        <NavItem
          title="Getting started"
          id="getting-started"
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />,
        <NavItem
          title="Technical resources"
          id="technical-resources"
          selectedHash={selectedHash}
          setSelectedHash={setSelectedHash}
        />,
        <NavItem
          title="FAQs"
          id="faqs"
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
