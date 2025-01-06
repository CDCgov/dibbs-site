'use client';
import { HeroInitializer } from './components/HeroInitializer';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { CustomerTestimonial } from './components/CustomerTestimonial';
import './styles.scss';
import { ContactForm } from './components/ContactForm';
import { ConsultationAlert } from './components/ConsultationAlert';
const EngageWithUs = () => {
  return (
    <section>
      <HeroInitializer />
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

export default EngageWithUs;
