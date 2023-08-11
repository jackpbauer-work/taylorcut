import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/ScrollButton.css';

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll(); // Check scroll position when location changes
  }, [location]);

  const handleScroll = () => {
    const scrollHeight = window.innerHeight * 0.7;
    if (window.pageYOffset > scrollHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    // Scroll to top or perform any other action when the button is clicked
    navigate('/inquiry');
  };

  return (
    <div className={`scroll-button ${showButton ? 'show' : ''}`} onClick={handleClick}>
      Questions?
    </div>
  );
}

export default ScrollButton;
