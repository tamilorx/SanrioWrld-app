import React, { useState } from 'react';
import { validateForm } from '../utils/formUtils';
import Form from './form';

const Contact = () => {
  const [formMessage, setFormMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const isFormValid = validateForm(formData.name, formData.email, formData.message, { current: { textContent: formMessage } });

    if (isFormValid) {
      setFormMessage('Form submitted successfully!');
      // Reset form fields if needed
      setFormData({ name: '', email: '', message: '' });
    }
  }

  return (
    <div>
      <Form
        formData={formData}
        setFormData={setFormData}
        formMessage={formMessage}
        setFormMessage={setFormMessage}
        onSubmit={handleSubmit}
      />
      <p id="form-message">{formMessage}</p>
    </div>
  );
};

export default Contact;
