const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/image', (req, res) => {
    res.send({ message: 'post image'});
})

app.get('/api/image', (req,res) => {
    res.send({ message: 'get image'});
})

module.exports = app;