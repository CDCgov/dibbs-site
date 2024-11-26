import Image from 'next/image';
import { type CSSProperties, memo } from 'react';
import styles from './ImageCard.module.scss';
import classNames from 'classnames';

interface ImageCardProps {
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
  imageFirst?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  imageStyle?: CSSProperties;
}

const baseClasses = {
  container:
    'grid grid-cols-2 justify-items-center gap-4 xl:justify-items-start xl:gap-14',
  imageBox: 'image-box h-full w-[30rem] overflow-hidden',
  textBox: 'text-box order-2 flex flex-col gap-5 pb-10 pt-10',
};

export const ImageCard = memo(function ImageCard({
  imageUrl,
  imageAlt,
  children,
  imageFirst = true,
  imageWidth = 0,
  imageHeight = 0,
  imageStyle = {},
}: ImageCardProps) {
  const containerClasses = classNames(
    styles['image-card'],
    baseClasses.container,
    imageFirst ? 'xl:grid-cols-[1fr_2fr]' : 'xl:grid-cols-[2fr_1fr]',
  );

  const imageBoxClasses = classNames(
    imageFirst ? styles['image-box'] : styles['image-box-reverse'],
    baseClasses.imageBox,
    imageFirst ? 'order-1' : 'order-1 xl:order-2',
  );

  const textBoxClasses = classNames(
    baseClasses.textBox,
    imageFirst ? '' : 'xl:order-1 xl:pl-10',
  );

  return (
    <div className={containerClasses}>
      <div className={imageBoxClasses}>
        <Image
          className="h-full w-full object-cover"
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
          style={imageStyle}
          priority={true} // If this is above the fold
        />
      </div>
      <div className={textBoxClasses}>{children}</div>
    </div>
  );
});
