"use strict";
const sqlite3 = require('sqlite3').verbose();

const dbPath = './db/data.db';
// const db = new sqlite3.Database(dbPath, (err) => {
//   if (err) {
//     console.error(err.message);
// 	return;
//   }
//   console.log(`Connected to the ${dbPath} database.`);
// });
const db = new sqlite3.Database(dbPath, err =>
      console.log(err ? err.message : "connected to db.")
);


// promise wrapper for db.run
// returns null if and only if succeeds
async function async_run(sql, params){
  return new Promise((resolve) => {
    db.run(sql, params, err => resolve(err ? err.message : null));
  })
}

// promise wrapper for db.get
// returns the first row of the result table. null if the table is empty
async function async_get(sql, params){
  return new Promise((resolve) => {
    db.get(sql, params, (err, row) =>  {
      if(err) resolve(err.message);
      resolve(row ? row : null);
    });
  })
}



async function resetDb() {
  let rv = await async_run(`DROP TABLE IF EXISTS User;`);
  return rv == null ? initTables() : rv;
}

async function initTables() {
  return async_run(`CREATE TABLE IF NOT EXISTS User (
    username VARCHAR(100) PRIMARY KEY,
    userhash VARCHAR(1024) NOT NULL,
    email TEXT NOT NULL UNIQUE
  );`);
}



// takes in a JSON object
// returns err message if error occurred. null otherwise
async function createNewUser(user) {
  const sql = `INSERT INTO User (username, userhash, email) VALUES (?, ?, ?);`;
  return async_run(sql, [user.username, user.userhash, user.email]);
}

// todo : security
// tableNames are not allowed as parameter in sqlite3
// returns true if and only if a row matches the condition exists
async function checkExistence(tableName, attrName, value) {
  const sql = `SELECT * FROM ${tableName} WHERE ? = ?`;
  return await async_get(sql, [attrName, value]) != null;
}

async function getUsers(actionOnEachRow) {
  let sql = `SELECT * FROM User`;
  await db.all(sql, (err, rows) => {
    if (err) throw err;
    rows.forEach((row) => actionOnEachRow(row));
  })
}

async function closeDb() {
  return new Promise((resolve) => {
    db.close((err) => resolve(console.log(err ? err.message : "db closed.")));
  })
}


module.exports = db;
module.exports.close = closeDb;
module.exports.init = initTables;
module.exports.getUsers = getUsers;
module.exports.resetDb = resetDb;
module.exports.checkExistence = checkExistence;
module.exports.createNewUser = createNewUser;

// todo: delete
module.exports.async_get = async_get;
