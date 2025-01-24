import Image from 'next/image';
import { Container, ImageContainer, TextContainer } from './_ui';

interface ImageCardProps {
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
}

export const ImageCard = ({ imageUrl, imageAlt, children }: ImageCardProps) => (
  <Container>
    <ImageContainer>
      <Image
        className="block h-full w-full place-self-start object-cover xl:hidden"
        src={imageUrl}
        width={0}
        height={0}
        alt={imageAlt}
        style={{ transform: 'scale(1.4) translate(-8%, 3%)' }}
        priority={true}
      />
    </ImageContainer>
    <TextContainer>{children}</TextContainer>
  </Container>
);
