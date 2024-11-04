'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { basePath } from '../utils/constants';
import styles from '../styles/Carousel.module.scss';

export default function MultiImageCarousel() {
  const images = [
    `${basePath}/images/placeholder-carousel-numbered-1.png`,
    `${basePath}/images/placeholder-carousel-numbered-2.png`,
    `${basePath}/images/placeholder-carousel-numbered-3.png`,
    `${basePath}/images/placeholder-carousel-numbered-4.png`,
    `${basePath}/images/placeholder-carousel-numbered-5.png`,
    `${basePath}/images/placeholder-carousel-numbered-6.png`,
    `${basePath}/images/placeholder-carousel-numbered-7.png`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [finalOffset, setFinalOffset] = useState(0);
  const [offsetType, setOffsetType] = useState('px');
  const [animation, setAnimation] = useState(true);
  const carouselRef = useRef(null);
  const animationFrameId = useRef(0);

  useEffect(() => {
    const speed = 2; // Adjust the speed as needed

    // Update position every frame
    const animate = () => {
      if (!animation) {
        cancelAnimationFrame(animationFrameId.current);
        return;
      }
      setFinalOffset((prev) => (prev + speed) % window.innerWidth); // Reset at width
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start the animation
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup on component unmount
    return () => cancelAnimationFrame(animationFrameId.current);
  }, []);

  // Handle drag start
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) => {
    setAnimation(false);
    cancelAnimationFrame(animationFrameId.current);
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

    setAnimation(false);
    cancelAnimationFrame(animationFrameId.current);

    const currentX = 'touches' in e ? e.touches[0].clientX : e.pageX;
    setDragOffset(currentX - dragStartX);
  };

  const handleDragEnd = () => {
    setFinalOffset(finalOffset + dragOffset);
    setIsDragging(false);
    setDragOffset(0);
  };

  const prevSlide = () => {
    setAnimation(false);
    cancelAnimationFrame(animationFrameId.current);
    setOffsetType('%');
    const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setFinalOffset(-newIndex * (100 / itemsPerView));
  };

  const nextSlide = () => {
    setAnimation(false);
    cancelAnimationFrame(animationFrameId.current);
    setOffsetType('%');
    const maxIndex = images.length - itemsPerView;
    const newIndex = currentIndex < maxIndex ? currentIndex + 1 : maxIndex;
    setCurrentIndex(newIndex);
    setFinalOffset(-newIndex * (100 / itemsPerView));
  };

  return (
    <div
      className={styles.carouselContainer}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
      ref={carouselRef}
    >
      <button
        onClick={prevSlide}
        className={styles.carouselBtn + ' ' + styles.prev}
      >
        ❮<span className="sr-only">Previous slide</span>
      </button>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.carousel}
          style={{
            transform: `translateX(calc(${finalOffset}${offsetType} + ${dragOffset}${offsetType}))`,
            width: `${(images.length / itemsPerView) * 100}%`,
            transition: isDragging ? 'none' : 'transform 0.5s ease-in-out',
          }}
        >
          {images.map((src, index) => (
            <div key={index} className={styles.carouselItem}>
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
      <button
        onClick={nextSlide}
        className={styles.carouselBtn + ' ' + styles.next}
      >
        ❯<span className="sr-only">Next slide</span>
      </button>
    </div>
  );
}
