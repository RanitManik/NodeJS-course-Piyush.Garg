const cluster = require('cluster');
const os = require('os');
const express = require("express");

const totalCpus = os.cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
} else {
  const app = express();
  const port = 5000;

  app.get('/', (req, res) => {
    return res.json({message: `Hello from Express Server  ${process.pid}`})
  })

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })
}

