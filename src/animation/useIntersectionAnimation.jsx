import { useEffect, useRef } from "react";

export const useIntersectionAnimation = (animation, options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.style.animation = animation;
              entry.target.style.opacity = 1;
          }
        });
      },
      options
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animation, options]);

  return elementRef;
};
