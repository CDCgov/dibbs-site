import Image from 'next/image';
import { type CSSProperties } from 'react';
import { Container, ImageContainer, TextContainer } from './_ui';

interface ImageCardProps {
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
  imageFirst?: boolean;
  imageStyle?: CSSProperties;
}

export const ImageCard = ({
  imageUrl,
  imageAlt,
  children,
  imageFirst = true,
  imageStyle = {},
}: ImageCardProps) => (
  <Container imageFirst={imageFirst}>
    <ImageContainer imageFirst={imageFirst}>
      <Image
        className="h-full w-full object-cover"
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
