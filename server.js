"use strict";
// todo delete before release
require('./util/test');
const express = require('express');
const app = express();

// import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');


// Middlewares
app.use(express.json());
// Route middlewares
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);


const publicDir = __dirname + '/dist/'
app.use( express.static( publicDir ));

app.get('/', (req, res) => {
  res.sendFile(publicDir + 'index.html');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Server listening on port ${port}`));
