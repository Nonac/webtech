console.log('test started...');
const db = require('./dbManager');

(async() =>
{

  let rv = await db.resetDb();
  console.log(rv ? rv : "db reset.")
  rv = await db.createNewUser(
    {username:"BorisJohnson", userhash:"123456", email:"boris@gmail.com"});
  console.log(rv ? rv : "boris created")
  //

  // rv = await db.createNewUser({
  //       username:"ThereasaMay", userhash:"123456", email:"may@gmail.com"
  // });
  // console.log(rv ? rv : "may created")

  await db.getUsers(row => console.log(row));


  console.log('test finished...');
})();
