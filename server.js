"use strict";
// todo delete before release
require('./util/test');

const express = require('express');
const app = express();

const db = require('./util/dbManager');
db.init();

// import routes
const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);


const publicDir = __dirname + '/dist/'
app.use( express.static( publicDir ));

app.get('/', (req, res) => {
  res.sendFile(publicDir + 'index.html');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Server listening on port ${port}`));
