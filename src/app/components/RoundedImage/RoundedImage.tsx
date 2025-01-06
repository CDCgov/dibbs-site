import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';

export type RoundedImageProps = ImageProps;

export const RoundedImage = ({
  src,
  alt,
  className,
  ...props
}: RoundedImageProps) => {
  return (
    <Image
      className={classNames(
        'rounded-br-[2.5rem] rounded-tl-[2.5rem] shadow-lg',
        className,
      )}
      src={src}
      alt={alt}
      {...props}
    />
  );
};
