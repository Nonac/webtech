"use strict";
// todo delete before release
require('./util/test');
const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
// Route middlewares
app.use('/api/user', require('./routes/auth'));
app.use('/api/post', require('./routes/post'));
app.use('/api/template', require('./routes/template'));

const publicDir = __dirname + '/dist/'
app.use( express.static( publicDir ));

app.get('/', (req, res) => {
  res.sendFile(publicDir + 'index.html');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Server listening on port ${port}`));
