const express = require('express'),
    gradient = require('gradient-string');

const app = express();
app.use(express.json());

const PORT = 4020;
app.listen(PORT, () => console.log(gradient('cyan', 'pink')(`Blaze it on port ${PORT}`)));