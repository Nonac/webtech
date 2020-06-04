const path = require('path')
const sqlite3 = require('sqlite3').verbose();

async function createDb(){
  const dbPath = path.resolve('./db/data.db');

  let rv = await (async() => {
    return new Promise((resolve) => {
      let db = new sqlite3.Database(dbPath,
        err => {
          if(err) throw err;
          resolve(db);
        });
    })
  })();

  const dbm = require('./dbManager');
  await dbm.closeDb(rv);
  return null;
}


module.exports = (async function(){

  await createDb();


  const db = require('./dbManager');

  async function resetDb() {
    const tableNames = ['User', 'Template', 'UserCv'];

    for(let tableName of tableNames){
      let rv = await db.async_run(`DROP TABLE IF EXISTS ${tableName};`);
      if(rv !== null) return rv;
    }
    return await initTables();
  }

  async function initTables() {
    const dbSchemas = require('./dbSchemas');
    for(let sql of dbSchemas){
      await db.async_run(sql);
      console.log(`${sql}\n`);
    }
    return null;
  }

  await resetDb();
  console.log('db created');
})();
