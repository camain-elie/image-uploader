const express = require('express');
const imageRoutes = require('./routes');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
//app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: "5mb", extended: true, parameterLimit: 5000 }));

app.use('/image', express.static(path.join(__dirname, 'image')));

app.use('/api/image', imageRoutes);

module.exports = app;