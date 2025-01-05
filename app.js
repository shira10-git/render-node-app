const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const RENDER_API_KEY = process.env.RENDER_API_KEY;
const RENDER_API_URL = 'https://api.render.com/v1/services';
const a=1;
app.use(cors());

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(RENDER_API_URL, {
            headers: {
                Authorization: `Bearer ${RENDER_API_KEY}`,
            },
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching services:', error.message);
        res.status(500).json({ error: 'Failed to fetch services.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
