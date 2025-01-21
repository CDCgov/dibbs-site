import { Grid } from '@trussworks/react-uswds';
import { basePath } from './utils/constants';
import Carousel from './components/Carousel/Carousel';
import { LinkButton } from './components/LinkButton/LinkButton';
import { ImageCard } from './components/ImageCard/ImageCard';
import { Heading, Paragraph } from './_ui';
import styles from './_styles/Homepage.module.scss';
import { InvitationCta } from './components/InvitationCta/InvitationCta';
import Image from 'next/image';
import classNames from 'classnames';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

const DibbsSection = () => {
  const benefits: string[] = [
    'Better, higher quality data for use in data analysis',
    'Time-savings for public health staff thanks to reduced manual work',
    'More usable data that makes case investigation easier',
    'Automated data processing that streamlines data workflows',
    'Flexible cloud deployment options, including free central hosting through CDC',
  ];

  return (
    <section>
      <PageContainer>
        <div className="flex flex-col items-center rounded-tl-[2.5rem] bg-white p-4 shadow-lg md:p-10 xl:flex-row xl:p-0">
          <Image
            src={`${basePath}/images/home/intro-tout.jpg`}
            alt=""
            width={480}
            height={411}
            className="shrink-0 rounded-tl-[2.5rem]"
          />
          <div className="flex h-full w-full flex-col gap-6 rounded-br-[2.5rem] bg-white p-4 md:p-10">
            <div className="flex flex-col gap-2">
              <Heading className="text-center xl:text-left">
                Introducing Data Integration Building Blocks
              </Heading>
              <Paragraph className="m-0 max-w-[35rem] p-0">
                DIBBs are modular, open-source software that can be configured
                to clean, transform, and enrich data. We build cloud-enabled
                products that leverage DIBBs to provide the following benefits
                to public health jurisdictions:
              </Paragraph>
            </div>

            <ul className="flex list-none flex-col gap-4 pl-0 font-semibold text-blue-cool-70">
              {benefits.map((benefit, index) => (
                <li
                  className="w-fit bg-[#ebe3f9] before:mr-[.5rem] before:pl-2 before:content-['◿'] after:pr-2 last:mr-[-20px] last:min-w-fit"
                  key={`benefit-${index}`}
                >
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageContainer>
    </section>
  );
};

const ValueSection = () => {
  return (
    <section className="xl:pb-[6.25rem]">
      <div
        className={classNames(
          styles.valueSection,
          'after:left-[44%] 2xl:after:left-[46%]',
        )}
      >
        <ContentContainer className="px-10 py-0 md:px-32 xl:pt-[6.25rem]">
          <ImageCard
            imageFirst={false}
            imageUrl={`${basePath}/images/home/value-tout.jpg`}
            xlHideImage={true}
            imageAlt=""
            imageStyle={{
              transform: 'scale(1.4) translate(-8%, 3%)',
            }}
            cardBackground="none"
          >
            <div className="my-auto flex flex-col gap-2">
              <Heading className="text-center xl:max-w-[23.25rem] xl:text-start">
                Unlock the value of your jurisdiction's data
              </Heading>
              <Paragraph className="xl:max-w-[28.13rem]">
                DIBBs products help jurisdictions make the most of their data.
                From improving the usability of electronic case reporting (eCR)
                data to streamlining data collection from healthcare providers
                without the need for a direct connection, our products save
                jurisdictions time and effort for case investigation and
                analysis.
              </Paragraph>
            </div>
            <div className="self-center xl:self-start">
              <LinkButton href="/products" variant="primary">
                Learn about our products
              </LinkButton>
            </div>
          </ImageCard>
        </ContentContainer>
      </div>
    </section>
  );
};

const JurisdictionSection = () => {
  return (
    <>
      <section>
        <ContentContainer className="px-10 pb-10 pt-8 md:px-32 lg:pt-[6.25rem]">
          <Grid row gap>
            <Grid col={12}>
              <div className="flex flex-col items-center gap-2">
                <Heading className="text-center">
                  Jurisdictions working with DIBBs
                </Heading>
                <Paragraph>
                  State and local public health jurisdictions across the United
                  States used DIBBs to solve their toughest data challenges
                </Paragraph>
              </div>
            </Grid>
          </Grid>
        </ContentContainer>
      </section>
      <section>
        <div className="pb-10 pt-0">
          <Carousel />
        </div>
      </section>
    </>
  );
};

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-auto mr-auto flex justify-center pb-[2rem] pt-[3.75rem] lg:px-[7.5rem] lg:pb-[6.25rem]">
      {children}
    </div>
  );
}

interface ContentContainer {
  children: React.ReactNode;
  className?: string;
}
function ContentContainer({ children, className }: ContentContainer) {
  return (
    <div
      className={classNames(
        'ml-auto mr-auto flex max-w-[87.5rem] flex-col',
        className,
      )}
    >
      {children}
    </div>
  );
}

const Home = () => {
  return (
    <>
      <DibbsSection />
      <ValueSection />
      <JurisdictionSection />
      <InvitationCta />
    </>
  );
};

export default Home;
