"use strict";
const sqlite3 = require('sqlite3').verbose();

const dbPath = './db/data.db';
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log(`Connected to the ${dbPath} database.`);
});

function initTables() {
  try{
    db.run(`CREATE TABLE IF NOT EXISTS User (
      username VARCHAR(100) PRIMARY KEY,
      userhash VARCHAR(1024) NOT NULL
    );`)
    console.log(`db initialised successfully.`);
  }catch(err){
    console.log(err);
  }
}

function closeDb(){
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
}


module.exports = db;
module.exports.close = closeDb;
module.exports.init = initTables;
