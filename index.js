const express = require('express');

const app = express();

express.static('/', )
app.use(express.static('./static/'))

app.listen(6060);