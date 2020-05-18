console.log('test started...');
const db = require('./dbManager');
//db.run("INSERT INTO User (username, userhash) VALUES ('boris', 'asdfghjkl')");
//db.getUsers((row) => console.log(row));
//console.log(db.run(sql, 'User', 'username', 'boris'));
db.resetDb();


console.log('test finished...');
