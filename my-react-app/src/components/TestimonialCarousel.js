import React, { useState, useEffect } from 'react';
import '../css/TestimonialCarousel.css';
import upcoming_background2 from '../images/upcoming_background2.jpg';
import robk_testimonial from '../images/robk_testimonial.jpg';
import annec_testimonial from '../images/annec_testimonial.jpg';
import daegan2_testimonial from '../images/daegan_testimonial.JPG';
import katherine_testimonial from '../images/katherine_testimonial.JPG';
import shane_testimonial from '../images/shane_testimonial.jpeg';
import kayla_testimonial from '../images/kayla_testimonial.JPG';
import katie_testimonial from '../images/katie_testimonial.JPG';

function TestimonialCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const testimonialsArray = [
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
        content: 'The fitness retreat in San Juan del Sur was an incredible experience. I had the opportunity to challenge myself physically, connect with like-minded individuals, and explore the beautiful surroundings. The mix of women and men created a supportive and inclusive environment, and the age range brought a diverse perspective to the activities. It was a memorable journey that allowed me to improve my health while forging new friendships. I cannot wait for another great adventure with Michael and Jack!',
      },
      {
        image: katherine_testimonial,
        content: 'I am so grateful for the fitness retreat in San Juan del Sur. Not only did it provide me with a much-needed break, but it also helped me improve my fitness and overall well-being. The welcoming and accepting atmosphere made it easy for everyone to connect and feel comfortable, regardless of gender or sexual orientation. The range of activities catered to all fitness levels, and the stunning location added an extra level of excitement. This retreat was a transformative experience that I will cherish forever.',
      },
      {
        image: shane_testimonial,
        content: 'The TaylorCut fitness retreat was a game-changer for me. As a gay man, it is important for me to feel accepted and supported in any group setting. This retreat exceeded my expectations in terms of inclusivity and camaraderie. The diverse mix of participants, spanning different age groups, created a dynamic and vibrant atmosphere. From challenging workouts to breathtaking hikes, each day brought new adventures and personal growth. This retreat truly fostered a sense of community and left me with lifelong friends.',
      },
      {
        image: katie_testimonial,
        content: 'I had an amazing time with Michael and Jack. The program was well-balanced, with workouts, outdoor activities, and moments of relaxation. The group consisted of a mix of men and women, and the friendly and supportive environment allowed us to cheer each other on throughout the journey. Regardless of age, we all bonded over our shared commitment to health and fitness. This retreat provided the perfect opportunity to rejuvenate my mind, body, and spirit while creating lasting memories.',
      },
      {
        image: kayla_testimonial,
        content: 'Michael and Jack could not have run a better retreat, it was an absolute blast! The inclusive and accepting atmosphere made me feel comfortable from the moment I arrived. It was incredible to see how people of different ages and backgrounds came together to embrace their health and wellness. From invigorating workouts to exploring the local culture, every day brought something new and exciting. This retreat was a transformative experience that inspired me to continue my fitness journey long after it ended.',
      },
    ];

    setTestimonials(testimonialsArray);
  }, []);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex] || {};
  const backgroundImageStyle = {
    backgroundImage: `url(${upcoming_background2})`,
  };

  return (
    <div className={`testimonial-container ${isVisible ? 'visible' : ''}`} style={backgroundImageStyle}>
      <div className="testimonial-background" />
      <div className="testimonial-carousel">
        <h1>Testimonials</h1>

        <div className="testimonial-content">
          <img
            className={`testimonial-image fade-in-section ${isVisible ? 'is-visible' : ''}`}
            src={testimonial.image}
            alt="Testimonial"
          />
          <p className={`testimonial-text fade-in-section ${isVisible ? 'is-visible' : ''}`}>{testimonial.content}</p>
        </div>

        <div className="controls">
          <button className="testimonial-button-prev" onClick={handlePrev}></button>
          <button className="testimonial-button-next" onClick={handleNext}></button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
