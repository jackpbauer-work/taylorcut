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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/submit_inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          phone_number: phone,
          message
        })
      });

      if (response.ok) {
        setSuccessMessage('Inquiry submitted successfully!');
        setErrorMessage('');
        setName('');
        setEmail('');
        setPhone('');
        SetMessage('');
        setIsLoading(false);
      } else {
        setErrorMessage('An error occurred while submitting the inquiry.');
        setSuccessMessage('');
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage('An error occurred while submitting the inquiry.');
      setSuccessMessage('');
      setIsLoading(false);
    }
  };

return (
  <div className="inquiry-container">
    <div className="inquiry-overlay">
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <h1>Inquiry Form</h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <div className="form-group">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="form-label">Name</span>
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="form-label">Email</span>
        </div>
        <div className="form-group">
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <span className="form-label">Phone Number</span>
        </div>
        <div className="form-group">
          <textarea
            id="message"
            value={message}
            onChange={(e) => SetMessage(e.target.value)}
            required
          />
          <span className="form-label">Message</span>
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
