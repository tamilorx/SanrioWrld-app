export function validateForm(name, email, message, formMessageRef) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name.trim() === '') {
      formMessageRef.current.textContent = 'Please enter your name.';
      return false;
    }
  
    if (!emailPattern.test(email.trim())) {
      formMessageRef.current.textContent = 'Please enter a valid email address.';
      return false;
    }
  
    if (message.trim() === '') {
      formMessageRef.current.textContent = 'Please enter your message.';
      return false;
    }
  
    formMessageRef.current.textContent = 'Form submitted successfully!';
    return true;
  }
  