import React from 'react';

/**
 * Home page component that serves as the landing page for the application
 * Provides an overview and navigation guidance for users
 * @component
 * @returns {JSX.Element} Welcome page with application introduction
 */
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Project 3! 🚀</h1>
      <p>
        This is a modern React application featuring a comprehensive todo management system 
        and a contact form with validation. Built with React, React Router, and modern CSS.
      </p>
      <div style={{ 
        display: 'flex', 
        gap: '2rem', 
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '2rem'
      }}>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          maxWidth: '250px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>📝 Todo Management</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
            Add, complete, and filter your todos with an intuitive interface
          </p>
        </div>
        <div style={{
          background: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          maxWidth: '250px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>📧 Contact Form</h3>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
            Get in touch with comprehensive form validation and feedback
          </p>
        </div>
      </div>
      <p style={{ marginTop: '2rem', fontWeight: '500' }}>
        Use the navigation bar above to explore the <strong>Todos</strong> and <strong>Contact</strong> features!
      </p>
    </div>
  );
};

export default Home;
