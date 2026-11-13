const express = require('express');
const app = express();

// DirectAdmin assigns a dynamic port via process.env.PORT
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Your CodeHost Node.js deployment is working perfectly.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});