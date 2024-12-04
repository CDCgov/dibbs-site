import Image from 'next/image';
import { type CSSProperties } from 'react';
import { Container, ImageContainer, TextContainer } from './_ui';
import classNames from 'classnames';

interface ImageCardProps {
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
  imageFirst?: boolean;
  imageStyle?: CSSProperties;
  cardBackground?: 'none' | 'white';
  xlHideImage?: boolean;
}

export const ImageCard = ({
  imageUrl,
  imageAlt,
  children,
  imageFirst = true,
  imageStyle = {},
  cardBackground = 'white',
  xlHideImage = false,
}: ImageCardProps) => (
  <Container imageFirst={imageFirst} cardBackground={cardBackground}>
    <ImageContainer imageFirst={imageFirst}>
      <Image
        className={classNames(
          'h-full w-full object-cover',
          xlHideImage ? 'block xl:hidden' : '',
        )}
        src={imageUrl}
        width={0}
        height={0}
        alt={imageAlt}
        style={imageStyle}
        priority={true}
      />
    </ImageContainer>
    <TextContainer imageFirst={imageFirst}>{children}</TextContainer>
  </Container>
);
