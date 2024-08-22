// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;

// app.use(express.static(path.join(__dirname, '../public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/html/webcam.html'));
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
// =============================================================
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n');
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Server running at http://127.0.0.1:3000/');
// });
// ================================================================

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         // Set the content type to HTML
//         res.setHeader('Content-Type', 'text/html');
        
//         // Read and serve the HTML file
//         fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('Error loading the HTML file');
//             } else {
//                 res.writeHead(200);
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404);
//         res.end('404 Not Found');
//     }
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Server running at http://127.0.0.1:3000/');
// });
// ------------------------------------------working


const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/home.html'));
});

app.get('/detector', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/login.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/about.html'));
});

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/html/profile.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
