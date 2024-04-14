import React from 'react';

const Form = ({ formData, setFormData, formMessage, setFormMessage, onSubmit }) => {
  const handleFormSubmit = (event) => {
    onSubmit(event);
  };

  return (
    <div className="section contact-container"> {/* Add the section class and contact-container class */}
      <h2>Contact Us</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
        <button type="submit" className="hello-kitty-button">Submit</button> {/* Utilize the existing button class */}
      </form>
      <p className="form-message">{formMessage}</p> {/* Utilize the existing form-message class */}
    </div>
  );
};

export default Form;
