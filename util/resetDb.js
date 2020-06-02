const path = require('path')
const sqlite3 = require('sqlite3').verbose();

async function createDb(){
  const dbPath = path.resolve('./db/data.db');
  return new Promise((resolve) => {
    new sqlite3.Database(dbPath,
      err => {
        if(err) throw err;
        resolve(null);
      });
  })
}


module.exports = (async function(){

  try{
    await createDb();
  }catch(err){
    throw err;
  }

  const db = require('./dbManager');

  async function resetDb() {
    const tableNames = ['User', 'Template', 'User'];

    for(let tableName of tableNames){
      let rv = await db.async_run(`DROP TABLE IF EXISTS ${tableName};`);
      if(rv !== null) return rv;
    }
    return initTables();
  }

  async function initTables() {
    const dbSchemas = require('./dbSchemas');
    for(let sql of dbSchemas){
      await db.async_run(sql);
    }
    return null;
  }

  return await resetDb();
})();
