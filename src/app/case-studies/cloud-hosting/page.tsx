import {
  PageContainer,
  ContentContainer,
  ReturnToCaseStudiesLink,
  SectionContentContainer,
  Text,
  UnorderedList,
} from '../_ui';

const CloudHosting = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <section id="heading">
          <ReturnToCaseStudiesLink />
          <h1>
            Improving public health data infrastructure through flexible, modern
            approaches to cloud services
          </h1>
        </section>
        <section id="challenge">
          <SectionContentContainer>
            <h2>The challenge</h2>
            <Text>
              <span>
                To efficiently process ever-growing amounts of data, public
                health jurisdictions need to integrate modern digital services —
                like cloud hosting — into their data environment. With cloud
                hosting, jurisdictions can more flexibly acquire the computing
                infrastructure they need to modernize aging data systems or add
                new data management capabilities as needs evolve. It can also
                help them scale their infrastructure to handle the high volumes
                and intermittent flow of public health data, especially during a
                public health crisis.
              </span>
              <span>
                While many jurisdictions recognize the need for transitioning to
                a robust and secure cloud environment, they often face obstacles
                to adoption. For example, they may lack the internal technical
                capacity to successfully migrate their data infrastructure to
                the cloud. Not only that, hosting cloud infrastructure isn't
                free. Neither is the cost of maintaining these systems.
                Maintenance requires dedicated IT personnel and consistent
                funding, which aren't always available. As a result, public
                health jurisdictions that want to leverage cloud hosting to
                scale and upgrade their data systems with modern software
                solutions are often stuck without the means to do so.
              </span>
            </Text>
          </SectionContentContainer>
        </section>
        <section id="solution">
          <SectionContentContainer>
            <h2>The solution</h2>
            <Text>
              <span>
                The DIBBs team is working to enable public health jurisdictions
                with modern cloud hosting infrastructure through CDC's centrally
                hosted Azure cloud environment. By leveraging this CDC-hosted
                cloud environment, jurisdictions can access the DIBBs portfolio
                of products to modernize their data systems without the cost and
                maintenance burdens of having to host their own cloud
                infrastructure locally. CDC's cloud environment follows the same
                security and privacy policies as other widely used, externally
                facing CDC applications like SimpleReport and ReportStream.
                Onboarding, updates, and scaling are quick and free.
              </span>
              <span>
                While hosting with CDC's cloud infrastructure offers a range of
                benefits (e.g., lower costs, fewer maintenance burdens), some
                jurisdictions face obstacles with regulatory compliance and data
                security. These jurisdictions may prefer a hybrid approach,
                leveraging aspects of a centrally hosted cloud environment while
                maintaining other parts of their data infrastructure in a
                self-hosted environment. With a hybrid approach, jurisdictions
                can choose to manage how their data is fed to the
                centrally-hosted environment for processing — without CDC
                hosting or retaining the data. To enable these more flexible,
                hybrid options for hosting DIBBs infrastructure, we've leveraged
                Octopus Deploy, an industry-renowned deployment tool, that
                allows us to treat each jurisdiction with the individuality it
                needs. For example, our software can go directly to
                jurisdictions with the proper permission and legal agreements,
                without the need for their IT departments to manually install
                updates.
              </span>
              <span>
                For jurisdictions who would like full control over their
                infrastructure and to host DIBBs services directly, we've also
                created a series of Terraform templates. These templates, which
                are available in our open-source repository, allow DevOps
                personnel at a jurisdiction to rapidly assemble a fresh cloud
                infrastructure from prewritten modules. We've also provided
                searchable documentation to make the process even easier. By
                meeting jurisdictions where they're at from a compliance or data
                security standpoint, our DIBBs hosting options move them a step
                closer to adopting cloud technology (either in their own cloud
                environment or in the centrally hosted CDC environment).
                Ultimately, by providing flexible and accessible options for
                cloud hosting, we hope to enable resource-constrained
                jurisdictions with the tools to build modern, scalable disease
                surveillance infrastructure that can be used for both daily and
                emergent public health action.
              </span>
            </Text>
          </SectionContentContainer>
        </section>
        <section id="results">
          <SectionContentContainer>
            <h2>The results</h2>
            <UnorderedList>
              <li>
                Successfully deployed DIBBs infrastructure to a centrally hosted
                CDC cloud environment
              </li>
              <li>
                Working with the CDC to make centrally hosted DIBBs products
                available to interested pilot partners
              </li>
              <li>
                Onboarding four potential public health jurisdictions (Alabama,
                Idaho, Dallas, and Chicago) to pilot centrally hosted DIBBs
                infrastructure
              </li>
              <li>
                Rolled out a proof-of-concept deployment engine that would
                facilitate updates and improvements to locally hosted DIBBs
                software
              </li>
            </UnorderedList>
          </SectionContentContainer>
        </section>
      </ContentContainer>
    </PageContainer>
  );
};

export default CloudHosting;
