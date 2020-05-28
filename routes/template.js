const router = require('express').Router();
const db = require('../util/dbManager');

// root/api/template
router.get('/', async(req, res) =>{
  let templateId = req.query.id;
  // returns {css: data};
  const css = await db.getTemplate(templateId);
  res.status(200).send(css);
})


module.exports = router;
