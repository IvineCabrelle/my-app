// LoginForm.js (Frontend)
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Utilisation de useNavigate
import "./Login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);  

  const navigate = useNavigate();


   
   useEffect(() => {
    document.body.classList.add('login-page');
    
    // Nettoyer après le démontage du composant pour éviter les fuites de mémoire
    return () => {
      document.body.classList.remove('login-page');
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "L'email est requis.";
    if (!formData.password) newErrors.password = "Le mot de passe est requis.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        //envoyer une requête POST à /login
        const response = await fetch("http://localhost:5000/login", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Envoi des données de connexion
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Connexion réussie, redirection
          console.log("Connexion réussie", data);
          navigate("/Dashboard");  // Redirige vers le tableau de bord
        } else {
          setErrors({ server: data.message });  // Affichage des erreurs du backend
        }
      } catch (error) {
        // Erreur de connexion (réseau)
        console.error("Erreur réseau", error);
        setErrors({ server: "Erreur de connexion. Veuillez réessayer." });
      } finally {
        setLoading(false);  // Arrêt du loader
      }
    } else {
      setErrors(validationErrors);  // Affichage des erreurs de validation
    }
  };
  

  return (
    <div className="login-form">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        {errors.server && <p className="error server-error">{errors.server}</p>}  { }

        <button type="submit" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
       {/* Ajout du lien vers la page de connexion */}
       <div className="login-link">
          <p>Vous n'avez pas de compte ? <a href="/signup">Signup</a></p>
        </div>
    </div>
  );
};

export default LoginForm;
