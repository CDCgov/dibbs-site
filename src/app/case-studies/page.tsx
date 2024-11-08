import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import Hero from '../components/Hero/Hero';
import { LinkButton } from '../components/LinkButton/LinkButton';
import Image from 'next/image';
import { basePath } from '../utils/constants';
import React from 'react';

export default function CaseStudies() {
  return (
    <div>
      <Hero
        header="See how DIBBs solutions have helped others"
        subheader="Explore our case studies to see the impact of DIBBs."
      />
      <ContentContainer>
        <div className="flex flex-col gap-10">
          {/* Section 1 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1 lg:items-center">
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
              <LinkButton variant="primary" href="/">
                View case study
              </LinkButton>
            </div>
            <div className="add-aspect-16x9 order-1 flex justify-center lg:order-2 lg:items-center lg:justify-start">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={480}
                height={320}
                alt="Placeholder"
              />
            </div>
          </div>
          {/* Section 2 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="add-aspect-16x9 order-1 flex justify-center lg:order-1 lg:items-center lg:justify-start">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={480}
                height={320}
                alt="Placeholder"
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
              <LinkButton variant="primary" href="/">
                View case study
              </LinkButton>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1 lg:items-center">
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
              <LinkButton variant="primary" href="/">
                View case study
              </LinkButton>
            </div>
            <div className="add-aspect-16x9 order-1 flex justify-center lg:order-2 lg:items-center lg:justify-start">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={480}
                height={320}
                alt="Placeholder"
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="add-aspect-16x9 order-1 flex justify-center lg:order-1 lg:items-center lg:justify-start">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={480}
                height={320}
                alt="Placeholder"
              />
            </div>
            <div className="order-2 lg:order-2 lg:items-center">
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
              <LinkButton variant="primary" href="/">
                View case study
              </LinkButton>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[2rem] font-bold text-[#224a58]">{children}</h2>;
}

function Text({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 mb-5 mt-5 p-0 text-base font-normal leading-relaxed text-[#224a58]">
      {children}
    </p>
  );
}
