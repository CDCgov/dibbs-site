import Image from 'next/image';
import { Container, ImageContainer, TextContainer } from './_ui';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ImageCardProps {
  url: StaticImport;
  alt: string;
  children: React.ReactNode;
}

export const ImageCard = ({ url, alt, children }: ImageCardProps) => (
  <Container>
    <ImageContainer>
      <Image
        className="block h-full w-full place-self-start object-cover xl:hidden"
        src={url}
        alt={alt}
        style={{ transform: 'scale(1.4) translate(-8%, 3%)' }}
        priority={true}
      />
    </ImageContainer>
    <TextContainer>{children}</TextContainer>
  </Container>
);
