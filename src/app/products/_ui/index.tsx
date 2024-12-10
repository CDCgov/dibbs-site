import { SideNav } from '@trussworks/react-uswds';
import classNames from 'classnames';
import Link from 'next/link';
import { SetStateAction, useState } from 'react';

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

interface SectionHeaderProps {
  children: React.ReactNode;
}

const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <h2 className="font-['Public Sans'] text-[1.75rem] font-bold leading-[2.4rem] text-[#14333d]">
      {children}
    </h2>
  );
};

const SectionSubheader = ({ children }: SectionHeaderProps) => {
  return (
    <h3 className="font-['Public Sans'] text-xl font-bold leading-7 text-[#224a58]">
      {children}
    </h3>
  );
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

export {
  SendMailLink,
  TitleSection,
  SectionHeader,
  SectionSubheader,
  GithubNav,
  NavItem,
  AccordionItemContent,
  Navigation,
};
