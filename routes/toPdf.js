const router = require('express').Router();
const db = require('../util/dbManager');
const path = require('path');
const pdf = require('../util/htmlToPdf');

// root/api/toPdf
router.get('/', async(req, res) =>{
  // TODO uid
  let userId = 1;
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

  const newPdf = await pdf.toPdf(html);
  res.status(201).send(newPdf);
})

// returns the temp html
router.get('/htmlTransit/', async(req, res) => {
  let userId = 1;
  let htmlTmpPath = path.resolve(__dirname + `./../tmp/html/${userId}.html`);
  try{
      res.status(200).sendFile(htmlTmpPath);
  }catch(err){
    res.status(403).end();
  }

})


module.exports = router;
