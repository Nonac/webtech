const router = require('express').Router();
const db = require('../util/dbManager');
const path = require('path');
const pdf = require('../util/htmlToPdf');
const verifyJwt = require('./verifyJwt');

// root/api/toPdf
router.get('/', verifyJwt, async(req, res) =>{
  const serverRootUrl = `${req.protocol}://${req.headers.host}`
  let userId = req.userId;
  if(userId === undefined) return res.status(500).end();

  const sql = 'SELECT htmlHeaders, cvContents, templateId FROM UserCv WHERE userId = ?;'
  let userData = await db.async_get(sql, userId);
  if(userData === null){
    return res.status(404).send('no saved data');
  }
  let htmlHeaders = userData.htmlHeaders;
  let cvContents = userData.cvContents;
  let templateId = userData.templateId;

  const html =
  `<html><head>${htmlHeaders}</head><body><div class="cv-contents">${cvContents}</div></body></html>`;

  try{
    const newPdf = await pdf.toPdf(html, userId, req.jwt, serverRootUrl);
    res.status(201).send(newPdf);
  }catch(err){
    console.log(err);
    return res.status(500).end();
  }
})

// returns the temp html
router.get('/htmlTransit/', verifyJwt, async(req, res) => {
  let userId = req.userId;
  if(userId === undefined) return res.status(500).end();

  let htmlTmpPath = path.resolve(__dirname + `./../tmp/html/${userId}.html`);
  try{
      res.status(200).sendFile(htmlTmpPath);
  }catch(err){
    res.status(403).end();
  }

})


module.exports = router;
