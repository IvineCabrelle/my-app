import React, { useState } from 'react';
import axios from 'axios'; 
import "./AddPatientForm.css"

const AddPatientForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/patients', formData);
      alert(response.data.message); 
    } catch (error) {
      alert('Erreur lors de l\'ajout du patient');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un patient</h2>

      <label htmlFor="name">Nom</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required />

      
      <label htmlFor="age">Âge</label>
      <input type="number" name="age" value={formData.age} onChange={handleChange} required />
      
      <label htmlFor="gender">Sexe</label>
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Choisir</option>
        <option value="male">Homme</option>
        <option value="female">Femme</option>
      </select>
      
      <label htmlFor="disease">Maladie</label>
      <input type="text" name="disease" value={formData.disease} onChange={handleChange} required />

      <label htmlFor="antecedent">Antécédents médicaux</label>
      <input type="text" name="antecedent" value={formData.antecedent} onChange={handleChange} />

      <label htmlFor="diagnostic">Diagnostic</label>
      <input type="text" name="diagnostic" value={formData.diagnostic} onChange={handleChange} />

      <label htmlFor="medicaments">Médicaments</label>
      <input type="text" name="medicaments" value={formData.medicaments} onChange={handleChange} />

      <label htmlFor="planTraitement">Plan de traitement</label>
      <input type="text" name="planTraitement" value={formData.planTraitement} onChange={handleChange} />

      <label htmlFor="dateVaccination">Date de vaccination</label>
      <input type="date" name="dateVaccination" value={formData.dateVaccination} onChange={handleChange} />

      <label htmlFor="allergies">Allergies</label>
      <input type="text" name="allergies" value={formData.allergies} onChange={handleChange} />

      <label htmlFor="resultatsTest">Résultats de test</label>
      <input type="text" name="resultatsTest" value={formData.resultatsTest} onChange={handleChange} />

      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddPatientForm;
