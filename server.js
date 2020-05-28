"use strict";
// todo delete before release
require('./util/test');
const express = require('express');
const app = express();

const db = require('./util/dbManager');
const path = require('path');

// Middlewares
app.use(express.json());
// Route middlewares
app.use('/api/user', require('./routes/auth'));
app.use('/api/post', require('./routes/post'));
// app.use('/api/template', require('./routes/template'));

const publicDir = __dirname + '/dist/'
app.use( express.static( publicDir ));

app.get('/', (req, res) => {
  res.sendFile(publicDir + 'index.html');
})

app.get('/template.css', async(req, res) =>{
  let templateId = req.query.id != undefined ? req.query.id : 1; // 1 by default
  // returns {css: data};
  //const css = await db.getTemplate(templateId);
  const cssFilePath = path.resolve(__dirname + `/util/templates/${templateId}.css`);
  res.sendFile(cssFilePath);
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Server listening on port ${port}`));
