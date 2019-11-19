/* load configs */
require('dotenv').config();

/* app setup */
const express = require('express')
const app = express()
const db = require('./db/');

app.use(express.json());

// API Routes
// app.use('/api/auth', require('./api/auth'));
app.use('/api/test', require('./api/test'));

app.use(({ message }, req, res, next) => {
  res.status(500).send({ message });
});

const PORT = process.env.PORT || 8000;

db.sync()
  .then(app.listen(PORT, () => console.log(`\nApplication running on port ${PORT}\n`)))
  .catch(e => console.error(`Failed to load app on port ${PORT} with error: ${e}`));
