// VerticalCarousel.tsx
import React, { useState, useCallback } from 'react';
import { useSpring, animated, config } from '@react-spring/web';

interface VerticalCarouselProps {
  images: string[];
  buttonText: string;
  buttonLink: string;
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ images, buttonText, buttonLink }) => {
  const [index, setIndex] = useState(0);

  const handleClick = () => {
    // Handle button click, e.g., redirect to buttonLink
    window.location.href = buttonLink;
  };

  const goToSlide = useCallback((slideIndex: number) => {
    setIndex(slideIndex);
  }, []);

  const springProps = useSpring({
    from: { transform: `translateY(-${index * 100}%)` },
    to: { transform: `translateY(-${index * 100}%)` },
    reset: true,
    onRest: () => setIndex((prevIndex) => (prevIndex + 1) % images.length),
    config: config.slow,
  });

  return (
    <div className="relative overflow-hidden h-screen">
      <animated.div
        style={{
          height: `${images.length * 100}%`,
          ...springProps,
        }}
        className="transition-transform duration-500 relative"
      >
        {images.map((image, i) => (
          <div key={i} className="h-full relative">
            <img src={image} alt={`Carousel Image ${i + 1}`} className="w-full h-full object-cover" />
            <button
              onClick={() => goToSlide(i)}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {buttonText}
            </button>
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default VerticalCarousel;
