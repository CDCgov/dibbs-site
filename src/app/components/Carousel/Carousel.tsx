'use client';
import Slider, { Settings } from 'react-slick';
import { basePath } from '../../utils/constants';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const baseImages = [
    {
      image: `${basePath}/images/carousel/LAC.png`,
      alt: 'County of Los Angeles Public Health',
    },
    {
      image: `${basePath}/images/carousel/NM.png`,
      alt: 'New Mexico Health',
    },
    {
      image: `${basePath}/images/carousel/Philly.png`,
      alt: 'City of Philadelphia',
    },
    {
      image: `${basePath}/images/carousel/CO.png`,
      alt: 'Colorado Department of Public Health & Environment',
    },
    {
      image: `${basePath}/images/carousel/VDH.png`,
      alt: 'Virigina Department of Health',
    },
    {
      image: `${basePath}/images/carousel/ME.png`,
      alt: 'Maine Center for Disease Control and Prevention',
    },
  ];

  const images = [...Array(Math.ceil(10 / baseImages.length))]
    .flatMap(() => baseImages)
    .slice(0, 10);

  const settings: Settings = {
    variableWidth: true,
    infinite: true,
    speed: 15000, // Adjust speed to make it constant
    slidesToShow: 4, // Number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous without pause
    cssEase: 'linear', // For smooth, continuous movement
    pauseOnHover: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <>
      <div className="block flex flex-wrap justify-center gap-8 px-4 py-6 xl:hidden">
        {baseImages.map((imgObj, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={imgObj.image}
              alt={imgObj.alt}
              width={160}
              height={100}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <div className="sliderContainer hidden max-h-[100px] xl:block">
        <Slider {...settings}>
          {images.map((imgObj, index) => (
            <div key={index}>
              <div className="flex h-[6.25rem] justify-center px-[2.5rem]">
                <Image
                  src={imgObj.image}
                  alt={imgObj.alt}
                  width={160}
                  height={100}
                  draggable={false}
                  className="h-full w-full min-w-[13.63rem] max-w-[300px] object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
