import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import logo from './LOGO.jpg';  
import service1 from './service1.jpeg'; 
import service2 from './service2.jpg';  
import service5 from './service5.jpg';  
import service7 from './service7.jpg';  

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false); 


  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const monChat = () => {
    window.location.href = 'http://localhost:3001'; 
  };
  const multi_modal = () => {
    window.location.href = 'http://localhost:1234'; 
  };
  const text = () => {
    window.location.href = 'http://localhost:2626'; 
  };

  return (
    <div style={styles.container}>
      {/* Header avec logo à gauche et liens à droite */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo MedCare" style={styles.logo} />
        </div>
        <div style={styles.navLinks}>
          <Link to="/login" style={styles.link}>Se connecter</Link>
          <Link to="/signup" style={styles.link}>S'inscrire</Link>
        </div>
      </header>

      {/* Section des services */}
      <div style={styles.servicesSection}>
        <h2>Nos Services</h2>
        <div style={styles.servicesGrid}>
          <Link to="/dashboard" 
                style={styles.serviceLink}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
            <img 
              src={service1} 
              alt="Service 1" 
              style={{ 
                ...styles.serviceImage, 
                ...(isHovered ? styles.stylesHover : {}) 
              }} 
            />
            <p style={styles.serviceText}>Patients</p>
          </Link>
          <Link  
                style={styles.serviceLink}
                onMouseEnter={handleMouseEnter} 
                onClick={monChat}
                onMouseLeave={handleMouseLeave}>
            <img 
              src={service2} 
              alt="Service 2" 
              style={{ 
                ...styles.serviceImage, 
                ...(isHovered ? styles.stylesHover : {}) 
              }} 
            />
            <p style={styles.serviceText}>Assistance Chatbot IA</p>
          </Link>
          <Link to="/service5" 
                style={styles.serviceLink}
                onMouseEnter={handleMouseEnter} 
                onClick={text}
                onMouseLeave={handleMouseLeave}>
            <img 
              src={service5} 
              alt="Service 5" 
              style={{ 
                ...styles.serviceImage, 
                ...(isHovered ? styles.stylesHover : {}) 
              }} 
            />
            <p style={styles.serviceText}>Analyse des Rapports médicaux</p>
          </Link>
          <Link to="" 
                style={styles.serviceLink}
                onMouseEnter={handleMouseEnter} 
                onClick={multi_modal}
                onMouseLeave={handleMouseLeave}>
            <img 
              src={service7} 
              alt="Service 7" 
              style={{ 
                ...styles.serviceImage, 
                ...(isHovered ? styles.stylesHover : {}) 
              }} 
            />
            <p style={styles.serviceText}>Analyse Multimodale</p>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLinks}>
            <Link to="/privacy-policy" style={styles.footerLink}>Politique de confidentialité</Link>
            <Link to="/contact" style={styles.footerLink}>Contact</Link>
          </div>
          <div style={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>F</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>T</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>L</a>
          </div>
        </div>
        <p style={styles.copyright}>© 2024 MedCare - Tous droits réservés</p>
      </footer>
    </div>
  );
};

// Définition des styles
const styles = {
  container: {
    height: '100vh',  // Utilisation de toute la hauteur de la fenêtre
    display: 'flex',  // Utilisation de flexbox
    flexDirection: 'column',  // Organise le contenu en colonne
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    backgroundColor: '#2a7f62',
    color: '#fff',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: '50px',
    height: 'auto',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
  },
  servicesSection: {
    padding: '40px 20px',
    textAlign: 'center',
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  },
  serviceLink: {
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  serviceImage: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  serviceText: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    backgroundColor: '#2a7f62',
    color: '#fff',
    padding: '20px 40px',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: 'auto',  // Cette propriété pousse le footer en bas
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  footerLinks: {
    display: 'flex',
    gap: '20px',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
  },
  socialIcon: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    backgroundColor: '#3b5998',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyright: {
    marginTop: '10px',
    fontSize: '12px',
    color: '#ccc',
  },

  // Définition des styles de survol
  stylesHover: {
    transform: 'scale(1.1) translateY(-10px)',  // Agrandir l'image et la déplacer
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',  // Ajout d'un effet d'ombre
  },
};

export default HomePage;
