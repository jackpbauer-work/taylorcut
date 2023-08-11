import React, { useEffect, useRef } from 'react';
import '../css/TitleDiv.css';

function TitleDiv() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
const handleScroll = () => {
  let scrollPos = window.pageYOffset;
  if (titleRef.current) {
    titleRef.current.style.transform = `translateY(${scrollPos * 0.5}px)`;
    subtitleRef.current.style.transform = `translateY(${scrollPos * 0.5}px)`;
  }
};


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="title-div">
      <div className="background"></div>
      <h1 className="title" ref={titleRef}>TaylorCut.</h1>
      <h2 className="subtitle" ref={subtitleRef}>Retreat Yourself</h2>
    </div>
  );
}

export default TitleDiv;
