// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import PrivacyPolicy from "./components/PrivacyPolicy";
import ContactPage from './components/ContactPage';
import Dashboard from './components/Dashboard';
import AddPatientForm from './components/AddPatientForm';
import EditPatientForm from './components/EditPatientForm';
import DeletePatient from './components/DeletePatientForm';


function App() {
  return (
    <Router>  {  }
      <Routes>
        <Route path="/" element={<HomePage />} />  { }
        <Route path="/login" element={<LoginForm />} />  {}
        <Route path="/signup" element={<SignUpForm />} />  {}
        <Route path="/privacy-policy" Component={PrivacyPolicy} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/add-patient" element={<AddPatientForm />} />
        <Route path="/patients/edit/:idTW" element={<EditPatientForm />} /> {/* Ajouter la route pour la modification */}
        <Route path="/delete-patient/:id" element={<DeletePatient />} />  {/* Ajout de la route pour supprimer un patient */}
        
      </Routes>
    </Router>
  );
}

export default App;
