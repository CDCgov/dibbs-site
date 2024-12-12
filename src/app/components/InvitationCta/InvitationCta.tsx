import { GridContainer } from '@trussworks/react-uswds';
import { LinkButton } from '../LinkButton/LinkButton';
import { Heading, Paragraph } from '../../_ui';
import classNames from 'classnames';
import styles from './InvitationCta.module.scss';

export const InvitationCta = () => {
  const content = {
    title: 'Interested in getting started with DIBBs?',
    description:
      'Contact our team to learn more about how our products can help improve your data workflows',
    ctaText: 'Contact us',
    ctaHref: '/engage-with-us',
  };

  return (
    <section
      className={classNames(
        styles.invitationCtaSection,
        'hide-footer-bar usa-section bg-transparent',
      )}
    >
      <GridContainer>
        <div className="flex flex-col items-center justify-center gap-6 self-stretch">
          <div className="flex flex-col gap-1">
            <Heading className="self-stretch text-center">
              {content.title}
            </Heading>
            <Paragraph className="m-0 self-stretch p-0 text-center font-extralight">
              {content.description}
            </Paragraph>
          </div>
          <LinkButton href={content.ctaHref} variant="transparent">
            {content.ctaText}
          </LinkButton>
        </div>
      </GridContainer>
    </section>
  );
};
