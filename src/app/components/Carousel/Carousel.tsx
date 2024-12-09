'use client';
import Slider from 'react-slick';
import { basePath } from '../../utils/constants';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel() {
  const images = [
    {
      image: `${basePath}/images/jurisdictions/LAC.png`,
      title: 'County of Los Angeles Public Health',
    },
    {
      image: `${basePath}/images/jurisdictions/NMDOH-Logo-White.png`,
      title: 'NM Health',
    },
    {
      image: `${basePath}/images/jurisdictions/Philly.png`,
      title: 'City of Philadelphia',
    },
    {
      image: `${basePath}/images/jurisdictions/LAC.png`,
      title: 'County of Los Angeles Public Health',
    },
    {
      image: `${basePath}/images/jurisdictions/NMDOH-Logo-White.png`,
      title: 'NM Health',
    },
    {
      image: `${basePath}/images/jurisdictions/Philly.png`,
      title: 'City of Philadelphia',
    },
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
        {images.map((imgObj, index) => (
          <div key={index}>
            <Image
              src={imgObj.image}
              alt={imgObj.title}
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
