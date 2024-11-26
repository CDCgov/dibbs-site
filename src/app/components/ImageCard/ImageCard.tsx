import Image from 'next/image';

interface ImageCardProps {
  imageUrl: string;
  imageAlt: string;
  children: React.ReactNode;
  imageFirst?: boolean;
  imageWidth?: number;
  imageHeight?: number;
}

export function ImageCard({
  imageUrl,
  imageAlt,
  children,
  imageFirst = true,
  imageWidth = 0,
  imageHeight = 0,
}: ImageCardProps) {
  return (
    <div className="image-card grid grid-cols-1 justify-items-center gap-4 xl:grid-cols-[1fr_2fr] xl:justify-items-start xl:gap-14">
      <div
        className={`image-box h-[100%] w-[30rem] overflow-hidden ${
          imageFirst ? 'order-1' : 'order-1 xl:order-2'
        }`}
      >
        <Image
          className="h-full w-full object-cover"
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt}
        />
      </div>
      <div
        className={`text-box order-2 flex flex-col gap-5 ${imageFirst ? '' : 'xl:order-1'}`}
      >
        {children}
      </div>
    </div>
  );
}
