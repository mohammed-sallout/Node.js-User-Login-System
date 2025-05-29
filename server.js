const express = require('express');
require('dotenv').config();
const connectdb = require('./connect_mongo');

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

connectdb();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
