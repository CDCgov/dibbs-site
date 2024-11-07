import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import Hero from '../components/Hero/Hero';
import { LinkButton } from '../components/LinkButton/LinkButton';
import Image from 'next/image';
import { basePath } from '../utils/constants';

export default function CaseStudies() {
  return (
    <div>
      <Hero
        header="See how DIBBs solutions have helped others"
        subheader="Explore our case studies to see the impact of DIBBs."
      />
      <ContentContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2 grid max-w-[40.25rem] grid-cols-1 pt-8">
            <h2 className="text-[2rem] font-bold text-[#224a58]">
              Creating a modular, cloud-based data processing pipeline for LA
              County
            </h2>
            <p className="font-['Source Sans Pro'] m-0 p-0 text-base font-normal leading-relaxed text-[#224a58]">
              The Los Angeles County Department of Public Health needed timely
              access to eCR data to monitor and respond to disease outbreaks. We
              worked with them to develop and deploy a cloud-based, modular data
              pipeline that automatically processes and enriches eCR data to
              improve downstream data analysis and case investigation.
            </p>
            <LinkButton variant="primary" href="/">
              View case study
            </LinkButton>
          </div>
          <div className="mr-20">
            <Image
              className="mr-20 max-h-[20rem] max-w-[30rem]"
              src={`${basePath}/images/placeholder.png`}
              width={480}
              height={320}
              alt="Placeholder"
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}
