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
        <div className="grid grid-cols-1 gap-10">
          <ContentGrid>
            <FlexContainer>
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
            </FlexContainer>
            <div className="content-center">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={480}
                height={320}
                alt="Placeholder"
              />
            </div>
          </ContentGrid>
          <ContentGrid>
            <div className="content-center">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={480}
                height={320}
                alt="Placeholder"
              />
            </div>
            <FlexContainer>
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
            </FlexContainer>
          </ContentGrid>
          <ContentGrid>
            <FlexContainer>
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
            </FlexContainer>
            <div className="content-center">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={480}
                height={320}
                alt="Placeholder"
              />
            </div>
          </ContentGrid>
          <ContentGrid>
            <div className="content-center">
              <Image
                src={`${basePath}/images/placeholder.png`}
                width={480}
                height={320}
                alt="Placeholder"
              />
            </div>
            <FlexContainer>
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
            </FlexContainer>
          </ContentGrid>
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
    <p className="m-0 p-0 text-base font-normal leading-relaxed text-[#224a58]">
      {children}
    </p>
  );
}

function ContentGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">{children}</div>
  );
}

function FlexContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col items-start gap-3 pt-8">{children}</div>;
}
