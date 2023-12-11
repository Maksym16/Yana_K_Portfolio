import React, { useEffect, useState } from 'react';

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    showScrollButton && (
      <div
        className="top-scroll"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <i className="fa fa-angle-up"></i>
      </div>
    )
  );
};

export default ScrollButton;
