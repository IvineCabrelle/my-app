const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  disease: { type: String, required: true },
  antecedent: { type: String, required: true },  // Champ obligatoire
  diagnostic: { type: String, required: true },  // Champ obligatoire
  medicaments: { type: String, required: true },  // Champ obligatoire
  planTraitement: { type: String, required: true },  // Champ obligatoire
  dateVaccination: { type: Date, required: true },  // Champ obligatoire
  allergies: { type: String, required: true },  // Champ obligatoire
  resultatsTest: { type: String, required: true },  // Champ obligatoire
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
