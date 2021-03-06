"use strict";
const sqlite3 = require('sqlite3').verbose();
const dbPath = './db/data.db';

const bcrypt = require('bcryptjs');

const DBError = require('../util/DBError');


const dbPromise = (async() => {
    return new Promise((resolve) => {
      let db = new sqlite3.Database(dbPath,
        err => {
          if(err) throw err;
          console.log('db connected');
          resolve(db);
        });
    })
  })();


// promise wrapper for db.run
// returns null if and only if succeeds
async function async_run(sql, params){
  let db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.run(sql, params, err =>
      err ? reject(err) : resolve(null));
  })
}

// promise wrapper for db.get
// returns the first row of the result table. null if the table is empty
// tablenames and attrnames are not allowed in params
async function async_get(sql, params){
  let db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) =>
      err ? reject(err) : resolve(row ? row : null));
  })
}

// returns all rows if and only if succeeds
async function async_all(sql, params) {
  let db = await dbPromise;
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      err? reject(err) : resolve(rows);
    })
  })
}






// takes in a JSON object
// returns err message if error occurred. null otherwise
async function createNewUser(newUser) {
  await dbPromise;
  // check existence
  let is_existing = await checkExistence('User', 'username', newUser.username);
  if(is_existing){
    throw new DBError(400, `username ${newUser.username} already exists.`);
  }
  is_existing = await checkExistence('User', 'email', newUser.email);
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
  let db = await dbPromise;
  await db.all(sql, (err, rows) => {
    if (err) throw err;
    rows.forEach((row) => actionOnEachRow(row));
  })
}

async function getTemplate(id) {
  let sql = `SELECT css FROM Template WHERE id = ?;`;
  try{
    const css = await async_get(sql, [id]);
    return css;
  }catch(err){
    throw err;
  }

}

async function closeDb(dbToClose = db) {
  return new Promise((resolve, reject) => {
    dbToClose.close(err => err ? reject(err) : resolve(null));
  })
}

// simple dbms for debugging
async function dbms(){
  let readlineSync = require('readline-sync');
  while(true) {
    let l = readlineSync.question("sql:");
    if(l === 'e' || l === 'exit') {
      process.exit();
    }

    try{
      let rows = await async_all(l);
      console.log(rows);
    }catch(err){
      console.log(err);
    }


  }
}

module.exports.dbPromise = dbPromise;
module.exports.closeDb = closeDb;
module.exports.getUsers = getUsers;
module.exports.checkExistence = checkExistence;
module.exports.createNewUser = createNewUser;
module.exports.getUser = getUser;
module.exports.getTemplate = getTemplate;

module.exports.async_run = async_run;
module.exports.async_get = async_get;
module.exports.async_all = async_all;

module.exports.dbms = dbms;
