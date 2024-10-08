const express = require('express');
const router = require('./routes/index.js');

const app = express();
const port = 1245;
const databaseFile = process.argv[2];

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
