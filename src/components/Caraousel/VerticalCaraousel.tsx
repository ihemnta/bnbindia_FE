import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import "../../styles/fonts.css"
import CTAButton from '../Custom/CTAButton';

interface VerticalCarouselProps {
  items: string[];
}

const VerticalCarousel: React.FC<VerticalCarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    // Increment or decrement index based on scrolling direction with wrap-around
    event.preventDefault()
 

    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }
    

      
  };

  const springProps = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
      transform: `scale(0.8) translateY(-${currentIndex * 100}%)`,
    },
    reset: true,
    config: { tension: 100, friction: 15 },
  });

  // Autoplay functionality
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      // Increment index with wrap-around
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 10000);

    // Clear the interval when the component unmounts
    return () => clearInterval(autoplayInterval);
  }, [currentIndex, items.length]);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
    
    >
      <animated.img
        onWheel={handleScroll}
        key={currentIndex}
        src={items[currentIndex]}
        className="h-[90vh] w-full md:h-screen md:w-screen rounded-md z-10 sm:object-cover object-fill top-0 left-0"

        style={{
          ...springProps,
          position: 'relative',
        }}
        alt={`Image ${currentIndex + 1}`}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-50 text-center space-y-6"
      >
        <div className="sm:text-4xl text-xl gap-1 font-normal flex flex-col" style={{fontFamily:"custom-cursive-font"}}><span className='-ml-12'>
         Transforming  </span><span className='sm:ml-2 ml-4 uppercase not-italic' style={{fontFamily:"junicode-italic"}}>Spaces <span className='lowercase'>with</span></span> <span className='-ml-5'>Elegance</span></div>
        <CTAButton btnColor='#000080' buttonText='Our Projects'/>
      </div>
      <div
        className="absolute top-[40%] sm:right-9 right-2 flex flex-col gap-2"
        style={{ zIndex: 3 }}
      >
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={` w-2 bg-black rounded-md h-4 ${
              index === currentIndex ? 'opacity-100' : 'opacity-50'
            }`}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 object-cover"
        style={{
          backgroundImage: `url(${items[currentIndex]})`,
          filter: 'blur(4px)',
        }}
      />
    </div>
  );
};

export default VerticalCarousel;
