"use strict";
const sqlite3 = require('sqlite3').verbose();

const dbPath = './db/data.db';
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log(`Connected to the ${dbPath} database.`);
});

function resetDb() {
  try {
    db.run(`DROP TABLE IF EXISTS User;`);
    initTables();
  } catch (err) {
    console.log(err);
  }
}

function initTables() {
  try {
    db.run(`CREATE TABLE IF NOT EXISTS User (
      username VARCHAR(100) PRIMARY KEY,
      password VARCHAR(1024) NOT NULL,
      email TEXT NOT NULL UNIQUE
    );`)
    console.log(`db initialised successfully.`);
  } catch (err) {
    console.log(err);
  }
}

// takes in a JSON object
// returns err message if error occurred. undefined otherwise
async function createNewUser(user) {
  const sql = `INSERT INTO User (username, password, email) VALUES (?, ?, ?);`;
  return await new Promise((resolve) => {
    db.run(sql, [user.username, user.password, user.email],
      err => resolve(err ? err.message : undefined))
  });

}

// returns true if and only if a row matches the condition exists
async function checkExistence(tableName, attrName, value) {
  const sql = `SELECT * FROM ? WHERE ? = ?;`;
  return await db.get(sql, [tableName, attrName, value], (err, row) => row != undefined);
}

async function getUsers(actionOnEachRow) {
  let sql = `SELECT * FROM User`;
  await db.all(sql, (err, rows) => {
    if (err) throw err;
    rows.forEach((row) => actionOnEachRow(row));
  })
}

function closeDb() {
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
module.exports.getUsers = getUsers;
module.exports.resetDb = resetDb;
module.exports.checkExistence = checkExistence;
module.exports.createNewUser = createNewUser;
