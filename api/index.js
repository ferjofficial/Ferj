const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Farcaster POST request handler for frame content
app.post('/api/frame-handler', (req, res) => {
    res.status(200).json({
        type: 'form',
        title: 'Ferj',
        url: 'https://ferj.com' // Replace with your actual Mini App URL
    });
});

// Route to serve your Mini App
app.get('/mini-app', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mini-app.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
