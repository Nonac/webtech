const router = require('express').Router();
const db = require('../util/dbManager');
const path = require('path');
const pdf = require('../util/htmlToPdf');

// root/api/toPdf
router.post('/', async(req, res) =>{
  let templateId = req.body.templateId;
  if(templateId == undefined) templateId = 0;

  const htmlHeaders = req.body.htmlHeaders;
  const cvContents = req.body.cvContents;

  const html = `<html><head>${htmlHeaders}</head><body>${cvContents}</body></html>`;

  const newPdf = await pdf.toPdf(html);
  res.status(201).send(newPdf);
})


module.exports = router;
