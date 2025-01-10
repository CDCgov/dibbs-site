'use client';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Button,
  Form,
  Label,
  Select,
  Textarea,
  TextInput,
} from '@trussworks/react-uswds';
import classNames from 'classnames';

type FormData = {
  name: string;
  email: string;
  organization: string;
  inquiry: string;
  message: string;
};

export const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<FormData>({
    mode: 'onBlur',
  });
  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send message');

      // Use a single state update
      setSubmitStatus('success');
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error sending message:', error);
      }
      setSubmitStatus('error');
    }
  };

  return (
    <div className="lg:pl-5">
      {submitStatus === 'success' ? (
        <SuccessMessage />
      ) : (
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="align-start flex min-w-full flex-col gap-5 lg:min-w-[31.25rem]"
        >
          {submitStatus === 'error' && <ErrorMessage />}

          <div className="lg:max-w-[70%]">
            <Label
              htmlFor="name"
              className="m-0 self-stretch font-bold leading-relaxed text-blue-cool-70"
            >
              Name
            </Label>
            <TextInput id="name" type="text" {...register('name')} />
          </div>

          <div className="lg:max-w-[70%]">
            <Label
              htmlFor="email"
              className={classNames(
                'm-0 self-stretch font-bold leading-relaxed',
                {
                  '!text-error-dark': errors.email,
                  'text-blue-cool-70': !errors.email,
                },
              )}
            >
              Email Address<span className="!text-error-dark ml-1">*</span>
            </Label>
            <TextInput
              id="email"
              type="text"
              {...register('email', {
                required: 'This field is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address',
                },
              })}
              className={errors.email ? '!border-error-dark' : ''}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <span className="!text-error-dark mt-1 text-sm" role="alert">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="lg:max-w-[70%]">
            <Label
              htmlFor="organization"
              className="m-0 self-stretch font-bold leading-relaxed text-blue-cool-70"
            >
              Organization
            </Label>
            <TextInput
              id="organization"
              type="text"
              {...register('organization')}
            />
          </div>

          <div className="lg:max-w-[84%]">
            <Label
              htmlFor="inquiry"
              className="m-0 self-stretch font-bold leading-relaxed text-blue-cool-70"
            >
              Type of inquiry
            </Label>
            <Controller
              name="inquiry"
              control={control}
              defaultValue="general-interest"
              render={({ field: { onChange, value, name } }) => (
                <Select
                  onChange={onChange}
                  value={value}
                  name={name}
                  id="inquiry"
                >
                  <option value="general-interest">
                    General interest in DIBBs products
                  </option>
                </Select>
              )}
            />
          </div>

          <div className="lg:max-w-[100%]">
            <Label
              htmlFor="message"
              className={classNames(
                'm-0 self-stretch font-bold leading-relaxed',
                {
                  '!text-error-dark': errors.message,
                  'text-blue-cool-70': !errors.message,
                },
              )}
            >
              Message
            </Label>
            <Controller
              name="message"
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <Textarea
                  onChange={onChange}
                  value={value}
                  name={name}
                  id="message"
                  className="resize-none"
                />
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex h-11 w-fit items-center justify-start gap-2.5 rounded bg-violet-warm-60 px-5 py-3 text-right font-bold text-white hover:bg-violet-warm-50 active:bg-violet-warm-70 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send inquiry'}
          </Button>
        </Form>
      )}
    </div>
  );
};

const SuccessMessage = () => (
  <div className="usa-alert usa-alert--success border-success border-2 border-solid">
    <div className="usa-alert__body">
      <h4 className="usa-alert__heading text-success">
        Message successfully sent
      </h4>
      <p className="usa-alert__text text-success">
        Our team will be in touch with you soon!
      </p>
    </div>
  </div>
);

const ErrorMessage = () => (
  <div className="usa-alert usa-alert--error border-error border-2 border-solid">
    <div className="usa-alert__body">
      <h4 className="usa-alert__heading text-error">
        We couldn't submit your inquiry
      </h4>
      <p className="usa-alert__text text-error">
        An unexpected error has occurred. Please try again or email{' '}
        <a
          href="mailto:dibbs@cdc.gov"
          className="!text-error font-bold underline"
        >
          dibbs@cdc.gov
        </a>{' '}
        if the problem persists.
      </p>
    </div>
  </div>
);
