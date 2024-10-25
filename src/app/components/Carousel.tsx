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
  const itemsPerView = 3; // Number of images visible at once
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const carouselRef = useRef(null);

  // Handle drag start
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    let startX: number;

    // Check if the event is a TouchEvent (touches exist on TouchEvent)
    if ('touches' in e) {
      startX = e.touches[0].clientX; // TouchEvent uses touches array
    } else {
      startX = e.pageX; // MouseEvent uses pageX
    }

    setDragStartX(startX);
    setIsDragging(true);
  };

  // Handle dragging
  const handleDragMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    if (!isDragging) return;
    let currentX: number;
    if ('touches' in e) {
      currentX = e.touches[0].clientX;
    } else {
      currentX = e.pageX;
    }
    setDragOffset(currentX - dragStartX);
  };

  // Handle drag end
  const handleDragEnd = () => {
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? images.length - itemsPerView : currentIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % (images.length - itemsPerView + 1));
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
            transform: `translateX(calc(-${(currentIndex / images.length) * 100}% + ${dragOffset}px))`,
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
