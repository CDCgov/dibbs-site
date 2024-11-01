'use client';
import {
  Button,
  ComboBox,
  Form,
  Grid,
  Label,
  Textarea,
  TextInput,
} from '@trussworks/react-uswds';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import Hero from '../components/Hero/Hero';

export default function EngageWithUs() {
  return (
    <div>
      <Hero
        header="Get started with DIBBs products"
        subheader="Learn how your jurisdiction can start working with the DIBBs team."
      />
      <ContentContainer>
        <Grid
          row
          gap="lg"
          className="px-10"
          tablet={{
            col: true,
          }}
        >
          <Grid>
            <Left />
          </Grid>
          <Grid>
            <Right />
          </Grid>
        </Grid>
      </ContentContainer>
    </div>
  );
}

function Left() {
  return (
    <>
      <h2>Contact Us</h2>
      <p>Fill out the form below to get in touch with us</p>
      <Form
        onSubmit={() => {}}
        className="align-start flex min-w-[500px] flex-col gap-y-2"
      >
        <Label
          htmlFor="name"
          className="font-['Source Sans Pro'] self-stretch text-base font-bold leading-relaxed text-[#224a58]"
        >
          Name
        </Label>
        <TextInput id="name" name="name" type="text" />
        <Label
          htmlFor="email"
          className="font-['Source Sans Pro'] self-stretch text-base font-bold leading-relaxed text-[#224a58]"
        >
          Email Address
        </Label>
        <TextInput id="email" name="email" type="email" />
        <Label
          htmlFor="organization"
          className="font-['Source Sans Pro'] self-stretch text-base font-bold leading-relaxed text-[#224a58]"
        >
          Organization
        </Label>
        <TextInput id="organization" name="organization" type="text" />
        <Label
          htmlFor="inquiry"
          className="font-['Source Sans Pro'] self-stretch text-base font-bold leading-relaxed text-[#224a58]"
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
        <Label
          htmlFor="message"
          className="font-['Source Sans Pro'] self-stretch text-base font-bold leading-relaxed text-[#224a58]"
        >
          Message
        </Label>
        <Textarea id="message" name="message" className="resize-none" />
      </Form>
      <Button
        type="submit"
        className="font-['Source Sans Pro'] mt-6 inline-flex h-11 items-center justify-start gap-2.5 rounded bg-[#224a58] px-5 py-3 text-right text-base font-bold text-white"
      >
        Send inquiry
      </Button>
    </>
  );
}

function Right() {
  return (
    <>
      <div id="content" className="flex max-w-[524px] flex-col gap-10 pt-4">
        <div className="border border-dashed bg-white p-2 text-center">
          <p className="font-['Source Sans Pro'] text-center text-[22px] font-bold leading-[33px] text-black">
            All consultations with the DIBBs team are 100% free. There's no cost
            to use our products beyond costs to host within your jurisdiction
            should you choose to do so.
          </p>
        </div>
        <div>
          <div className="w-[500px]">
            <p className="font-['Source Sans Pro'] text-[22px] font-bold leading-[33px] text-[#224a58]">
              "Our epidemiologists waste 80% of their time cleaning data and
              can't do useful analysis. The end goal of DIBBs infrastructure is
              to free up that 80% of their time to do actual public health
              work."
            </p>
            <p className="font-['Source Sans Pro'] text-[22px] font-light leading-[33px] text-[#224a58]">
              - Public Health Official, Virginia Department of Health
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
