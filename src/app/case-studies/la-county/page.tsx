import Link from 'next/link';
import { Link as ExternalLink } from '@trussworks/react-uswds';

export default function LaCountyCaseStudy() {
  return (
    <div className="main ml-auto mr-auto max-w-[75rem] pb-20 pl-[7.5rem] pr-[7.5rem]">
      <div className="content grid max-w-[53rem] grid-cols-1 gap-[3.75rem] pl-[3.75rem] pr-[3.75rem] pt-10">
        <section id="heading">
          <Link
            className="font-['Public Sans'] text-base font-normal leading-relaxed text-[#3a7d95] underline"
            href="/case-studies"
          >
            Return to all case studies
          </Link>
          <h1>
            Creating a modular, cloud-based data processing pipeline for LA
            County
          </h1>
        </section>
        <section id="challenge">
          <div className="flex flex-col gap-3">
            <h2>The challenge</h2>
            <p className="m-0 flex flex-col gap-6 p-0">
              <span>
                Timely access to electronic case reporting (eCR) data is
                critical for public health departments to respond swiftly to
                disease outbreaks, especially during a public health emergency.
                Unfortunately, not all public health jurisdictions can
                effectively manage the flow of incoming eCR data. Due to
                technical limitations with their existing disease surveillance
                system, the Los Angeles County (LAC) Department of Public Health
                faced challenges with processing eCR files, leaving this rich
                source of data largely inaccessible to their disease
                surveillance teams.
              </span>
              <span>
                Because LAC's disease surveillance system couldn't process eCR
                data fields, they set up a separate, patchwork data workflow to
                collect eCR data. As a result, epidemiologists at LAC also had
                to spend a considerable amount of time manually cleaning data
                after it was processed. To efficiently monitor and respond to
                disease outbreaks, LAC also needed to improve the overall
                quality of the data processed through its disease surveillance
                infrastructure. Better, more reliable data reduces the need for
                manual cleaning and makes downstream analysis and case
                investigation less onerous for epidemiologists and other public
                health staff.
              </span>
            </p>
          </div>
        </section>
        <section id="solution">
          <div className="flex flex-col gap-3">
            <h2>The solution</h2>
            <div className="flex flex-col gap-6">
              <p className="m-0 p-0">
                The DIBBs team worked with LAC to develop and deploy a
                cutting-edge, modular data pipeline to automatically process and
                enrich COVID-19 eCR files. This open-source, cloud-based
                pipeline — composed of modular software components called Data
                Integration Building Blocks (DIBBs) — helps significantly reduce
                the time it takes for LAC's disease surveillance teams to
                receive and act upon public health data, while also improving
                the quality of that data. Over the course of the year-long
                pilot, the DIBBs team:
              </p>
              <ul className="font-semibold">
                <li>
                  Conducted discovery research to understand eCR workflows,
                  identify product support needs, and assess the value of
                  processing eCR data for LAC disease surveillance teams
                </li>
                <li>
                  Engaged LAC staff in an iterative software development process
                  with weekly agile ceremonies and regular product
                  demonstrations to continuously refine the pipeline
                </li>
                <li>
                  Performed user acceptance testing with LAC staff to identify
                  and mitigate barriers to adoption for the DIBBs pipeline
                </li>
                <li>
                  Compared the performance of LAC's pre-pilot data processing to
                  data processing after the DIBBs pipeline was deployed to test
                  record linkage performance and measure data quality
                </li>
                <li>
                  Evaluated how the DIBBs pipeline affected the experience of
                  case investigators that monitor and report on Hepatitis A to
                  assess the pipeline's public health impact
                </li>
                <li>
                  Developed a compendium of resources (i.e., Handoff Hub) for
                  LAC staff to use post-pilot that enables them to independently
                  operate and customize the pipeline
                </li>
              </ul>
              <p className="m-0 p-0">
                We are currently commencing pilots with jurisdictions to test
                the eCR Viewer in a production data environment and further
                validate the tool's downstream public health impact. Our aim is
                to scale the eCR Viewer with a wide range of jurisdictions to
                turn eCR into the go-to data source for case ascertainment and
                investigation.
              </p>
            </div>
          </div>
        </section>
        <section id="results">
          <div className="flex flex-col gap-3">
            <h2>The results</h2>
            <p className="m-0 p-0">
              Following the pilot, LAC now has access to an automated feed of
              analysis-ready eCR data with fields relevant to downstream disease
              teams. LAC plans to continue to leverage the DIBBs pipeline
              infrastructure to give additional disease teams access to
              processed eCR data, including the HIV and STD prevention team and
              the Community Outbreak Team (focused on viral respiratory
              pathogens). Through the LAC pilot, the DIBBs team gained insights
              on how to use and adapt our modular, open-source solutions to
              solve data challenges for multiple disease surveillance systems
              across public health jurisdictions.
            </p>
          </div>
        </section>
        <section id="read-more">
          <div className="flex flex-col gap-3">
            <h2>Read more about our work</h2>
            <ExternalLink
              className="font-['Public Sans'] text-base font-bold leading-snug text-[#3a7d95] underline"
              href="https://github.com/CDCgov/phdi/blob/main/publications/LAC%20Pilot%20Executive%20Brief_Final.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              Findings from a Los Angeles County Pilot - Executive Brief
            </ExternalLink>
          </div>
        </section>
      </div>
    </div>
  );
}
