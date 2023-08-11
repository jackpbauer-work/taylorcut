import React, { useState, useEffect } from 'react';
import '../css/MissionStatement.css';

function MissionStatement() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const missionStatement = document.querySelector('.mission-statement');
      const positionFromTop = missionStatement.getBoundingClientRect().top;
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
    const missionParagraph = document.querySelector('.mission-statement p');
    if (isVisible) {
      missionParagraph.classList.add('is-visible');
    } else {
      missionParagraph.classList.remove('is-visible');
    }
  }, [isVisible]);

  return (
    <div className={`mission-statement ${isVisible ? 'visible' : ''}`}>
      <div className="mission-content">
        <h2>OUR MISSION</h2>
        <p className="fade-in-section">
          we create soul-stirring retreats to off-the-beaten-path locales. our mission? to power you up, help you disconnect from the digital world, and build deep-rooted connections, all while soaking up the raw beauty and cultural vitality of exotic places. rediscover yourself through fitness, friendship, and adventure.
        </p>
      </div>
    </div>
  );
}

export default MissionStatement;
