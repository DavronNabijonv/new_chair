import React, { useEffect, useRef, useState } from 'react'
import '../../styles/style.css';

export  function Left_ani({ ownClassName, children }) {
    
    const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const animatedDivRefleft = useRef(null);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 50
    );
  };
  

  const onScroll = () => {
    if (animatedDivRefleft.current) {
        setIsVisibleLeft(isElementInViewport(animatedDivRefleft.current));
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
    <div ref={animatedDivRefleft} className={`animated-div-left ${ownClassName} ${isVisibleLeft ? "left_ani" : ""}`}>
      {children}
    </div>
  )
}


export  function Right_ani({ownClassName , children}) {
    const [isVisibleRight, setIsVisibleRight] = useState(false);
    const animatedDivRefright = useRef(null);
  
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 100
      );
    };
    
  
    const onScroll = () => {
      if (animatedDivRefright.current) {
        setIsVisibleRight(isElementInViewport(animatedDivRefright.current));
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
      <div ref={animatedDivRefright} className={`animated-div-right ${ownClassName} ${isVisibleRight ? "right_ani" : ""}`}>
        {children}
      </div>
    )
}
