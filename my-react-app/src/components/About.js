import React from 'react';
import '../css/About.css'
import coach_taylor from '../images/coach_taylor.JPG'
import coach_bauer from '../images/coach_bauer.JPG'

function About() {
  return (
    <div className="story_container">
      <div className="story-title">
        <h2 className="commit-header">when you commit to the trip, you commit to practicing</h2>
        <h1>(y)our values</h1>
      </div>
          <div className="values-container">
        <div className="values1">
          <h2>presence</h2>
          <h3>it's simple. put down your phone. talk to the person next to you.</h3>
        </div>
        <div className="values2">
          <h2>openess</h2>
          <h3>be open to new experiences, new people, and new ideas.</h3>
        </div>
        <div className="values3">
          <h2>curiousity</h2>
          <h3>ask questions. learn. grow.</h3>
        </div>
        <div className="values4">
          <h2>kindness</h2>
          <h3>be kind to yourself, to others, and to the world around you.</h3>
        </div>
        <div className="values7">
          <h2>adventurous</h2>
          <h3>embrace the unknown, take risks, and step outside of your comfort zone.</h3>
        </div>
        <div className="values8">
          <h2>gratitude</h2>
          <h3>practice gratitude daily, appreciating every moment and the beauty in all things.</h3>
        </div>
      </div>
      <div className="coach-container">
        <div className="coach-title">
          <h2>meet the team</h2>
        </div>
        <div className="coaches-row">
      <div className="michael-container">
    <div className="about-michael">
      <h2 className='michael-name'>MICHAEL TAYLOR</h2>
      <h4 className='michael-quote'>"one step at a time. that's how we get there."</h4>
      <img src={coach_taylor} className="michael-image" alt="Michael" />
      <h3 className='michael-title'>founder & lead coach</h3>
      <p className ='michael-text'>
         {
    "Michael is the Founder of TaylorCut & Leading Coach. American born and raised in England, Michael's passion for fitness began with competitive swimming in high school and into college. Michael began teaching group fitness 9 years ago at CorePower Yoga while at Georgetown. Since then, Michael has taught at Barry's Bootcamp and today teaches group fitness at Equinox. TaylorCut. has brought Michael one step closer to living his dream and inspiring others to do the same.".toLowerCase()
  }
      </p>
    </div>
    </div>
  <div className = "jack-container">
    <div className="about-jack">
      <h2 className='jack-name'>JACK BAUER</h2>
      <h4 className='jack-quote'>"keep showing up."</h4>
      <img className="jack-image" src={coach_bauer} alt="Jack" />
      <h3 className='jack-title'>coach</h3>
      <p className ="jack-text">
        <p className ="jack-text">
  {
    "Jack joins forces with Michael as a Taylorcut coach. Jack thrives on seeing his clients flourish, growing in confidence and strength. His coaching journey began with one-on-one personal training in 2015, and by 2018, he was inspiring groups with his dynamic fitness instruction by way of SoulCycle. Jack's zeal for life doesn't stop at fitness. In his spare time, he finds peace in meditation and joy in singing, strumming his guitar, and training for his next big challenge.".toLowerCase()
  }
</p>
      </p>
        </div>
      </div>  
    </div>
  </div>
  <div className="story-text">
        <h1>(y)our mantra:</h1>
        <h2>"TAKE IT WITH YOU"</h2>
        <ul>
          <li>it's more than a mantra, it's our ethos.</li>
          <li>we're a spirited collective on a journey towards personal strength and resilience.</li>
          <li>our fitness adventure takes us beyond the gym and into the world's most captivating landscapes.</li>
          <li>each shared experience fosters growth, wellbeing, and a healthier lifestyle that transcends into our daily lives.</li>
          <li>"take it with you" signifies this transformation.</li>
          <li>it's about carrying forward the lessons, strength, and community spirit we cultivate into our everyday world.</li>
          <li>join us, embrace the journey, and remember - always "take it with you."</li>
        </ul>
      </div>
</div>
  );
}

export default About;
