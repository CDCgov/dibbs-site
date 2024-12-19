'use client';
import {
  Button,
  Form,
  Label,
  Select,
  Textarea,
  TextInput,
} from '@trussworks/react-uswds';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { useHeroInit } from '../hooks/useHeroInit';
import { RoundedBackground } from '../components/RoundedBackground/RoundedBackground';
import './styles.scss';

const EngageWithUs = () => {
  useHeroInit({
    header: `Get started with DIBBs products`,
    subheader: `Learn how your jurisdiction can start working with the DIBBs team.`,
    heroClass: 'engage-with-us-hero',
  });

  return (
    <section>
      <ContentContainer classes="sm:pt-10">
        <div className="flex flex-col gap-10">
          <ConsultationAlert />
          <div className="flex flex-col gap-3 pb-5 lg:pl-5">
            <h2>Contact us</h2>
            <p>Fill out the form below to get in touch with us.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-start gap-[3.75rem] lg:grid-cols-2">
          <div className="min-w-full">
            <ContactForm />
          </div>
          <div className="justify-self-center lg:justify-self-start">
            <CustomerTestimonial />
          </div>
        </div>
      </ContentContainer>
    </section>
  );
};

const ContactForm = () => {
  return (
    <div className="lg:pl-5">
      <Form
        onSubmit={() => {}}
        className="align-start flex min-w-full flex-col gap-5 lg:min-w-[31.25rem]"
      >
        <div className="flex flex-col gap-5 lg:max-w-[70%]">
          <div>
            <Label
              htmlFor="name"
              className="m-0 self-stretch font-bold leading-relaxed text-blue-cool-70"
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
              className="m-0 self-stretch font-bold leading-relaxed text-blue-cool-70"
            >
              Email Address
            </Label>
            <TextInput id="email" name="email" type="email" />
          </div>
          <div>
            <Label
              htmlFor="organization"
              className="m-0 self-stretch font-bold leading-relaxed text-blue-cool-70"
            >
              Organization
            </Label>
            <TextInput id="organization" name="organization" type="text" />
          </div>
        </div>
        <div className="lg:max-w-[85%]">
          <Label
            htmlFor="inquiry"
            className="m-0 self-stretch font-bold leading-relaxed text-blue-cool-70"
          >
            Type of inquiry
          </Label>
          <Select id="inquiry" name="inquiry" defaultValue="general-interest">
            <option value="general-interest">
              General interest in DIBBs products
            </option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="message"
            className="m-0 self-stretch font-bold leading-relaxed text-blue-cool-70"
          >
            Message
          </Label>
          <Textarea id="message" name="message" className="resize-none" />
        </div>
      </Form>
      <Button
        type="submit"
        className="mt-6 inline-flex h-11 items-center justify-start gap-2.5 rounded bg-violet-warm-60 px-5 py-3 text-right font-bold text-white hover:bg-violet-warm-50 active:bg-violet-warm-70"
      >
        Send inquiry
      </Button>
    </div>
  );
};

const CustomerTestimonial = () => {
  return (
    <RoundedBackground className="p-6 xl:p-10">
      <div className="ml-2 flex flex-col gap-3">
        <p className="font-['Public Sans'] m-0 p-0 font-light uppercase leading-normal text-blue-cool-60">
          Customer Testimonial
        </p>
        <p className="font-['Public Sans'] m-0 max-w-[28rem] p-0 text-[1rem] font-bold leading-[2rem] text-blue-cool-70 xl:text-[1.38rem]">
          “Our epidemiologists waste 80% of their time cleaning data and can't
          do useful analysis. The end goal of DIBBs infrastructure is to free up
          that 80% of their time to do actual public health work.”
        </p>
        <p className="m-0 p-0 text-[1rem] font-light leading-normal text-blue-cool-70 lg:text-nowrap xl:min-w-full">
          - Public Health Official, Virginia Department of Health
        </p>
      </div>
    </RoundedBackground>
  );
};

const ConsultationAlert = () => {
  return (
    <div className="usa-alert usa-alert--info usa-alert--no-icon border-l-[#00BDE3] lg:max-w-[80%]">
      <div className="usa-alert__body !bg-blue-cool-60">
        <p className="usa-alert__text font-['Public Sans'] text-[1.38rem] font-bold text-blue-cool-5">
          All consultations with the DIBBs team are 100% free!
        </p>
        <p className="usa-alert__text text-blue-cool-5">
          There's no cost to use our products beyond costs to host within your
          jurisdiction should you choose to do so.
        </p>
      </div>
    </div>
  );
};

export default EngageWithUs;
