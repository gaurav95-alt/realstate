const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

// Get all properties with search (e.g., by location)
router.get('/', async (req, res) => {
  const { location } = req.query;
  const query = location ? { location: new RegExp(location, 'i') } : {};
  const properties = await Property.find(query);
  res.json(properties);
});

// Add new property
router.post('/', async (req, res) => {
  const property = new Property(req.body);
  await property.save();
  res.json(property);
});

// Get property by ID (for details page)
router.get('/:id', async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.json(property);
});

module.exports = router;