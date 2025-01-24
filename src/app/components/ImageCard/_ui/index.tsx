import classNames from 'classnames';
import styles from '../ImageCard.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className={classNames(
        'grid grid-cols-1 justify-items-center gap-4 xl:justify-items-start xl:gap-0',
        'xl:grid-cols-[2fr_1fr]',
        styles.imageCard,
        styles[`imageCard-none`],
      )}
    >
      {children}
    </div>
  );
};

interface ChildrenProps {
  children: React.ReactNode;
}

export const ImageContainer = ({ children }: ChildrenProps) => (
  <div
    className={classNames(
      styles['image-box-reverse'],
      'image-box order-1 overflow-hidden rounded-tl-[2.5rem] sm:w-[30rem] xl:order-2',
    )}
  >
    {children}
  </div>
);

export const TextContainer = ({ children }: ChildrenProps) => (
  <div className="text-box order-2 flex flex-col gap-5 xl:order-1">
    {children}
  </div>
);
