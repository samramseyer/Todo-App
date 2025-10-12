import React, { useState } from 'react';

/**
 * Contact form component with validation and controlled inputs
 * Collects user information and handles form submission
 * @component
 * @returns {JSX.Element} Contact form with input validation
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Handles input field changes and clears related errors
   * @param {Event} e - Input change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  /**
   * Validates form data before submission
   * @returns {boolean} True if form is valid, false otherwise
   */
  const validateForm = () => {
    const newErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Comments validation
    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments are required';
    } else if (formData.comments.trim().length < 10) {
      newErrors.comments = 'Comments must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form submission with validation
   * @param {Event} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted successfully:', formData);
      
      // Reset form and show success message
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        comments: ''
      });
      setIsSubmitted(true);
      
      // Hide success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#718096' }}>
        We'd love to hear from you! Send us a message and we'll respond as soon as possible.
      </p>

      {isSubmitted && (
        <div style={{
          background: '#48bb78',
          color: 'white',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName && (
            <span id="firstName-error" style={{ color: '#e53e3e', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {errors.firstName}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName && (
            <span id="lastName-error" style={{ color: '#e53e3e', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {errors.lastName}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <span id="email-error" style={{ color: '#e53e3e', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments *</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Tell us what's on your mind..."
            aria-describedby={errors.comments ? "comments-error" : undefined}
            aria-invalid={errors.comments ? "true" : "false"}
          />
          {errors.comments && (
            <span id="comments-error" style={{ color: '#e53e3e', fontSize: '0.875rem', marginTop: '0.25rem' }}>
              {errors.comments}
            </span>
          )}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;