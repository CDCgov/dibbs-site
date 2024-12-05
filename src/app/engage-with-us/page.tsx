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

export default function EngageWithUs() {
  useHeroInit({
    header: `Get started with DIBBs products`,
    subheader: `Learn how your jurisdiction can start working with the DIBBs team.`,
    heroClass: 'engage-with-us-hero',
  });

  return (
    <div>
      <ContentContainer>
        <div className="grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2 lg:justify-items-start">
          <div>
            <Left />
          </div>
          <div>
            <Right />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}

function Left() {
  return (
    <>
      <h2>Contact us</h2>
      <p className="text-base font-normal leading-relaxed text-[#224a58]">
        Fill out the form below to get in touch with us
      </p>
      <Form
        onSubmit={() => {}}
        className="align-start flex flex-col gap-y-2 lg:min-w-[31.25rem]"
      >
        <div className="lg:max-w-[70%]">
          <Label
            htmlFor="name"
            className="self-stretch text-base font-bold leading-relaxed text-[#224a58]"
          >
            Name
          </Label>
          <TextInput
            id="name"
            name="name"
            type="text"
            className="lg:max-w-[2rem]"
          />
          <Label
            htmlFor="email"
            className="self-stretch text-base font-bold leading-relaxed text-[#224a58]"
          >
            Email Address
          </Label>
          <TextInput id="email" name="email" type="email" />
          <Label
            htmlFor="organization"
            className="self-stretch text-base font-bold leading-relaxed text-[#224a58]"
          >
            Organization
          </Label>
          <TextInput id="organization" name="organization" type="text" />
          <Label
            htmlFor="inquiry"
            className="self-stretch text-base font-bold leading-relaxed text-[#224a58]"
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
    </>
  );
}

function Right() {
  return (
    <>
      <div id="content" className="flex flex-col gap-10 pt-4">
        <div className="border border-dashed bg-white p-4 text-center lg:p-[1.75rem]">
          <p className="text-center text-[1.2rem] font-bold leading-[2rem] text-black xl:text-[1.40rem]">
            All consultations with the DIBBs team are 100% free. There's no cost
            to use our products beyond costs to host within your jurisdiction
            should you choose to do so.
          </p>
        </div>
        <div>
          <div className="ml-2 flex flex-col gap-4 xl:min-w-[35.25rem]">
            <p className="m-0 p-0 text-[1rem] font-bold italic leading-[2rem] text-[#224a58] xl:m-4 xl:text-[1.38rem]">
              "Our epidemiologists waste 80% of their time cleaning data and
              can't do useful analysis. The end goal of DIBBs infrastructure is
              to free up that 80% of their time to do actual public health
              work."
            </p>
            <p className="m-0 text-nowrap p-0 text-[1rem] font-light leading-[2rem] text-[#224a58] xl:m-4 xl:min-w-full xl:text-[1.38rem]">
              - Public Health Official, Virginia Department of Health
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
