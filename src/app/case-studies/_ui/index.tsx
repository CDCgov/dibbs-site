import Link, { LinkProps } from 'next/link';
import { Link as ExternalLink } from '@trussworks/react-uswds';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ArrowBackIcon } from './ArrowBackIcon';
import { InvitationCta } from '@/app/components/InvitationCta/InvitationCta';
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
      <div className="main ml-auto mr-auto flex items-center justify-center pb-20 lg:pl-[7.5rem] lg:pr-[7.5rem]">
        {children}
      </div>
      <InvitationCta />
    </>
  );
};

const ContentContainer = ({ children }: ContainerProps) => {
  return (
    <div className="content grid max-w-[53rem] grid-cols-1 gap-[3.75rem] pl-[3.75rem] pr-[3.75rem] pt-10">
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

const HeadingImageContainer = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col gap-5">
      <>
        <ReturnToCaseStudiesLink />
        <div className="h-[18.75rem] w-full overflow-hidden">{children}</div>
      </>
    </div>
  );
};

const ReturnToCaseStudiesLink = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <ArrowBackIcon />
      <Link
        className="font-['Public Sans'] text-base font-normal leading-relaxed text-[#3a7d95] underline"
        href="/case-studies"
      >
        Return to all case studies
      </Link>
    </div>
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
        className="font-['Public Sans'] text-base font-bold leading-snug text-[#3a7d95] underline"
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
      className="h-full w-full object-cover object-bottom"
      {...props}
    />
  );
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
};
