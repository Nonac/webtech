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
      let description = await async_fsReadFile(`./assets/protected/templates/${id}.txt`);

      const sql = 'INSERT INTO Template (id, description) VALUES (?, ?);';
      try{
        if(await db.async_run(sql, [id, description])){
          console.log(`template ${id} inserted`);
        }
      }catch(err){
        if(err.code === 'SQLITE_CONSTRAINT') continue; // exists in db, ingore insertion

        throw err;
      }

    }
  })();

};


module.exports.init = init;


module.exports.validTemplateIds = validTemplateIds;
