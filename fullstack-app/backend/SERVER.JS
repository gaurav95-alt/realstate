const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/fullstackapp', { useNewUrlParser: true });

// Routes
app.use('/api/leads', require('./routes/leads'));
app.use('/api/properties', require('./routes/properties'));

app.listen(5000, () => console.log('Server running on port 5000'));