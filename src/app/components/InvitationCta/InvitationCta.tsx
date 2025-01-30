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
    minWidth: '100%',
    backgroundImage,
    objectFit: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% clamp(410px, 10%, 100vh)',
  };

  return (
    <section style={style} className="py-8 sm:max-h-[16.25rem] md:py-[3.75rem]">
      <GridContainer>
        <div className="flex flex-col items-center justify-center gap-6 self-stretch">
          <div className="flex flex-col gap-1">
            <Heading className="self-stretch text-center text-white">
              Interested in getting started with DIBBs?
            </Heading>
            <Paragraph className="m-0 self-stretch p-0 text-center text-[1.38rem] font-extralight text-white">
              Contact our team to learn more about how our products can help
              improve your data workflows
            </Paragraph>
          </div>
          <LinkButton href="/engage-with-us" variant="transparent">
            Contact us
          </LinkButton>
        </div>
      </GridContainer>
    </section>
  );
};
