import { ContentContainer } from '@/app/components/ContentContainer/ContentContainer';
import Hero from '@/app/components/Hero/Hero';
import { basePath } from '@/app/utils/constants';
import Image from 'next/image';

export default function EcrViewer() {
  return (
    <div>
      <Hero
        header="eCR Viewer"
        subheader="An intuitive interface that helps epidemiologists and case investigators make better sense of eCR data, faster."
      />
      <ContentContainer align>
        <div className="grid grid-cols-[1fr_2fr_1fr]">
          <div>Subnav</div>
          <div className="grid grid-cols-1 gap-[3.75rem]">
            <div>
              <h1 className="font-['Source Sans Pro'] text-[40px] font-bold text-[#224a58]">
                Overview
              </h1>
              <p className="font-['Source Sans Pro'] flex flex-col gap-10 text-base font-normal leading-relaxed text-[#224a58]">
                <span>
                  The eCR Viewer is a tool that aims to improve the usability of
                  electronic case reporting (eCR) data by displaying a summary
                  of key data contained in an eCR so that public health staff
                  can quickly find the information they need.
                </span>
                <span>
                  In user research with public health staff who review eCRs and
                  other case data, we've heard that eCR data is often difficult
                  to make sense of — it's like getting someone's entire medical
                  record dropped on your desk. The eCR Viewer aims to make
                  relevant information easier to find by displaying eCR data in
                  a way that's more intuitive.
                </span>
              </p>
            </div>
            <div>
              <h2>The value to you</h2>
              <ul className="font-['Source Sans Pro'] text-base font-semibold leading-relaxed text-[#224a58]">
                <li>
                  Surfaces the most relevant information in a summary at the top
                  of the eCR, so any staff member can quickly find the
                  information they need
                </li>
                <li>
                  Combines information from both the eICR and RR, so
                  epidemiologists reviewing the eCR can understand why it was
                  sent to their jurisdiction
                </li>
                <li>
                  Lives outside your case surveillance system as an API, which
                  reduces storage burden on your overall system while allowing
                  seamless access for epidemiologists who need it
                </li>
                <li>
                  Keeps data formats consistent regardless of which EHR system
                  generated the eCR
                </li>
                <li>Open source and free to use</li>
                <li>
                  Offers flexible hosting, either within your jurisdiction or
                  through a CDC-hosted option
                </li>
              </ul>
            </div>
            <div>
              <h2>Demo</h2>
              <div>
                <Image
                  alt="placeholder video"
                  width={652}
                  height={383}
                  src={`${basePath}/images/placeholder.png`}
                />
                <span className="font-['Source Sans Pro'] w-[646.01px] text-base font-normal leading-relaxed text-[#224a58]">
                  See how the eCR Viewer can improve the way your jurisdiction
                  uses eCR data.
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <h2>How it works</h2>
                <p className="flex flex-col gap-10">
                  <span>
                    Using the eCR Viewer, public health staff can easily find
                    data relevant to a reportable condition.
                  </span>
                  <span>
                    The eCR Viewer surfaces key information in a summary at the
                    top of the eCR document. This eCR Summary divided into three
                    categories: Patient Summary, Encounter Summary, and
                    Condition Summary.
                  </span>
                </p>
                <div className="flex flex-col gap-3">
                  <h3>eCR Summary</h3>
                  <Image
                    alt="eCR Viewer - how it works"
                    width={652}
                    height={383}
                    src={`${basePath}/images/ecr-viewer_how-it-works.gif`}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>Github links</div>
        </div>
      </ContentContainer>
    </div>
  );
}
