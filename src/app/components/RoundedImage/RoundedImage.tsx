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
        'inline-flex h-full w-full items-center justify-center rounded-br-[2.5rem] rounded-tl-[2.5rem] shadow',
        className,
      )}
      src={src}
      alt={alt}
      {...props}
    />
  );
};
