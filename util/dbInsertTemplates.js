const db = require('./dbManager');
const fs = require('fs');

const maxTemplateId = 1;

(() => {
  for(let id=0; id<=maxTemplateId; id++){
    fs.readFile(`./util/templates/${id}.css`, 'utf8', async (err, data) => {
      if(err) throw err;

      const sql = 'INSERT INTO Template (id, css) VALUES (?, ?);';
      let rv = await db.async_run(sql, [id, data]);
      console.log(rv===null ? `template ${id} inserted` : err.message);

    })
  }
})();
