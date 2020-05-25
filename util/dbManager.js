"use strict";
const sqlite3 = require('sqlite3').verbose();
const dbPath = './db/data.db';

const bcrypt = require('bcryptjs');

const DBError = require('../util/DBError');
const dbSchemas = require('./dbSchemas');
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
  return new Promise((resolve, reject) => {
    db.run(sql, params, err =>
      err ? reject(err.message) : resolve(null));
  })
}

// promise wrapper for db.get
// returns the first row of the result table. null if the table is empty
// tablenames and attrnames are not allowed in params
async function async_get(sql, params){
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) =>
      err ? reject(err.message) : resolve(row ? row : null));
  })
}



async function resetDb() {
  let rv = await async_run(`DROP TABLE IF EXISTS User;`);
  return rv == null ? initTables() : rv;
}

async function initTables() {
  for(let sql of dbSchemas){
    await async_run(sql);
  }
  return null;
}


// takes in a JSON object
// returns err message if error occurred. null otherwise
async function createNewUser(newUser) {
  // check existence
  let is_existing = await db.checkExistence('User', 'username', newUser.username);
  if(is_existing){
    throw new DBError(400, `username ${newUser.username} already exists.`);
  }
  is_existing = await db.checkExistence('User', 'email', newUser.email);
  if(is_existing){
    throw new DBError(400, `${newUser.email} has already been registered.`);
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const userhash = await bcrypt.hash(newUser.password, salt);

  // update db
  const sql = `INSERT INTO User (username, userhash, email) VALUES (?, ?, ?);`;
  let rv = await async_run(sql, [newUser.username, userhash, newUser.email]);
  if(rv != null) {
    console.error(rv.message);
    throw new DBError(400, 'Registration failed.');
  }
  return await getUser(newUser.username);
}

async function getUser(username) {
  const sql = 'SELECT * FROM User WHERE username = ?;'
  return await async_get(sql, username);
}

// todo : security
// tableNames are not allowed as parameter in sqlite3
// returns true if and only if a row matches the condition exists
async function checkExistence(tableName, attrName, value) {
  const sql = `SELECT * FROM ${tableName} WHERE ${attrName} = ?;`;
  return await async_get(sql, [value]) != null;
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
module.exports.getUser = getUser;

// todo: delete
module.exports.async_get = async_get;
