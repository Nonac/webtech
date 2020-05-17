console.log('test started...');
const db = require('./dbManager');
//db.run("INSERT INTO User (username, userhash) VALUES ('boris', 'asdfghjkl')");
db.serialize(() => {
  db.each(`SELECT username, userhash
           FROM User`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });
});
//console.log(db.run(sql, 'User', 'username', 'boris'));


console.log('test finished...');
