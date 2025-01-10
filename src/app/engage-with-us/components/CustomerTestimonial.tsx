'use client';
import { RoundedBackground } from '../../components/RoundedBackground/RoundedBackground';

export const CustomerTestimonial = () => {
  return (
    <RoundedBackground className="p-6 xl:p-10">
      <div className="ml-2 flex flex-col gap-3">
        <p className="m-0 p-0 font-light uppercase leading-normal text-blue-cool-60">
          Customer Testimonial
        </p>
        <p className="m-0 max-w-[28rem] p-0 text-[1rem] font-bold italic leading-[2rem] text-blue-cool-70 xl:text-[1.38rem]">
          “Our epidemiologists waste 80% of their time cleaning data and can't
          do useful analysis. The end goal of DIBBs infrastructure is to free up
          that 80% of their time to do actual public health work.”
        </p>
        <p className="m-0 p-0 text-[1rem] font-light italic leading-normal text-blue-cool-70 lg:text-nowrap xl:min-w-full">
          - Public Health Official, Virginia Department of Health
        </p>
      </div>
    </RoundedBackground>
  );
};
