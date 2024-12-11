
import React from 'react';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contactez-nous</h1>
      <p style={styles.text}>Vous pouvez nous contacter via les informations suivantes :</p>
      
      <div style={styles.contactDetails}>
        <p><strong>Email :</strong> contact@medcare.com</p>
        <p><strong>Téléphone :</strong> 438 8950 2458 </p>
        <p><strong>Adresse :</strong> 123 Rue de la Santé, 75000 Hochelaga , Montréal</p>
      </div>
      
      <div style={styles.socialLinks}>
        <p><strong>Suivez-nous sur les réseaux sociaux :</strong></p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>F</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>T</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>L</a>
      </div>
      <div className="home-link">
          <p>Retourner vers l'accueil <a href="/">Accueil</a></p>
        </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  header: {
    fontSize: '2em',
    marginBottom: '20px',
    color: '#2a7f62',
  },
  text: {
    fontSize: '1.2em',
    marginBottom: '30px',
    color: '#333',
  },
  contactDetails: {
    fontSize: '1.1em',
    marginBottom: '30px',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    fontSize: '20px',
    marginTop: '20px',
  },
  socialIcon: {
    textDecoration: 'none',
    color: '#3b5998', // Facebook blue
    fontWeight: 'bold',
    fontSize: '24px',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
  },
};

export default ContactPage;
