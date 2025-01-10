'use client';

export const ConsultationAlert = () => {
  return (
    <div className="usa-alert usa-alert--info usa-alert--no-icon border-l-[#00BDE3] lg:max-w-[80%]">
      <div className="usa-alert__body !bg-blue-cool-60">
        <p className="usa-alert__text text-[1.38rem] font-bold text-blue-cool-5">
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
