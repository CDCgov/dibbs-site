import { GridContainer } from '@trussworks/react-uswds';
import { LinkButton } from '../LinkButton/LinkButton';
import { Heading, Paragraph } from '../../_ui';
import classNames from 'classnames';
import styles from './InvitationCta.module.scss';

export const InvitationCta = () => {
  const content = {
    title: 'Ready to get started?', // or whatever the default title is
    description:
      'Learn more about how DIBBs can help your jurisdiction make the most of its data.', // default description
    ctaText: 'Contact us', // default CTA text
    ctaHref: '/engage-with-us', // default href
  };

  return (
    <section
      className={classNames(
        styles.invitationCtaSection,
        'hide-footer-bar usa-section',
      )}
    >
      <GridContainer>
        <div className="flex flex-col items-center justify-center gap-5 self-stretch">
          <Heading className="self-stretch text-center">
            {content.title}
          </Heading>
          <Paragraph className="self-stretch text-center">
            {content.description}
          </Paragraph>
          <LinkButton href={content.ctaHref} variant="transparent">
            {content.ctaText}
          </LinkButton>
        </div>
      </GridContainer>
    </section>
  );
};
