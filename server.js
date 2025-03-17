const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files like images and css
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// Define routes for each HTML page
app.get('/create-post', (req, res) => {
    res.sendFile(path.join(__dirname, 'create-post.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/sign-up', (req, res) => {
    res.sendFile(path.join(__dirname, 'sign-up.html'));
});

app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, 'forgot-password.html'));
});

// Default route to serve the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("Request served by node app");
});

// Start the server
app.listen(port, () => {
    console.log('Node app is listening on http://localhost:3001');
});
