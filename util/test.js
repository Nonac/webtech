const db = require('./dbManager');
//const DBError = require('../util/DBError');
const assert = require('assert');

const fs = require('./async_fs');
const path = require('path');

// const assert = (expr, msg) => {
//   try{
//     Assert(expr, msg);
//   }catch(err){
//     console.error(msg);
//     console.error(err.message);
//
//   }
// }

// test cases
const testInit = async() => {
  console.log('test started...');

  // drop and create tables
  let rv = await db.resetDb();
  assert(rv === null, rv);

  rv = await db.async_get(`SELECT * FROM User WHERE username = ?;`,['BorisJohnson']);
  assert(rv === null, rv);
  // create two users
  rv = await db.createNewUser(
    {username:"BorisJohnson", password:"123456", email:"boris@gmail.com"});
  assert(rv.username === "BorisJohnson" , JSON.stringify(rv));

  rv = await db.createNewUser(
    {username:"ThereasaMay", password:"123456", email:"may@gmail.com"});
  assert(rv.username === "ThereasaMay" , JSON.stringify(rv));
  // getUser
  rv = await db.async_get(`SELECT * FROM User WHERE username = ?;`,['BorisJohnson']);
  assert(rv !== null, rv);

  rv = await db.getUser('BorisJohnson');
  assert(rv !== null, rv);

  rv = await db.getUser('ThereasaMay');
  assert(rv !== null, rv);

  rv = await db.getUser('DonaldTrump');
  assert(rv === null, JSON.stringify(rv));



  console.log('test finished...');
};

testInit();

// scratch space
(async() =>
{
  // require('./htmlToPdf.js');

  const htmlTmpDir = path.resolve(__dirname + `./../tmp/html`);
  fs.old.mkdir(htmlTmpDir, { recursive: true }, err => err ? console.log(err) : null);
})();
