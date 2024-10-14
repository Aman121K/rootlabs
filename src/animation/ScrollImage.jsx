import React, { useEffect, useState, useRef } from 'react';

const ScrollMove = ({ 
  children, 
  direction, 
  speed, 
  top,            // Accepts top as a string (percentage or pixels)
  leftPercentage,
  parentRef 
}) => {
  const [position, setPosition] = useState(parseFloat(top)); // Starting position in px
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const prevScrollY = useRef(0); // Track previous scroll position

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.01, // Trigger when 1% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parentTop = parentRef.current.getBoundingClientRect().top + window.scrollY;
      const parentHeight = parentRef.current.getBoundingClientRect().height;
      const componentHeight = ref.current.getBoundingClientRect().height;

      // Only adjust the position when the component is in view
      if (isVisible) {
        let newPosition = position;

        const movement = (scrollY - prevScrollY.current) * speed; // Calculate movement since the last scroll

        // Scroll direction handling
        if (direction === 'down') {
          newPosition = newPosition + movement;
        } else if (direction === 'up') {
          newPosition = newPosition - movement;
        }

        const maxTop = parentHeight - componentHeight;
        const minTop = 0;

        // Ensure the new position stays within bounds
        newPosition = Math.min(Math.max(newPosition, minTop), maxTop);
        setPosition(newPosition);
      }

      // Update the previous scroll position
      prevScrollY.current = scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, direction, speed, position, parentRef]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: `${position}px`, // Combine top and dynamic position
        left: `${leftPercentage}%`, // Set left position based on percentage
        height: 200,
        width: 200,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollMove;
