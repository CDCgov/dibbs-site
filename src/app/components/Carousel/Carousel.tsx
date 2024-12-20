'use client';
import Slider from 'react-slick';
import { basePath } from '../../utils/constants';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';

export default function Carousel() {
  const baseImages = [
    {
      image: `${basePath}/images/jurisdictions/LAC.png`,
      alt: 'County of Los Angeles Public Health',
    },
    {
      image: `${basePath}/images/jurisdictions/NMDOH-Logo-White.png`,
      alt: 'NM Health',
    },
    {
      image: `${basePath}/images/jurisdictions/Philly.png`,
      alt: 'City of Philadelphia',
    },
  ];

  const images = [...Array(Math.ceil(10 / baseImages.length))]
    .flatMap(() => baseImages)
    .slice(0, 10);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    infinite: true,
    speed: 15000, // Adjust speed to make it constant
    slidesToShow: 7, // Number of visible slides
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
      {isMobile ? (
        <div className="flex flex-wrap justify-center gap-8 px-4 py-6">
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
      ) : (
        <div className="sliderContainer">
          <Slider {...settings}>
            {images.map((imgObj, index) => (
              <div key={index}>
                <Image
                  src={imgObj.image}
                  alt={imgObj.alt}
                  width={160}
                  height={100}
                  draggable={false}
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </>
  );
}
