const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.use(express.json());

app.use('/api/employees', require('./routes/employee.routes'));

module.exports = app;
