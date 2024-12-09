'use client';
import {
  Button,
  ComboBox,
  Form,
  Label,
  Textarea,
  TextInput,
} from '@trussworks/react-uswds';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { useHeroInit } from '../hooks/useHeroInit';
import classNames from 'classnames';

export default function EngageWithUs() {
  useHeroInit({
    header: `Get started with DIBBs products`,
    subheader: `Learn how your jurisdiction can start working with the DIBBs team.`,
    heroClass: 'engage-with-us-hero',
  });

  return (
    <ContentContainer>
      <div className="flex flex-col gap-10">
        <Alert />
        <div className="grid grid-cols-1 justify-items-center gap-[3.75rem] lg:grid-cols-2 lg:justify-items-start">
          <div>
            <Left />
          </div>
          <div>
            <Right />
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

function Left() {
  return (
    <div className="lg:pl-5">
      <h2>Contact us</h2>
      <p className="text-base font-normal leading-relaxed text-[#224a58]">
        Fill out the form below to get in touch with us
      </p>
      <Form
        onSubmit={() => {}}
        className="align-start flex flex-col gap-2 lg:min-w-[31.25rem]"
      >
        <div className="flex flex-col gap-5 lg:max-w-[70%]">
          <div>
            <Label
              htmlFor="name"
              className="m-0 self-stretch text-base font-bold leading-relaxed text-[#224a58]"
            >
              Name
            </Label>
            <TextInput
              id="name"
              name="name"
              type="text"
              className="lg:max-w-[2rem]"
            />
          </div>
          <div>
            <Label
              htmlFor="email"
              className="m-0 self-stretch text-base font-bold leading-relaxed text-[#224a58]"
            >
              Email Address
            </Label>
            <TextInput id="email" name="email" type="email" />
          </div>
          <div>
            <Label
              htmlFor="organization"
              className="m-0 self-stretch text-base font-bold leading-relaxed text-[#224a58]"
            >
              Organization
            </Label>
            <TextInput id="organization" name="organization" type="text" />
          </div>
        </div>
        <div className="lg:max-w-[85%]">
          <Label
            htmlFor="inquiry"
            className="m-0 self-stretch text-base font-bold leading-relaxed text-[#224a58]"
          >
            Type of inquiry
          </Label>
          <ComboBox
            id="inquiry"
            name="inquiry"
            options={[
              {
                label: 'General interest in DIBBs products',
                value: 'general-interest',
              },
            ]}
            defaultValue="general-interest"
            onChange={() => {}}
          />
        </div>

        <Label
          htmlFor="message"
          className="self-stretch text-base font-bold leading-relaxed text-[#224a58]"
        >
          Message
        </Label>
        <Textarea id="message" name="message" className="resize-none" />
      </Form>
      <Button
        type="submit"
        className="bg-violet-warm-60 hover:bg-violet-warm-50 active:bg-violet-warm-70 mt-6 inline-flex h-11 items-center justify-start gap-2.5 rounded px-5 py-3 text-right text-base font-bold text-white"
      >
        Send inquiry
      </Button>
    </div>
  );
}

interface RoundedBackgroundProps extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

const RoundedBackground = ({
  children,
  className,
  ...props
}: RoundedBackgroundProps) => {
  return (
    <div
      {...props}
      className={classNames(
        'rounded-br-[2.5rem] rounded-tl-[2.5rem] border-2 border-[#82b4c9] bg-white/50',
        className,
      )}
    >
      {children}
    </div>
  );
};

function Right() {
  return (
    <RoundedBackground className="p-10">
      <div className="ml-2 flex flex-col gap-3 xl:min-w-[35.25rem]">
        <p className="font-['Public Sans'] m-0 p-0 text-base font-light uppercase leading-normal text-[#2e6276]">
          Customer Testimonial
        </p>
        <p className="font-['Public Sans'] m-0 max-w-[28rem] p-0 text-[1rem] font-bold italic leading-[2rem] text-[#224a58] lg:text-[1.38rem]">
          "Our epidemiologists waste 80% of their time cleaning data and can't
          do useful analysis. The end goal of DIBBs infrastructure is to free up
          that 80% of their time to do actual public health work."
        </p>
        <p className="m-0 text-nowrap p-0 text-[1rem] font-light leading-[2rem] text-[#224a58] lg:text-base xl:min-w-full">
          - Public Health Official, Virginia Department of Health
        </p>
      </div>
    </RoundedBackground>
  );
}

const Alert = () => {
  return (
    <div className="usa-alert usa-alert--info usa-alert--no-icon border-l-[#00BDE3] lg:max-w-[80%]">
      <div className="usa-alert__body !bg-[#2E6276]">
        <p className="usa-alert__text font-['Public Sans'] text-[1.38rem] font-bold text-[#e7f2f5]">
          All consultations with the DIBBs team are 100% free!
        </p>
        <p className="usa-alert__text font-['Public Sans'] text-base font-normal leading-snug text-[#e7f2f5]">
          There's no cost to use our products beyond costs to host within your
          jurisdiction should you choose to do so.
        </p>
      </div>
    </div>
  );
};
