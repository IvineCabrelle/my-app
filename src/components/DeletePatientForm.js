import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientsList = () => {
  const [patients, setPatients] = useState([]);

  // Récupérer la liste des patients depuis l'API
  const fetchPatients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/patients');
      setPatients(response.data); // Remplacer par la structure des données reçues
    } catch (error) {
      console.error('Erreur de récupération des patients', error);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  // Fonction de suppression d'un patient
  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce patient ?')) {
      try {
        await axios.delete(`http://localhost:5000/patients/${id}`);
        alert('Patient supprimé avec succès.');
        fetchPatients(); // Réactualise la liste des patients après suppression
      } catch (error) {
        alert('Erreur lors de la suppression du patient');
      }
    }
  };

  return (
    <div>
      <h2>Liste des patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>
            {patient.name} - {patient.age} ans - {patient.gender}
            <button onClick={() => handleDelete(patient._id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientsList;
