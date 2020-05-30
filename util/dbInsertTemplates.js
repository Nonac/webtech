const db = require('./dbManager');
const fs = require('fs');
const path = require('path');


let validTemplateIds = [];

async function async_fsReadFile(filename){
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      err ? reject(err): resolve(data);
    })
  })
}


const init = async () => {
  // check valid templates (i.e. with [tId].css and [tId].txt)
  await ( async () => {
    let cssIds = [];
    let txtIds = [];
    const templateDirPath = path.resolve(__dirname + '/../assets/protected/templates');
    await new Promise((resolve) => {
      fs.readdir(templateDirPath, (err, files) => {
        if(err) throw err;
        files.forEach((file) =>{
          let [name, format] = file.split('.');
          switch(format){
            case 'css':
              cssIds.push(name);
              break;
            case 'txt':
              txtIds.push(name);
              break;
            default:
              throw new Error(`unrecognized template file: ${file}`);
          }
        })
        resolve(validTemplateIds.push(...cssIds.filter(el => txtIds.includes(el))));
      })
    })
  })()

  console.log(`valid template ids: ${validTemplateIds}`);


  // insert into db
  await (async () => {
    for(let id of validTemplateIds){
      let css = await async_fsReadFile(`./assets/protected/templates/${id}.css`);
      let description = await async_fsReadFile(`./assets/protected/templates/${id}.txt`);

      const sql = 'INSERT INTO Template (id, css, description) VALUES (?, ?, ?);';
      let rv = await db.async_run(sql, [id, css, description]);
      console.log(rv===null ? `template ${id} inserted` : err.message);
    }
  })();

};


module.exports.init = init;


module.exports.validTemplateIds = validTemplateIds;
