import { RoundedBackground } from '@/app/components/RoundedBackground/RoundedBackground';
import {
  ProcessList,
  ProcessListHeading,
  ProcessListItem,
  Link,
} from '@trussworks/react-uswds';
import classNames from 'classnames';
import './styles.scss';
import Image, { ImageProps } from 'next/image';
import { LinkButton } from '@/app/components/LinkButton/LinkButton';

interface ContainerProps {
  children: React.ReactNode;
}

const SendMailLink = ({ text }: { text: string }) => {
  return (
    <Link
      className="font-bold leading-snug underline-offset-4"
      href="/engage-with-us"
    >
      {text}
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
      <h1 className="font-bold leading-[2.8rem]">{title}</h1>
      <p className="m-0 p-0 text-[1.38rem] font-extralight leading-[2rem] text-blue-cool-70">
        {text}
      </p>
    </div>
  );
};

const SectionHeader = ({ children }: ContainerProps) => {
  return <h2>{children}</h2>;
};

const SectionSubheader = ({ children }: ContainerProps) => {
  return <h3>{children}</h3>;
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
    <div className="bg-[#dae9ee] pb-5 pt-7 xl:max-w-[16.25rem]">
      <div className="flex flex-col gap-1 pl-7 pt-12">
        <Text>Current version: {version}</Text>
        <div className="py-3">
          <hr className="h-[.0625rem] border-none bg-[#a9aeb1]" />
        </div>
        <Link
          href={githubHref}
          className="font-semibold leading-relaxed text-blue-cool-80 underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub Repository
        </Link>
      </div>
    </div>
  );
};

const AccordionItemContent = ({ children }: ContainerProps) => {
  return (
    <span className="font-normal leading-snug text-blue-cool-70">
      {children}
    </span>
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
  return (
    <div className="pt-4 lg:flex lg:justify-end lg:pt-[3.75rem]">
      <div>{children}</div>
    </div>
  );
};

const GridMiddle = ({ children }: ContainerProps) => {
  return (
    <div className="grid grid-cols-1 gap-[3.75rem] px-2 pt-2 md:px-[3.75rem] md:pt-[3.75rem]">
      {children}
    </div>
  );
};

const GridRight = ({ children }: ContainerProps) => {
  return <div>{children}</div>;
};

const HaveAQuestionSection = () => {
  return (
    <div className="flex flex-col gap-3 pt-5">
      <h2>Have a question that isn't answered above?</h2>
      <LinkButton
        className="place-self-start"
        variant="primary"
        href="/engage-with-us"
      >
        Get in touch with our team
      </LinkButton>
    </div>
  );
};

interface GettingStartedProps {
  systemName: string;
}
const GettingStartedProcessList = ({ systemName }: GettingStartedProps) => {
  const steps = [
    {
      heading: 'Gather your team',
      content: `You'll need someone at your jurisdiction to act as the point of
        contact with the DIBBs team as well as a technical point of contact
        who is familiar with your data environment. Sometimes one person
        fills both of those roles.`,
    },
    {
      heading: 'Attend kickoff call',
      content: `During this kickoff, we'll discuss how ${systemName} works, the
        technical requirements, and your data needs.`,
    },
    {
      heading: 'Get set up',
      content: `Work with the DIBBs team to test the ${systemName} with your staff
        and to get the tool up and running in your data environment.`,
    },
    {
      heading: 'Provide ongoing feedback',
      content: `Tell us what's going well and what could be better so we can improve
        your experience with the ${systemName}.`,
    },
  ];

  return (
    <RoundedBackground className="p-10">
      <ProcessList className="process-list-item">
        {steps.map(({ heading, content }) => (
          <ProcessListItem key={heading} className="last:pb-0">
            <ProcessListHeading type="h3">{heading}</ProcessListHeading>
            <p>{content}</p>
          </ProcessListItem>
        ))}
      </ProcessList>
    </RoundedBackground>
  );
};

const GettingStarted = ({ systemName }: GettingStartedProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <SectionHeader>Getting started</SectionHeader>
        <div className="flex flex-col gap-6">
          <Text>
            Before you can use the {systemName}, you'll need to set it up and
            get your staff comfortable with how the tool can help improve their
            data workflows.
          </Text>
          <div>
            <SectionSubheader>
              What's expected from a pilot partner:
            </SectionSubheader>
            <ul className="text-base font-semibold leading-relaxed text-blue-cool-70">
              <li className="min-w-full">
                Work with the DIBBs team to set expectations and establish a
                regular meeting cadence
              </li>
              <li className="min-w-full">
                Deploy the {systemName} in your production environment
              </li>
              <li className="min-w-full">
                Provide feedback on an ongoing basis to ensure the {systemName}{' '}
                is working properly
              </li>
            </ul>
          </div>
        </div>
      </div>
      <GettingStartedProcessList systemName={systemName} />
    </>
  );
};

interface VideoProps {
  src: string;
  title: string;
  description: string;
}
const Video = ({ src, title, description }: VideoProps) => {
  return (
    <div className="flex flex-col gap-3">
      <iframe
        className="h-[31.25rem] w-full border-none"
        src={src}
        title={title}
        aria-label={description}
        allowFullScreen
      ></iframe>
      <Text className="italic">{description}</Text>
    </div>
  );
};

interface FigureProps {
  caption: string;
  alt: ImageProps['alt'];
  src: ImageProps['src'];
}

const Figure = ({ caption, alt, src }: FigureProps) => {
  return (
    <figure className="flex flex-col gap-3">
      <ProductImage src={src} alt={alt} />
      <figcaption className="font-normal italic leading-snug text-blue-cool-70">
        {caption}
      </figcaption>
    </figure>
  );
};

type ProductImageProps = Pick<ImageProps, 'src' | 'alt'>;
const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="h-full w-full rounded-lg shadow"
      width={652}
      height={383}
    />
  );
};

interface TextProps extends ContainerProps {
  className?: string;
}
const Text = ({ children, className }: TextProps) => {
  return (
    <p
      className={classNames(
        'm-0 p-0 leading-snug text-blue-cool-70',
        className,
      )}
    >
      {children}
    </p>
  );
};

const ValueList = ({ children }: ContainerProps) => {
  return (
    <RoundedBackground className="p-10">
      <SubsectionContainer>
        <SectionSubheader>The value to you:</SectionSubheader>
        <ul className="flex flex-col gap-3 text-base font-semibold leading-relaxed text-blue-cool-70">
          {children}
        </ul>
      </SubsectionContainer>
    </RoundedBackground>
  );
};

const ContentContainer = ({ children }: ContainerProps) => {
  return (
    <div className="ml-auto mr-auto flex max-w-[87.5rem] flex-col px-5 lg:pb-[5rem] xl:px-[3.5rem]">
      {children}
    </div>
  );
};

export {
  SendMailLink,
  TitleSection,
  SectionHeader,
  SectionSubheader,
  GithubNav,
  AccordionItemContent,
  GridContainer,
  GridLeft,
  GridMiddle,
  GridRight,
  HaveAQuestionSection,
  GettingStarted,
  GettingStartedProcessList,
  Video,
  SectionContentContainer,
  ContentContainer,
  SubsectionContainer,
  Figure,
  ProductImage,
  Text,
  ValueList,
};
