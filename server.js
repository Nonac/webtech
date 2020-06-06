"use strict";
// todo delete before release
// require('./util/test');
(async function(){
  // tiny dbms interface
  if(process.argv.includes('-sql')){
    return require('./util/dbManager').dbms();
  }

  // hosting at cloud
  let is_localhost = false;
  if(!process.argv.includes('-cloud')){
    is_localhost = true;
  }

  await require('./util/serverInit');
  await require('./util/dbInsertTemplates').init();



  const fs = require('fs');
  const https = require('https');
  const express = require('express');
  const app = express();

  const bodyParser = require('body-parser');
  const cookieParser = require('cookie-parser')

  // Middlewares
  app.use(bodyParser.json({limit:'10mb'}));
  app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
  app.use(cookieParser());
  // Route middlewares
  app.use('/api/user', require('./routes/auth'));
  app.use('/api/template', require('./routes/template'));
  app.use('/api/toPdf', require('./routes/toPdf'));
  app.use('/api/cvMaker', require('./routes/cvMaker'));

  // public dirs
  const publicDir = __dirname + '/dist/'
  app.use( express.static( publicDir ));

  const assetsDir = __dirname + '/assets/public'
  app.use( express.static( assetsDir ));

  // root get request
  app.get('/', (req, res) => {
    res.sendFile(publicDir + 'index.html');
  })


  // listening
  const port = process.env.PORT || 443;
  let key, cert;
  if(is_localhost){
    key = fs.readFileSync('./util/https/localhost/server.key');
    cert = fs.readFileSync('./util/https/localhost/server.cert');
  }else{

  }

  https.createServer({
    key: key,
    cert: cert,
  }, app).listen(port, () => {
    console.log(`https server listening on port ${port}`);
  })


  // http server
  const app_http = express();
  const port_http = process.env.PORT_HTTP || 80;
  // rediret http to https
  const httpsLocalServerRoot = `https://localhost:${port}`;
  app_http.use((req, res, next) => {
    console.log(req.connection.remoteAddress);
    if(!req.secure) {
      if(is_localhost){
        return res.redirect(httpsLocalServerRoot);
      }

      return res.redirect(`https://${req.headers.host}${req.url}`);
    }
    next();
  })


  app_http.listen(port_http, () => console.log (`http Server listening on port ${port_http}`));

})();
