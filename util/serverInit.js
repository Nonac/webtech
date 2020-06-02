
/**
 * Script for auto setting up of the server on a new environment
 * usage:
 *    require('./serverInit');
 */


const fs = require('./async_fs');
const path = require('path');

async function dbInit(){
  const dbDir = path.resolve(__dirname + '/../db');
  const dbPath = path.resolve(dbDir + '/data.db');

  if(fs.old.existsSync(dbPath)){
     return console.log('Database found.');
  }else{
    console.log('Database not found, creating...');

    let rv = await fs.mkdir(dbDir, {recursive:true});
    if(rv === null){
      console.log(`Db dir created: ${dbDir}`);
    }else return;
    rv = await require('./resetDb');
    if(rv === null){
      console.log('Database reset.')
    }else return;

  }
}


(async () => {
  console.log('\nSetting up the server...');
  await dbInit();

  console.log('Server setup finished.\n');
})();
