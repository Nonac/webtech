const User =
` CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    userhash VARCHAR(1024) NOT NULL,
    email TEXT NOT NULL UNIQUE
  );`;

const Template =
` Create TABLE IF NOT EXISTS Template (
    id INTEGER PRIMARY KEY,
    css TEXT NOT NULL,
    description TEXT NOT NULL
);`

module.exports = [User, Template];
