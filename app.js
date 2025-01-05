// app.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Render API Key - מומלץ לשמור כ-Environment Variable
const RENDER_API_KEY = process.env.RENDER_API_KEY || 'your_render_api_key_here';

// הגדרת ה-Endpoint
app.get('/services', async (req, res) => {
  try {
    // שליחת בקשה ל-Render API
    const response = await axios.get('https://api.render.com/v1/services', {
      headers: {
        Authorization: `Bearer ${RENDER_API_KEY}`
      }
    });

    // שליחת התגובה ללקוח
    res.json(response.data);
} catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});