import { GridContainer } from '@trussworks/react-uswds';
import Link from 'next/link';

export default function InvitationCta() {
  return (
    <section className="usa-graphic-list usa-section usa-section--light-blue">
      <GridContainer>
        <div className="flex flex-col items-center justify-center gap-5 self-stretch">
          <div className="font-['Source Sans Pro'] self-stretch text-center text-[32px] font-bold text-[#224a58]">
            Interested in getting started with DIBBs?
          </div>
          <div className="font-['Source Sans Pro'] self-stretch text-center text-base font-normal leading-relaxed text-[#224a58]">
            Contact our team to learn more about how our products can help
            improve your data workflows
          </div>
          <Link
            href="/engage-with-us"
            className="usa-btn inline-flex items-center justify-start gap-2.5 rounded border-2 border-[#224a58] bg-white px-5 py-3"
          >
            <span className="text-center text-base font-bold leading-none text-[#224a58]">
              Engage with us
            </span>
          </Link>
        </div>
      </GridContainer>
    </section>
  );
}
