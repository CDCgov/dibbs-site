'use client';
import Slider from 'react-slick';
import { basePath } from '../../utils/constants';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const images = [
    `${basePath}/images/placeholder-carousel-numbered-1.png`,
    `${basePath}/images/placeholder-carousel-numbered-2.png`,
    `${basePath}/images/placeholder-carousel-numbered-3.png`,
    `${basePath}/images/placeholder-carousel-numbered-4.png`,
    `${basePath}/images/placeholder-carousel-numbered-5.png`,
    `${basePath}/images/placeholder-carousel-numbered-6.png`,
    `${basePath}/images/placeholder-carousel-numbered-7.png`,
    `${basePath}/images/placeholder-carousel-numbered-1.png`,
    `${basePath}/images/placeholder-carousel-numbered-2.png`,
    `${basePath}/images/placeholder-carousel-numbered-3.png`,
    `${basePath}/images/placeholder-carousel-numbered-4.png`,
    `${basePath}/images/placeholder-carousel-numbered-5.png`,
    `${basePath}/images/placeholder-carousel-numbered-6.png`,
    `${basePath}/images/placeholder-carousel-numbered-7.png`,
  ];

  const settings = {
    infinite: true,
    speed: 15000, // Adjust speed to make it constant
    slidesToShow: 7, // Number of visible slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous without pause
    cssEase: 'linear', // For smooth, continuous movement
    pauseOnHover: false,
  };

  return (
    <div className={'sliderContainer'}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={160}
              height={100}
              draggable={false}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
