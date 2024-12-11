import React, { useState } from 'react';
import logo from './LOGO.jpg';  
import { useNavigate, Link } from 'react-router-dom';  
import AddPatientForm from './AddPatientForm';
import EditPatientForm from './EditPatientForm';
import DeletePatientForm from './DeletePatientForm';
import "./doc.jpg"

const Dashboard = () => {
  const [formType, setFormType] = useState(null);  // Gérer quel formulaire afficher
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');  
  };

  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <header style={styles.header}>
      <Link to="/" style={styles.logoLink}>
        <img src={logo} alt="Logo" style={styles.logo} />
        </Link>
        <nav style={styles.nav}>
          <button onClick={() => setFormType('add')} style={styles.navButton}>Ajouter un patient</button>
          <button onClick={() => setFormType('edit')} style={styles.navButton}>Modifier un patient</button>
          <button onClick={() => setFormType('delete')} style={styles.navButton}>Supprimer un patient</button>
          <button onClick={handleLogout} style={styles.navButton}>Se déconnecter</button>
        </nav>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        {formType === 'add' && <AddPatientForm />}
        {formType === 'edit' && <EditPatientForm />}
        {formType === 'delete' && <DeletePatientForm />}
      </main>

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

// Styles
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: '"Roboto", sans-serif',
    backgroundImage: 'url("./doc.jpg")',  
    backgroundSize: 'cover',  
    backgroundPosition: 'center',  
    backgroundAttachment: 'fixed',  
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: 'rgba(44, 62, 80, 0.8)',  
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: 1,  
  },
  logo: {
    width: '50px',
    height: 'auto',
  },
  nav: {
    display: 'flex',
    gap: '20px',
  },
  navButton: {
    backgroundColor: '#16a085',
    border: 'none',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  main: {
    flexGrow: 1,
    padding: '20px',
    backgroundColor: 'rgba(236, 240, 241, 0.9)',  
    marginBottom: '60px', 
  },
  footer: {
    backgroundColor: '#16a085',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  footerLinks: {
    display: 'flex',
    gap: '20px',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.3s',
  },
  footerLinkHover: {
    color: '#1abc9c',
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
  },
  socialIcon: {
    color: '#fff',
    fontSize: '20px',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  copyright: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default Dashboard;
