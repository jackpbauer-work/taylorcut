import React, { useState, useEffect } from 'react';
import lake_atitlan from '../images/lake_atitlan.jpg';
import { Link } from 'react-router-dom';
import '../css/UpcomingAdventure.css';

function UpcomingAdventure() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const upcomingAdventure = document.querySelector('.upcoming-adventure');
      const positionFromTop = upcomingAdventure.getBoundingClientRect().top;
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
    const adventureImage = document.querySelector('.div-guatemala img');
    if (isVisible) {
      adventureImage.classList.add('is-visible');
    } else {
      adventureImage.classList.remove('is-visible');
    }
  }, [isVisible]);

  return (
    <div className={`upcoming-adventure ${isVisible ? 'visible' : ''}`}>
      <h1 className="destination">UPCOMING RETREAT</h1>
      <h3 className="dates">november 5th - november 10th</h3>
      <div className="div-guatemala">
        <img src={lake_atitlan} alt="Upcoming Adventure" className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} />
        <div className="overlay">
          <Link className="button" to={`/upcoming`}>
            <h1>GUATEMALA</h1> <h2 className="date">november 2023</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingAdventure;
