const mongoose = require('mongoose');
const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: { type: String, default: 'New' },  // For CRM pipeline
  assignedTo: String  // Salesman ID
});
module.exports = mongoose.model('Lead', LeadSchema);