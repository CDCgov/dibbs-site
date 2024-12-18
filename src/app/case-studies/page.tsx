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
      <div className="ml-auto mr-auto flex max-w-[90rem] flex-col px-5 pb-[5rem] pt-[3.75rem] md:px-[10rem]">
        <div className="flex flex-col gap-[3.75rem]">
          {/* Section 1 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 py-12 lg:order-1">
              <ContentContainer>
                <TextContainer>
                  <Title>
                    Creating a modular, cloud-based data processing pipeline for
                    LA County
                  </Title>
                  <Text>
                    The Los Angeles County Department of Public Health needed
                    timely access to eCR data to monitor and respond to disease
                    outbreaks. We worked with them to develop and deploy a
                    cloud-based, modular data pipeline that automatically
                    processes and enriches eCR data to improve downstream data
                    analysis and case investigation.
                  </Text>
                </TextContainer>
                <div>
                  <LinkButton
                    variant="primary"
                    href="/case-studies/dibbs-pipeline"
                  >
                    View case study
                  </LinkButton>
                </div>
              </ContentContainer>
            </div>
            <div className="order-1 flex justify-start lg:order-2 lg:justify-end">
              <RoundedImage
                src={`${basePath}/images/case-studies/image1.png`}
                width={550}
                height={300}
                alt=""
              />
            </div>
          </div>
          {/* Section 2 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-1 flex justify-start lg:order-1">
              <RoundedImage
                src={`${basePath}/images/case-studies/image2.png`}
                width={550}
                height={300}
                alt=""
              />
            </div>
            <div className="order-2 py-12 lg:order-2 lg:items-center">
              <ContentContainer>
                <TextContainer>
                  <Title>
                    Surfacing actionable insights from electronic case reporting
                    data
                  </Title>
                  <Text>
                    Many public health jurisdictions struggle to use and sort
                    through incoming eCR data. To unlock the value of this rich
                    source of data, we've built an intuitive interface that
                    surfaces key information from eCR files to make them more
                    useful for monitoring the spread of reportable conditions.
                  </Text>
                </TextContainer>
                <div>
                  <LinkButton variant="primary" href="/case-studies/ecr-viewer">
                    View case study
                  </LinkButton>
                </div>
              </ContentContainer>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 py-12 lg:order-1">
              <ContentContainer>
                <TextContainer>
                  <Title>
                    Improving public health data infrastructure through
                    flexible, modern approaches to cloud services
                  </Title>
                  <Text>
                    We're working with public health jurisdictions to provide
                    free and flexible cloud hosting infrastructure that enables
                    them to quickly upgrade and scale their data systems with
                    our modern, cloud-based software solutions, so they can meet
                    the scope and scale of emerging public health threats.
                  </Text>
                </TextContainer>
                <div>
                  <LinkButton
                    variant="primary"
                    href="/case-studies/cloud-hosting"
                  >
                    View case study
                  </LinkButton>
                </div>
              </ContentContainer>
            </div>
            <div className="order-1 flex justify-start lg:order-2 lg:ml-4">
              <RoundedImage
                src={`${basePath}/images/case-studies/image3.png`}
                width={550}
                height={300}
                alt=""
              />
            </div>
          </div>

          {/* Section 4 */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div className="order-1 flex justify-start lg:order-1">
              <RoundedImage
                src={`${basePath}/images/case-studies/image4.png`}
                width={550}
                height={300}
                alt=""
              />
            </div>
            <div className="order-2 py-12 lg:order-2">
              <ContentContainer>
                <TextContainer>
                  <Title>
                    Building a prototype for modernized public health
                    infrastructure in Virginia
                  </Title>
                  <Text>
                    The Virginia Department of Health needed to process high
                    volumes of incoming COVID-19 data and turn it into
                    meaningful intelligence. We worked with them to build a
                    prototype data ingestion pipeline that improves data
                    processing and analysis to more efficiently inform public
                    health action.
                  </Text>
                </TextContainer>
                <div>
                  <LinkButton
                    variant="primary"
                    href="/case-studies/dibbs-prototype"
                  >
                    View case study
                  </LinkButton>
                </div>
              </ContentContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

function TextContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2>{children}</h2>;
}

function Text({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}
