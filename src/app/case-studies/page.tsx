'use client';
import { LinkButton } from '../components/LinkButton/LinkButton';
import { basePath } from '../utils/constants';
import React from 'react';
import { useHeroInit } from '../hooks/useHeroInit';
import { RoundedImage } from '../components/RoundedImage/RoundedImage';

export default function CaseStudies() {
  useHeroInit({
    header: `See how DIBBs solutions have helped others`,
    subheader: `Explore our case studies to see the impact of DIBBs.`,
    heroClass: 'case-studies-hero',
  });
  return (
    <div>
      <div className="ml-auto mr-auto flex max-w-[75rem] flex-col py-20 pl-10">
        <div className="flex flex-col gap-[7.5rem]">
          {/* Section 1 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[auto,min(30rem)] lg:items-center">
            <div className="order-2 lg:order-1">
              <Title>
                Creating a modular, cloud-based data processing pipeline for LA
                County
              </Title>
              <Text>
                The Los Angeles County Department of Public Health needed timely
                access to eCR data to monitor and respond to disease outbreaks.
                We worked with them to develop and deploy a cloud-based, modular
                data pipeline that automatically processes and enriches eCR data
                to improve downstream data analysis and case investigation.
              </Text>
              <LinkButton variant="primary" href="/case-studies/dibbs-pipeline">
                View case study
              </LinkButton>
            </div>
            <div className="order-1 flex justify-start lg:order-2 lg:justify-end">
              <RoundedImage
                src={`${basePath}/images/case-studies/image1.png`}
                width={480}
                height={320}
                alt=""
              />
            </div>
          </div>
          {/* Section 2 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[min(30rem)_auto] lg:items-center">
            <div className="order-1 flex justify-start lg:order-1">
              <RoundedImage
                src={`${basePath}/images/case-studies/image2.png`}
                width={480}
                height={320}
                alt=""
              />
            </div>
            <div className="order-2 lg:order-2 lg:items-center">
              <Title>
                Surfacing actionable insights from electronic case reporting
                data
              </Title>
              <Text>
                Many public health jurisdictions struggle to use and sort
                through incoming eCR data. To unlock the value of this rich
                source of data, we've built an intuitive interface that surfaces
                key information from eCR files to make them more useful for
                monitoring the spread of reportable conditions.
              </Text>
              <LinkButton variant="primary" href="/case-studies/ecr-viewer">
                View case study
              </LinkButton>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[min(40.8rem)_min(33rem)] lg:items-center">
            <div className="order-2 lg:order-1">
              <Title>
                Improving public health data infrastructure through flexible,
                modern approaches to cloud services
              </Title>
              <Text>
                We're working with public health jurisdictions to provide free
                and flexible cloud hosting infrastructure that enables them to
                quickly upgrade and scale their data systems with our modern,
                cloud-based software solutions, so they can meet the scope and
                scale of emerging public health threats.
              </Text>
              <LinkButton variant="primary" href="/case-studies/cloud-hosting">
                View case study
              </LinkButton>
            </div>
            <div className="order-1 flex justify-start lg:order-2 lg:ml-4">
              <RoundedImage
                src={`${basePath}/images/case-studies/image3.png`}
                width={480}
                height={320}
                alt=""
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[min(30rem)_42rem] lg:items-center">
            <div className="order-1 flex justify-start lg:order-1">
              <RoundedImage
                src={`${basePath}/images/case-studies/image4.png`}
                width={480}
                height={320}
                alt=""
              />
            </div>
            <div className="order-2 lg:order-2">
              <Title>
                Building a prototype for modernized public health infrastructure
                in Virginia
              </Title>
              <Text>
                The Virginia Department of Health needed to process high volumes
                of incoming COVID-19 data and turn it into meaningful
                intelligence. We worked with them to build a prototype data
                ingestion pipeline that improves data processing and analysis to
                more efficiently inform public health action.
              </Text>
              <LinkButton
                variant="primary"
                href="/case-studies/dibbs-prototype"
              >
                View case study
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2>{children}</h2>;
}

function Text({ children }: { children: React.ReactNode }) {
  return <p className="m-0 mb-5 mt-5 p-0">{children}</p>;
}
