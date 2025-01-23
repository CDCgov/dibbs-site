import { GridContainer } from '@trussworks/react-uswds';
import { LinkButton } from '../LinkButton/LinkButton';
import { Heading, Paragraph } from '../../_ui';
import { getImageProps } from 'next/image';
import { CSSProperties } from 'react';
import { getBackgroundImage } from '@/app/utils/image';

export const InvitationCta = () => {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 1400,
    height: 300,
    src: '/images/footer-bg.jpg',
  });
  const backgroundImage = getBackgroundImage(srcSet);

  const style: CSSProperties = {
    height: '300px',
    minWidth: '100%',
    backgroundImage,
    objectFit: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% clamp(410px, 10%, 100vh)',
  };

  const content = {
    title: 'Interested in getting started with DIBBs?',
    description:
      'Contact our team to learn more about how our products can help improve your data workflows',
    ctaText: 'Contact us',
    ctaHref: '/engage-with-us',
  };

  return (
    <section style={style} className="max-h-[24.25rem] py-[3.75rem]">
      <GridContainer>
        <div className="flex flex-col items-center justify-center gap-6 self-stretch">
          <div className="flex flex-col gap-1">
            <Heading className="self-stretch text-center text-white">
              {content.title}
            </Heading>
            <Paragraph className="m-0 self-stretch p-0 text-center font-extralight text-white">
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
