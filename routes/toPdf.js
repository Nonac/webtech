const router = require('express').Router();
const db = require('../util/dbManager');
const path = require('path');
const pdf = require('../util/htmlToPdf');

// root/api/template
router.post('/', async(req, res) =>{
  let templateId = req.body.templateId;
  if(templateId == undefined) templateId = 0;

  const htmlHeaders = req.body.htmlHeaders;
  const cvContents = req.body.cvContents;

  const html = `<html><head>${htmlHeaders}</head><body>${cvContents}</body></html>`;
  console.log(html);

  const pdfPath = await pdf.toPdf(html);
  console.log(pdfPath);
  res.download(pdfPath, err => console.log(err));
})


module.exports = router;
