import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface IVectorCardProps {
  title: string;
  image: string;
  description?: string;
}

const VectorCard: React.FC<IVectorCardProps> = ({
  title,
  image,
  description,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Listen for scroll events to trigger the animation
      const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const triggerPoint = window.innerHeight ; // Adjust the trigger point as needed

        setIsVisible(scrollY > triggerPoint);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  const cardAnimation = useSpring({
    to: { opacity: isVisible? 1 : 0},
    config:{duration:700}
  });

  
  return (
    <animated.div
      style={cardAnimation}
      className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
    >
      <div className="p-6">
        <img className="h-16" src={image} alt={title} />
        <h5
          style={{ fontFamily: 'junicode-italic' }}
          className="block mb-2  text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
        >
          {title}
        </h5>
        <p
          style={{ fontFamily: 'junicode-regular' }}
          className="block font-sans text-base antialiased font-light leading-relaxed text-inherit"
        >
          {description}
        </p>
      </div>
    </animated.div>
  );
};

export default VectorCard;
