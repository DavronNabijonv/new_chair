import React, { useEffect, useRef, useState } from 'react';
import '../../styles/style.css';

export default function PopUp({ ownClassName, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const animatedDivRef = useRef(null);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 100
    );
  };
  

  const onScroll = () => {
    if (animatedDivRef.current) {
      setIsVisible(isElementInViewport(animatedDivRef.current));
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);

    // Initial check
    onScroll();

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={animatedDivRef} className={`animated-div ${ownClassName} ${isVisible ? "pop_up" : ""}`}>
      {children}
    </div>
  );
}
