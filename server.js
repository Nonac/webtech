"use strict";
// todo delete before release
// require('./util/test');
(async function(){
  // tiny dbms interface
  if(process.argv.includes('-sql')){
    return require('./util/dbManager').dbms();
  }

  await require('./util/serverInit');
  await require('./util/dbInsertTemplates').init();

  const express = require('express');
  const app = express();

  const cookieParser = require('cookie-parser')

  // Middlewares
  app.use(express.json());
  app.use(cookieParser());
  // Route middlewares
  app.use('/api/user', require('./routes/auth'));
  app.use('/api/template', require('./routes/template'));
  app.use('/api/toPdf', require('./routes/toPdf'));
  app.use('/api/cvMaker', require('./routes/cvMaker'));

  const publicDir = __dirname + '/dist/'
  app.use( express.static( publicDir ));

  const assetsDir = __dirname + '/assets/public'
  app.use( express.static( assetsDir ));

  app.get('/', (req, res) => {
    res.sendFile(publicDir + 'index.html');
  })


  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log (`Server listening on port ${port}`));

})();
