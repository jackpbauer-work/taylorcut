import React, {useState, useEffect} from 'react';
import '../css/Upcoming.css';
import lake_atitlan_skytop_view from '../images/lake_atitlan_skytop_view.jpeg';
import lake_atitlan_dining from '../images/lake_atitlan_dining.jpeg';
import upcoming_activities1 from '../images/upcoming_activities1.jpg';
import upcoming_city from '../images/upcoming_city.jpg';
import upcoming_city2 from '../images/upcoming_city2.jpg';
import lake_atitlan_cabin from '../images/lake_atitlan_cabin.jpeg';
import lake_atitlan_hammock from '../images/lake_atitlan_hammock.jpeg';
import upcoming_popofcolor from '../images/upcoming_popofcolor.jpg';
import lake_atitlan_views from '../images/lake_atitlan_views.jpeg';
import lake_atitlan_yoga1 from '../images/lake_atitlan_yoga1.jpeg';
import lake_atitlan_big from '../images/lake_atitlan_big.jpg';
import lake_atitlan_journal from '../images/lake_atitlan_journal.jpg';
import lake_atitlan_studio2 from '../images/lake_atitlan_studio2.png';
import lake_atitlan_bedroom1 from '../images/lake_atitlan_bedroom1.jpeg';
import lake_atitlan_boat from '../images/lake_atitlan_boat.jpg';
import lake_atitlan_food from '../images/lake_atitlan_food.jpeg';
import lake_atitlan_sanjuan from '../images/lake_atitlan_sanjuan.jpg';
import lake_atitlan_yoga3 from '../images/lake_atitlan_yoga3.jpeg';
import lake_atitlan_yoga4 from '../images/lake_atitlan_yoga4.jpeg';
import lake_atitlan_cacao from '../images/lake_atitlan_cacao.jpg';
import lake_atitlan_temescal from '../images/lake_atitlan_temescal.jpg';
import lake_atitlan_coffee from '../images/lake_atitlan_coffee.png';



function Upcoming() {
  const [offsetY, setOffsetY] = useState(0);  
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const destination = {
    name: 'GUATEMALA',
    description: 'experience the ultimate wellness retreat at lake atitlán, where adventure and rejuvenation go hand in hand.',
  };

  const rooming = {
    name: 'villa in the sky',
    description: 'the view is worth the climb. your stay is nestled alongside a beautiful mountain, with views overlooking the lake and volcanoes.',
  };

// const itinerary = [
//   {
//     day: "Day 1",
//     title: "WELCOME & DISCONNECT",
//     description: "You made it! Arrive and transfer to our hotel. Relax, have a light dinner and rest."
//   },
//   {
//     day: "Day 2",
//     title: "EMBRACING THE NEW ENVIRONMENT",
//     description: "Start the day with a team breakfast before moving to our resort. Unpack, relax and engage in a yoga session. Evening features an opening ceremony and team dinner.",
//   },
//   { 
//     day: "Day 3",
//     title: "IMMERSE & EXPLORE",
//     description: "Kickstart the day with journaling and a yoga flow. Post breakfast, we engage in a guided meditation, explore San Marcos, and have a boat ride. Evening includes team dinner and relaxation.",
//   },
//   {
//     day: "Day 4",
//     title: "A DAY OF ACTION & ADVENTURE", 
//     description: "Start with a team workout and breakfast. Spend the day exploring or relaxing by the lake. Evening includes yoga, meditation, dinner, and team activities.",
//   },
//   {
//     day: "Day 5",
//     title: "WINDING DOWN",
//     description: "Start with a workout, followed by breakfast and an optional massage. Post lunch, we meditate, engage in a group activity and prepare for departure."
//   },
// ];


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReserveSpot = () => {
    // Redirect the user to the Stripe payment link
    window.location.href = 'https://buy.stripe.com/28o8AvedL2R38j67sw';
  };

  return (
    <div className="upcoming-page">
      <div className="upcoming-destination" >
        <h1 className="upcoming-title" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          {destination.name}
        </h1>
        <p className="upcoming-destination-p" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
          {destination.description}
        </p>
      </div>
      <div className="upcoming-rooming">
        <div className="image-title-description" >
          <img src={lake_atitlan_skytop_view} className='bamboo-house' alt="Upcoming Adventure" />
        <div className="title-description">
          <h1 className="bamboo-title">{rooming.name}</h1>
            <p className="upcoming-rooming-p">{rooming.description}</p>
        </div>
      </div>
        <div className="room-images">
          <img src={lake_atitlan_cabin} className='bamboo-balcony' alt="Upcoming Adventure" />
          <img src={lake_atitlan_hammock} className='bamboo-balcony' alt="Upcoming Adventure" />
          <img src={lake_atitlan_dining} className='bamboo-balcony' alt="Upcoming Adventure" />
          <img src={lake_atitlan_bedroom1} className='bamboo-balcony' alt="Upcoming Adventure" />
          <img src={lake_atitlan_views} className='bamboo-balcony' alt="Upcoming Adventure" />
          <img src={lake_atitlan_yoga1} className='bamboo-balcony' alt="Upcoming Adventure" />
          <img src={lake_atitlan_journal} className='bamboo-balcony' alt="Upcoming Adventure" />
          <img src={lake_atitlan_studio2} className='bamboo-balcony' alt="Upcoming Adventure" />
      </div>
    </div>
  {/* <div className="itinerary-section">
        <h1 className="itinerary-title"> Y(OUR) Itinerary</h1>
        <h3 className="travel-dates">November 5th - 10th, 2023</h3>
      <Carousel 
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          showStatus={false}
          showIndicators={false}
        >
          {itinerary.map((item, index) => (
            <div key={index} className="itinerary-item">
              <h2>{item.day}</h2>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </Carousel>
      </div> */}
  <div className="activities-section">
    <h1 className="activities-title">what will we be doing?</h1>
    <div className="activities-content">
        <ul>
            <li>daily strength, yoga, & meditation</li>
            <li>local, seasonal plant-based meals</li>
            <li>cacao ceremony</li>
            <li>group sauna (temescal ceremony)</li>
            <li>local cultural excursions</li>
            <li>...and much more</li>
        </ul>
    </div>
    <div className="activities-images">
        <img src={upcoming_activities1} alt="Upcoming Adventure" />
        <img src={upcoming_city} alt="Upcoming Adventure" />
        <img src={lake_atitlan_cacao} alt="Upcoming Adventure" />
        <img src={upcoming_city2} alt="Upcoming Adventure" />
        <img src={upcoming_popofcolor} alt="Upcoming Adventure" />
        <img src={lake_atitlan_boat} alt="Upcoming Adventure" />
        <img src={lake_atitlan_temescal} alt="Upcoming Adventure" />
        <img src={lake_atitlan_food} alt="Upcoming Adventure" />
        <img src={lake_atitlan_sanjuan} alt="Upcoming Adventure" />
        <img src={lake_atitlan_yoga3} alt="Upcoming Adventure" />
        <img src={lake_atitlan_coffee} alt="Upcoming Adventure" />
        <img src={lake_atitlan_yoga4} alt="Upcoming Adventure" />
    </div>
</div>

      <div className="upcoming-book-now" style={{ backgroundImage: `url(${lake_atitlan_big})` }}>
        <button className="reserve-spot-button" onClick={handleReserveSpot}>
          RESERVE YOUR SPOT
        </button>
      </div>
  </div>
  );
}

export default Upcoming;
