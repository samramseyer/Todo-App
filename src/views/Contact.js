import React, { useState } from 'react';

/**
 * Contact form component with validation and controlled inputs
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.comments.trim()) {
      newErrors.comments = 'Comments are required';
    } else if (formData.comments.trim().length < 10) {
      newErrors.comments = 'Comments must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted successfully:', formData);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        comments: ''
      });
      setIsSubmitted(true);

      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="contact-container page-container">
      <header className="page-header">
        <p className="page-eyebrow">Get in touch</p>
        <h1>Contact Us</h1>
        <p className="page-subtitle">
          We'd love to hear from you. Send a message and we'll respond as soon as possible.
        </p>
      </header>

      <div className="contact-card">
        {isSubmitted && (
          <div className="success-banner" role="status">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                aria-invalid={errors.firstName ? 'true' : 'false'}
              />
              {errors.firstName && (
                <span id="firstName-error" className="form-error">
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
                aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                aria-invalid={errors.lastName ? 'true' : 'false'}
              />
              {errors.lastName && (
                <span id="lastName-error" className="form-error">
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <span id="email-error" className="form-error">
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
              aria-describedby={errors.comments ? 'comments-error' : undefined}
              aria-invalid={errors.comments ? 'true' : 'false'}
            />
            {errors.comments && (
              <span id="comments-error" className="form-error">
                {errors.comments}
              </span>
            )}
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
