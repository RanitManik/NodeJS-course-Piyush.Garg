const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  return res.json({message: `Hello from Express Server  ${process.pid}`})
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})