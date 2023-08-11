import React, { useState, useEffect } from 'react';
import '../css/WeDoTitle.css';

function WeDoTitle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const titleStatement = document.querySelector('.we-do-title');
      const positionFromTop = titleStatement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (positionFromTop <= windowHeight * 0.7 && positionFromTop >= -windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const titleHeading = document.querySelector('.we-do-title h1');
    if (isVisible) {
      titleHeading.classList.add('is-visible');
    } else {
      titleHeading.classList.remove('is-visible');
    }
  }, [isVisible]);

  const titleDivStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '0px', // Adjust as needed for space between WeDoTitle and the next div
  };

  return (
    <div style={titleDivStyle} className={`we-do-title ${isVisible ? 'visible' : ''}`}>
      <h1
        className="fade-in-section"
        style={{
          fontSize: '5.5rem',
          marginBottom: '0.2rem',
        }}
      >
        WHAT AM I DOING?
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '0.3rem',
            marginRight: '10px',
          }}
          className="subtitle wake"
        >
          WAKE UP.
        </h2>
        <h2
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '0.3rem',
            marginRight: '10px',
          }}
          className="subtitle dog"
        >
          DOWN DOG.
        </h2>
        <h2
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '0.3rem',
            marginRight: '10px',
          }}
          className="subtitle hiit"
        >
          SWEAT.
        </h2>
        <h2
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '0.3rem',
            marginRight: '10px',
          }}
          className="subtitle hiit"
        >
          COOL DOWN.
        </h2>
        <h2
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '0.3rem',
            marginRight: '10px',
          }}
          className="subtitle explore"
        >
          EXPLORE.
        </h2>
        <h2
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            marginBottom: '0.3rem',
          }}
          className="subtitle repeat"
        >
          REPEAT.
        </h2>
      </div>
    </div>
  );
}

export default WeDoTitle;
