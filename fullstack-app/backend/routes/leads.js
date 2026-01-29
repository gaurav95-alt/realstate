const express = require('express');
const Lead = require('../models/Lead');
const router = express.Router();

// Get all leads (for CRM dashboard)
router.get('/', async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

// Add new lead
router.post('/', async (req, res) => {
  const lead = new Lead(req.body);
  await lead.save();
  res.json(lead);
});

// Update lead status (e.g., from 'New' to 'Contacted')
router.put('/:id', async (req, res) => {
  const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(lead);
});

module.exports = router;