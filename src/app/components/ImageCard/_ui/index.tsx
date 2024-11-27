import classNames from 'classnames';
import styles from '../ImageCard.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  imageFirst?: boolean;
}

export const Container = ({ children, imageFirst = true }: ContainerProps) => {
  const imageFirstClass = imageFirst
    ? 'xl:grid-cols-[1fr_2fr]'
    : 'xl:grid-cols-[2fr_1fr]';

  return (
    <div
      className={classNames(
        'grid grid-cols-1 justify-items-center gap-4 xl:justify-items-start xl:gap-14',
        imageFirstClass,
        styles.imageCard,
      )}
    >
      {children}
    </div>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
  imageFirst: boolean;
}

export const ImageContainer = ({ children, imageFirst }: ChildrenProps) => (
  <div
    className={classNames(
      imageFirst ? styles.imageContainer : styles['image-box-reverse'],
      'image-box h-full w-[30rem] overflow-hidden',
      imageFirst ? 'order-1' : 'order-1 xl:order-2',
    )}
  >
    {children}
  </div>
);

export const TextContainer = ({ children, imageFirst }: ChildrenProps) => (
  <div
    className={classNames(
      'text-box order-2 flex flex-col gap-5 pb-10 pt-10',
      imageFirst ? '' : 'xl:order-1 xl:pl-10',
    )}
  >
    {children}
  </div>
);
