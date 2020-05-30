const router = require('express').Router();
const db = require('../util/dbManager');
const path = require('path');

const {validTemplateIds} = require('../util/dbInsertTemplates');

// root/api/template
router.get('/template.css', async(req, res) =>{
  let templateId = req.query.id != undefined ? req.query.id : 1; // 1 by default
  // returns {css: data};
  //const css = await db.getTemplate(templateId);
  const cssFilePath = path.resolve(__dirname + `/../assets/protected/templates/${templateId}.css`);
  res.sendFile(cssFilePath);
})

// get an array of template briefs containing img link and description
router.get('/templateBriefs', async(req, res) => {
  let briefs = [];

  const sql = `SELECT id, description FROM Template`;
  try{
      let rows = await db.async_all(sql);
      for(let row of rows){
        let brief = {
          id: row.id,
          description: row.description,
          thumbnailUrl: `${process.env.SERVER_ROOT_URL}/img/templates/thumbnails/${row.id}.jpg`
        }
        briefs.push(brief);
      }

  }catch(err){
    console.log(err);
  }

  res.status(200).send(briefs);
})

module.exports = router;
