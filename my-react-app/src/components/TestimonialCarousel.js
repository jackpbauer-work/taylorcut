import React, { useState, useEffect } from 'react';
import '../css/TestimonialCarousel.css';
import robk_testimonial from '../images/robk_testimonial.jpg';
import annec_testimonial from '../images/annec_testimonial.jpg';
import daegan2_testimonial from '../images/daegan_testimonial.JPG';

function TestimonialCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      image: robk_testimonial,
      content: 'I have always wanted to go on a fitness retreat, but never had the courage to sign up. When I heard Michael was organizing and leading one I did not hesitate. The trip challenged me in the best ways - physically, socially and culturally - and all in an amazing setting. It was an experience with a great group of people that I will always remember and would recommend to anyone adventurous enough to do something different.',
    },
    {
      image: annec_testimonial,
      content: 'I honestly cannot say enough about how this trip surpassed my expectations. Michael was super organized throughout the planning process, available for any questions, and made the experience effortless. He went above and beyond even before the trip by setting up a pre-trip Happy Hour, allowing all attendees to meet and feel comfortable prior to departure. He truly thought of everything, including surprising all the guests with super cute goodie bags, filled with lots of "on-theme" treats, and a personalized note which really made me feel special!! Michael was such a pleasure the entire trip - his energy, enthusiasm, passion, optimism, and overall happy aura shines through and is contagious!',
    },
    {
      image: daegan2_testimonial,
      content: 'It sounds dramatic, but I can honestly say going on the Nicaragua retreat was a life changing experience for me. It offered a beautiful escape to the jungle that was complete with incredible workouts, delicious food, fun activities, self discovery and people that I now consider friends for life. Michael and Jack put on an incredible trip from start to finish (and made the logistics of planning a total breeze). Do yourself a favor and book this retreat immediately!',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const testimonialContainer = document.querySelector('.testimonial-container');
      const positionFromTop = testimonialContainer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (positionFromTop <= windowHeight * 0.7 && positionFromTop >= -windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (direction) => {
    const newIndex = currentIndex + direction;
    setCurrentIndex((newIndex + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex] || {};

return (
    <div className={`testimonial-container ${isVisible ? 'visible' : ''}`}>
      
      <div className="testimonial-content">
          <img
            className="testimonial-image"
            src={testimonial.image}
            alt="Testimonial"
          />
          <p className="testimonial-text">{testimonial.content}</p>
      </div>
      
      <div className="controls">
        <button className="testimonial-button-prev" onClick={() => handleNavigate(-1)}></button>
        <button className="testimonial-button-next" onClick={() => handleNavigate(1)}></button>
      </div>
    </div>
);
}

export default TestimonialCarousel;