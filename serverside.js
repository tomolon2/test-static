const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, '/')));

// Simple CORS middleware (optional if front-end is same origin)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Dice roller API
app.get('/roll', (req, res) => {
  const dice = Math.floor(Math.random() * 6) + 1;
  res.json({ result: dice });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
