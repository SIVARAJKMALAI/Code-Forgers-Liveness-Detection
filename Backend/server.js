const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "Frontend" directory
app.use('/Frontend', express.static(path.join(__dirname, '../Frontend')));

// Serve HTML files from the "Frontend/html" directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/index.html'));
});


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/about.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/services.html'));
});

app.get('/liveness', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/html/liveness detection.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
