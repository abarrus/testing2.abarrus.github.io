const express = require('express');
const app = express();
const port = 3000;

let count = 0;

app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Get the current count
app.get('/count', (req, res) => {
  res.json({ count });
});

// Increment the count
app.post('/increment', (req, res) => {
  count++;
  res.json({ count });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
