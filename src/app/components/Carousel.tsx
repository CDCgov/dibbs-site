'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { basePath } from '../utils/constants';

export default function MultiImageCarousel() {
  const images = [
    `${basePath}/images/placeholder-carousel.svg`,
    `${basePath}/images/placeholder-carousel.svg`,
    `${basePath}/images/placeholder-carousel.svg`,
    `${basePath}/images/placeholder-carousel.svg`,
    `${basePath}/images/placeholder-carousel.svg`,
    `${basePath}/images/placeholder-carousel.svg`,
    `${basePath}/images/placeholder-carousel.svg`,
    `${basePath}/images/placeholder-carousel.svg`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5; // Number of images visible at once
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [finalOffset, setFinalOffset] = useState(0); // Stores the last offset when dragging stops
  const [offsetType, setOffsetType] = useState('%'); // Stores the last offset when dragging stops

  const carouselRef = useRef(null);

  // Handle drag start
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    setOffsetType('px');
    const startX = 'touches' in e ? e.touches[0].clientX : e.pageX;
    setDragStartX(startX);
    setIsDragging(true);
  };

  // Handle dragging
  const handleDragMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (!isDragging) return;

    const currentX = 'touches' in e ? e.touches[0].clientX : e.pageX;
    setDragOffset(currentX - dragStartX);
  };

  // Handle drag end
  const handleDragEnd = () => {
    setFinalOffset(finalOffset + dragOffset); // Keep track of cumulative offset
    setIsDragging(false);
    setDragOffset(0); // Reset drag offset after drag ends
    // setFinalOffset(0);
  };

  const prevSlide = () => {
    setOffsetType('%');
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setFinalOffset(-newIndex * (100 / itemsPerView)); // Update finalOffset to reflect the new position
  };

  const nextSlide = () => {
    setOffsetType('%');
    const maxIndex = images.length - itemsPerView;
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : maxIndex;
    setCurrentIndex(newIndex);
    setFinalOffset(-newIndex * (100 / itemsPerView)); // Update finalOffset to reflect the new position
  };

  return (
    <div
      className="carousel-container"
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      ref={carouselRef}
    >
      <button onClick={prevSlide} className="carousel-btn prev">
        ❮
      </button>
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(calc(${finalOffset}${offsetType} + ${dragOffset}${offsetType}))`,
            width: `${(images.length / itemsPerView) * 100}%`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="carousel-item">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={160}
                height={100}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} className="carousel-btn next">
        ❯
      </button>
    </div>
  );
}
