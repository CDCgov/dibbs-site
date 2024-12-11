import { RoundedBackground } from '@/app/components/RoundedBackground/RoundedBackground';
import {
  ProcessList,
  ProcessListHeading,
  ProcessListItem,
  SideNav,
} from '@trussworks/react-uswds';
import classNames from 'classnames';
import Link from 'next/link';
import { SetStateAction, useState } from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const SendMailLink = () => {
  return (
    <Link
      className="font-['Public Sans'] text-base font-bold leading-snug text-[#3a7d95]"
      href="mailto:dibbs@cdc.gov"
    >
      dibbs@cdc.gov
    </Link>
  );
};

interface TitleSectionProps {
  title: string;
  text: string;
}

const TitleSection = ({ title, text }: TitleSectionProps) => {
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
};

const SectionHeader = ({ children }: ContainerProps) => {
  return (
    <h2 className="font-['Public Sans'] text-[1.75rem] font-bold leading-[2.4rem] text-[#14333d]">
      {children}
    </h2>
  );
};

const SectionSubheader = ({ children }: ContainerProps) => {
  return (
    <h3 className="font-['Public Sans'] text-xl font-bold leading-7 text-[#224a58]">
      {children}
    </h3>
  );
};

const SectionContentContainer = ({ children }: ContainerProps) => {
  return <div className="flex flex-col gap-10">{children}</div>;
};

const SubsectionContainer = ({ children }: ContainerProps) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

interface GithubNavProps {
  version: string;
  githubHref: string;
}

const GithubNav = ({ version, githubHref }: GithubNavProps) => {
  return (
    <div className="max-w-[16.25rem] bg-[#dae9ee] bg-[#e7f2f5] pb-5 pt-7">
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
};

interface NavItemProps {
  title: string;
  id: string;
  selectedHash: string;
  setSelectedHash: (value: SetStateAction<string>) => void;
}

const NavItem = ({
  title,
  id,
  selectedHash,
  setSelectedHash,
}: NavItemProps) => {
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
};

const AccordionItemContent = ({ children }: ContainerProps) => {
  return (
    <span className="font-['Public Sans'] text-base font-normal leading-snug text-[#224a58]">
      {children}
    </span>
  );
};

const Navigation = () => {
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
};

const GridContainer = ({ children }: ContainerProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_3fr_1fr] lg:gap-0">
      {children}
    </div>
  );
};

const GridLeft = ({ children }: ContainerProps) => {
  return <div className="pt-[.625rem]">{children}</div>;
};

const GridMiddle = ({ children }: ContainerProps) => {
  return (
    <div className="grid grid-cols-1 gap-[3.75rem] px-[3.75rem]">
      {children}
    </div>
  );
};

const GridRight = ({ children }: ContainerProps) => {
  return <div>{children}</div>;
};

const HaveAQuestionSection = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3>Have a question that isn't answered above?</h3>
      <p className="font-['Public Sans'] m-0 p-0 text-base font-bold leading-snug text-[#224a58]">
        Please get in touch with our team at <SendMailLink />
      </p>
    </div>
  );
};

interface GettingStartedProcessListProps {
  systemName: string;
}
const GettingStartedProcessList = ({
  systemName,
}: GettingStartedProcessListProps) => {
  return (
    <RoundedBackground className="p-10">
      <ProcessList>
        <ProcessListItem>
          <ProcessListHeading type="h3">Gather your team</ProcessListHeading>
          <p>
            You'll need someone at your jurisdiction to act as the point of
            contact with the DIBBs team as well as a technical point of contact
            who is familiar with your data environment. Sometimes one person
            fills both of those roles.
          </p>
        </ProcessListItem>
        <ProcessListItem>
          <ProcessListHeading type="h3">Attend kickoff call</ProcessListHeading>
          <p>
            During this kickoff, we'll discuss how {systemName} works, the
            technical requirements, and your eCR data needs.
          </p>
        </ProcessListItem>
        <ProcessListItem>
          <ProcessListHeading type="h3">Get set up</ProcessListHeading>
          <p>
            Work with the DIBBs team to test the {systemName} with your staff
            and to get the tool up and running in your data environment.
          </p>
        </ProcessListItem>
        <ProcessListItem>
          <ProcessListHeading type="h3">
            Provide ongoing feedback
          </ProcessListHeading>
          <p>
            Tell us what's going well and what could be better so we can improve
            your experience with the {systemName}.
          </p>
        </ProcessListItem>
      </ProcessList>
    </RoundedBackground>
  );
};

interface VideoProps {
  src: string;
  description?: string;
}
const Video = ({ src, description }: VideoProps) => {
  return (
    <div>
      <iframe
        className="h-[31.25rem] w-full border-none"
        src={src}
        allowFullScreen
      ></iframe>
      {description ? (
        <p className="font-['Public Sans'] m-0 p-0 text-base font-normal leading-snug text-[#224a58]">
          {description}
        </p>
      ) : null}
    </div>
  );
};

interface FigureProps extends ContainerProps {
  caption: string;
}

const Figure = ({ children, caption }: FigureProps) => {
  return (
    <figure>
      {children}
      <figcaption className="font-['Public Sans'] text-base font-normal leading-snug text-[#224a58]">
        {caption}
      </figcaption>
    </figure>
  );
};

export {
  SendMailLink,
  TitleSection,
  SectionHeader,
  SectionSubheader,
  GithubNav,
  NavItem,
  AccordionItemContent,
  Navigation,
  GridContainer,
  GridLeft,
  GridMiddle,
  GridRight,
  HaveAQuestionSection,
  GettingStartedProcessList,
  Video,
  SectionContentContainer,
  SubsectionContainer,
  Figure,
};
