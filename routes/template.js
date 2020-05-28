const router = require('express').Router();
const db = require('../util/dbManager');
const path = require('path');

// root/api/template
router.get('/template.css', async(req, res) =>{
  let templateId = req.query.id != undefined ? req.query.id : 1; // 1 by default
  // returns {css: data};
  //const css = await db.getTemplate(templateId);
  const cssFilePath = await path.resolve(__dirname + `/../util/templates/${templateId}.css`);
  res.sendFile(cssFilePath);
})


module.exports = router;
