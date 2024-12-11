import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./Signup.css"; 

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "", 
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  //const navigate = useNavigate();
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "Le prénom est requis."; 
    if (!formData.username) newErrors.username = "Le nom d'utilisateur est requis.";
    if (!formData.email) newErrors.email = "L'email est requis.";
    if (!formData.password) newErrors.password = "Le mot de passe est requis.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSuccessMessage(data.message);
          setErrorMessage("");  
          setTimeout(() => {
            window.location.href = 'http://localhost:4242'; 
          }, 3000);
        } else {
          setErrorMessage(data.message);
          setSuccessMessage("");  
        }
      } catch (error) {
        console.error("Erreur d'inscription", error);
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
        setSuccessMessage("");  
      } finally {
        setLoading(false);  
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="signup-page"> {/* Encapsulation du formulaire dans un div avec la classe signup-page */}
      <div className="signup-form">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

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

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          </div>

          {errorMessage && <p className="error">{errorMessage}</p>} 
          {successMessage && <p className="success">{successMessage}</p>} 

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Chargement..." : "S'inscrire"}
          </button>
        </form>
        {/* Ajout du lien vers la page de connexion */}
        <div className="login-link">
          <p>Vous avez déjà un compte ? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
