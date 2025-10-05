// server/server.js
// chatgpted as fuck

// --- Import required modules ---
const express = require('express');
const cors = require('cors'); // allows frontend & backend to communicate
const path = require('path');

// --- Create the Express app ---
const app = express();
const PORT = 3001;

// --- Middleware setup ---
app.use(cors());
app.use(express.json());

// --- Load mock data (example) ---
const publications = require('./mock-data/publications'); // make sure this file exists

// --- Routes (API endpoints) ---

// 1️⃣ Test route - confirms backend is running
app.get('/api/status', (req, res) => {
  res.json({ status: 'Backend is running successfully!' });
});

// 2️⃣ Route to get all publications (frontend can fetch this)
app.get('/api/publications', (req, res) => {
  res.json(publications);
});

// 3️⃣ (Optional) Route for a single publication by ID
app.get('/api/publications/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const publication = publications.find(pub => pub.id === id);
  
  if (publication) {
    res.json(publication);
  } else {
    res.status(404).json({ error: 'Publication not found' });
  }
});

// --- Start the server ---
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
