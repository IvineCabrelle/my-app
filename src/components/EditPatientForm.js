import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPatientForm = () => {
  const { id } = useParams();  // Récupère l'ID du patient depuis l'URL
  const navigate = useNavigate();

  console.log('ID récupéré depuis l\'URL:', id);  // Ajoute cette ligne pour déboguer

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    disease: '',
    antecedent: '',
    diagnostic: '',
    medicaments: '',
    planTraitement: '',
    dateVaccination: '',
    allergies: '',
    resultatsTest: ''
  });

  const [loading, setLoading] = useState(true);  // Indicateur de chargement
  const [error, setError] = useState(null);  // Gestion des erreurs

  useEffect(() => {
    console.log('URL actuelle:', window.location.href);  // Log pour vérifier l'URL
    if (!id) {
      console.error('Erreur: L\'ID du patient est manquant');
      alert('L\'ID du patient est manquant dans l\'URL');
      return;
    }

    const fetchPatient = async () => {
      try {
        setLoading(true);  // Démarrer le chargement
        const response = await axios.get(`http://localhost:5000/patients/${id}`);
        
        if (response.data && response.data.patient) {
          setFormData(response.data.patient);
        } else {
          throw new Error('Données du patient non trouvées');
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données du patient:', error);
        setError('Erreur lors du chargement des données du patient');
      } finally {
        setLoading(false);  // Fin du chargement
      }
    };

    fetchPatient();
  }, [id]);  // Le fetchPatient se déclenche quand l'ID change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      alert('L\'ID du patient est manquant');
      return;
    }

    try {
      await axios.put(`http://localhost:5000/patients/${id}`, formData);
      alert('Patient modifié avec succès');
      navigate('/dashboard'); // Rediriger vers le dashboard après modification
    } catch (error) {
      alert('Erreur lors de la modification du patient');
      console.error('Erreur de modification:', error);
    }
  };

  if (loading) {
    return <p>Chargement des données...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Modifier un patient</h2>
      <label htmlFor="name">Nom</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      
      <label htmlFor="age">Âge</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      
      <label htmlFor="gender">Sexe</label>
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="male">Homme</option>
        <option value="female">Femme</option>
      </select>
      
      <label htmlFor="disease">Maladie</label>
      <input type="text" name="disease" value={formData.disease} onChange={handleChange} required />
      
      <button type="submit">Modifier</button>
    </form>
  );
};

export default EditPatientForm;
