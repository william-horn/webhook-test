
const express = require('express');
const routes = require('./controllers');

const app = express();

app.use(routes);
app.listen(3001, () => console.log('Running server'));

