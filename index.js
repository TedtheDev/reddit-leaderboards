const express = require('express');
const path = require('path');

const port = process.env.PORT || 8888;

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(() => {
    console.log(`Listening on port ${port}`)
});