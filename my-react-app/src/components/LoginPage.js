import React, { useState } from 'react';
import '../css/LoginPage.css';

function LoginPage({ handleLogin }) {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const user = await loginUser(form);
    handleLogin(user); // Pass the user object as an argument
    redirectToStripeCheckout();
  } catch (error) {
    // Handle login error
    console.log(error);
  }
  setForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
};

  const loginUser = async (credentials) => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const user = await response.json();
      return user;
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const redirectToStripeCheckout = () => {
    window.location.href = 'https://book.stripe.com/28o4kf4Db63f1UIeUW';
  };

return (
  <div className = 'login-page'>
    <form onSubmit={handleSubmit} className = 'login-form'>
      <input
        name="first_name"
        type="text"
        placeholder="Enter first name"
        value={form.first_name}
        onChange={handleChange}
      />
      <input
        name="last_name"
        type="text"
        placeholder="Enter last name"
        value={form.last_name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="text"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter password"
        value={form.password}
        onChange={handleChange}
      />
      <input type="submit" value="Login" />
    </form>
  </div>
);
}

export default LoginPage;
