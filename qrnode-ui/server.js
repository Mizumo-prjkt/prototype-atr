const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets'))); // Serve assets folder

// Serve node_modules
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Serve the html files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'login.html'));
// });





// A simple route for testing
app.get('/api/hello', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`qrnode-ui server listening at http://localhost:${port}`);
});