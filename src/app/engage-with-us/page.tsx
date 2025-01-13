'use client';
import { HeroInitializer } from './components/HeroInitializer';
import { CustomerTestimonial } from './components/CustomerTestimonial';
import './styles.scss';
import { ContactForm } from './components/ContactForm';
import { ConsultationAlert } from './components/ConsultationAlert';
const EngageWithUs = () => {
  return (
    <section>
      <HeroInitializer />
      <div className="ml-auto mr-auto flex max-w-[87.5rem] flex-col px-2 pb-[5rem] pt-[2.5rem] xl:px-[10rem]">
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
      </div>
    </section>
  );
};

export default EngageWithUs;
