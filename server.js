
const express = require('express');
const routes = require('./controllers');

const app = express();

app.use(routes);
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3001, () => console.log('Running server'));

