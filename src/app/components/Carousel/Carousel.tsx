'use client';
import Slider from 'react-slick';
import { basePath } from '../../utils/constants';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const images = [
    `${basePath}/images/jurisdictions/LAC.png`,
    `${basePath}/images/jurisdictions/NMDOH-Logo-White.png`,
    `${basePath}/images/jurisdictions/Philly.png`,
    `${basePath}/images/jurisdictions/LAC.png`,
    `${basePath}/images/jurisdictions/NMDOH-Logo-White.png`,
    `${basePath}/images/jurisdictions/Philly.png`,
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
