import React, { useState } from 'react';
import '../css/Inquiry.css';

function Inquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, SetMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // You'll handle success and error messages differently if you do AJAX form submission.
    // For simplicity, here's just setting the isLoading state.
  };

  return (
    <div className="inquiry-container">
      <div className="inquiry-overlay">
        <form className="inquiry-form" onSubmit={handleSubmit} name="inquiryForm" data-netlify="true">
          <h1>inquiry form</h1>
          <input type="hidden" name="form-name" value="inquiryForm" />
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className="form-label">name</span>
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="form-label">email</span>
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <span className="form-label">phone number</span>
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => SetMessage(e.target.value)}
              required
            />
            <span className="form-label">message</span>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Inquiry;
