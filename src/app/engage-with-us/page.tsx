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
import { FormEvent, useState } from 'react';

type FormField = {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
  component: typeof TextInput | typeof Select | typeof Textarea;
  className?: string;
  wrapperClass?: string;
  defaultValue?: string;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

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
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [emailError, setEmailError] = useState<string>('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const hasFormErrors = () => {
    return Boolean(emailError);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus('loading');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setSubmitStatus('idle');
      return;
    }
    setEmailError('');

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      inquiry: formData.get('inquiry'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    }
  };

  const formFields: FormField[] = [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      className: 'lg:max-w-[2rem]',
      component: TextInput,
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      component: TextInput,
      onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
        if (!validateEmail(e.target.value)) {
          setEmailError('Please enter a valid email address');
        } else {
          setEmailError('');
        }
      },
      error: emailError,
    },
    {
      id: 'organization',
      label: 'Organization',
      type: 'text',
      component: TextInput,
    },
    {
      id: 'inquiry',
      label: 'Type of inquiry',
      component: Select,
      defaultValue: 'general-interest',
      wrapperClass: 'lg:max-w-[85%]',
      children: (
        <option value="general-interest">
          General interest in DIBBs products
        </option>
      ),
    },
    {
      id: 'message',
      label: 'Message',
      component: Textarea,
      className: 'resize-none',
    },
  ];

  const renderFormField = (field: FormField) => {
    const commonProps = {
      id: field.id,
      name: field.id,
      className: field.className,
      disabled: submitStatus === 'success',
    };

    return (
      <div
        key={field.id}
        className={`${field.component === TextInput ? 'lg:max-w-[70%]' : ''} ${field.wrapperClass || ''}`}
      >
        <Label
          htmlFor={field.id}
          className="m-0 self-stretch font-bold leading-relaxed text-blue-cool-70"
        >
          {field.label}
        </Label>

        {field.component === TextInput && (
          <field.component
            {...commonProps}
            onBlur={field.onBlur}
            type={field.type || 'text'}
          />
        )}
        {field.component === Select && (
          <field.component {...commonProps} defaultValue={field.defaultValue}>
            {field.children}
          </field.component>
        )}
        {field.component === Textarea && (
          <field.component {...commonProps}>{field.children}</field.component>
        )}

        {field.error && (
          <span className="mt-1 text-sm text-red-600">{field.error}</span>
        )}
      </div>
    );
  };

  return (
    <div className="lg:pl-5">
      <Form
        onSubmit={handleSubmit}
        className="align-start flex min-w-full flex-col gap-5 lg:min-w-[31.25rem]"
      >
        {formFields.map(renderFormField)}

        <Button
          type="submit"
          disabled={
            submitStatus === 'loading' ||
            hasFormErrors() ||
            submitStatus === 'success'
          }
          className="mt-6 inline-flex h-11 w-fit items-center justify-start gap-2.5 rounded bg-violet-warm-60 px-5 py-3 text-right font-bold text-white hover:bg-violet-warm-50 active:bg-violet-warm-70 disabled:opacity-50"
        >
          {submitStatus === 'loading' ? 'Sending...' : 'Send inquiry'}
        </Button>

        {submitStatus === 'success' && (
          <p className="text-green-600">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600">
            Failed to send message. Please try again.
          </p>
        )}
      </Form>
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
