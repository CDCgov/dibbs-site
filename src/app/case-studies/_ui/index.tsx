import Link from 'next/link';
import { Link as ExternalLink } from '@trussworks/react-uswds';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { NavigateNextIcon } from './NavigateNextIcon';
import {
  RoundedImage,
  RoundedImageProps,
} from '@/app/components/RoundedImage/RoundedImage';

interface ContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: ContainerProps) => {
  return (
    <>
      <div className="main ml-auto mr-auto flex items-center justify-center pb-[5rem] lg:px-[7.5rem]">
        {children}
      </div>
    </>
  );
};

const ContentContainer = ({ children }: ContainerProps) => {
  return (
    <div className="content grid max-w-[48.25rem] grid-cols-1 gap-[2.5rem] px-5 pt-[2.5rem] md:px-[3.75rem]">
      {children}
    </div>
  );
};

const SectionContentContainer = ({ children }: ContainerProps) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

const HeadingContentContainer = ({ children }: ContainerProps) => {
  return <div className="flex flex-col gap-[2.5rem]">{children}</div>;
};

interface HeadingImageContainerProps extends ContainerProps, BreadcrumbProps {}
const HeadingImageContainer = ({
  children,
  currentPageTitle,
}: HeadingImageContainerProps) => {
  return (
    <div className="flex flex-col gap-5">
      <>
        <Breadcrumb currentPageTitle={currentPageTitle} />
        <div>{children}</div>
      </>
    </div>
  );
};

interface BreadcrumbProps {
  currentPageTitle: string;
}
const Breadcrumb = ({ currentPageTitle }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="flex gap-1">
      <Link
        className="active:blue-cool-80 font-bold text-blue-cool-60 underline underline-offset-4 visited:text-violet-warm-60 hover:text-blue-cool-50"
        href="/case-studies"
      >
        Case studies
      </Link>
      <NavigateNextIcon />
      <Link href="" aria-current="page">
        {currentPageTitle}
      </Link>
    </nav>
  );
};

const Text = ({ children }: ContainerProps) => {
  return <p className="m-0 flex flex-col gap-6 p-0">{children}</p>;
};

const UnorderedList = ({ children }: ContainerProps) => {
  return (
    <ul
      className={classNames(
        'flex flex-col gap-2 font-semibold',
        styles.list__fullWidth,
      )}
    >
      {children}
    </ul>
  );
};

const ReadMore = ({ href, linkText }: { href: string; linkText: string }) => {
  return (
    <>
      <h2>Read more about our work</h2>
      <ExternalLink
        className="font-bold leading-snug underline"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {linkText}
      </ExternalLink>
    </>
  );
};

const HeadingImage = (props: RoundedImageProps) => {
  return (
    <RoundedImage
      width={300}
      height={654}
      priority
      className="h-full w-full"
      {...props}
    />
  );
};

const HeadingTitle = ({ children }: ContainerProps) => {
  return <h1 className="max-w-[39.7rem]">{children}</h1>;
};

export {
  ContentContainer,
  PageContainer,
  SectionContentContainer,
  HeadingContentContainer,
  Text,
  UnorderedList,
  ReadMore,
  HeadingImageContainer,
  HeadingImage,
  HeadingTitle,
};
