// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Define a route for your API
app.get('/api', (req, res) => {
    res.send('Hello, World!');
});
app.get('/', (req, res) => {
    res.send('Server Running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
