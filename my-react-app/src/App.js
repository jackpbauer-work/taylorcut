import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Upcoming from './components/Upcoming';
import About from './components/About';
import NotFound from './components/NotFound';
import FAQs from './components/FAQs';
import Inquiry from './components/Inquiry';
import ScrollButton from './components/ScrollButton';
import Price from './components/Price';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// This function is called by the `LoginPage` component when the user logs in
function handleLogin() {
  // Update the `Link` components to point to the new page
  const links = document.querySelectorAll('.link');
  links.forEach((link) => {
    link.setAttribute('href', '/');
  });

  // Redirect the user to the new page
  redirectToStripeCheckout();
}

function redirectToStripeCheckout() {
  window.location.href = 'https://book.stripe.com/28o4kf4Db63f1UIeUW';
}


function App() {
  return (
    <div>
      <NavBar />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollButton />
    </div>
  );
}

export default App;
