const User =
` CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    userhash VARCHAR(1024) NOT NULL,
    email TEXT NOT NULL UNIQUE
  );`;

const Template =
` CREATE TABLE IF NOT EXISTS Template (
    id INTEGER PRIMARY KEY,
    description TEXT NOT NULL
);`

const UserCv =
` CREATE TABLE IF NOT EXISTS UserCv (
    userId INTEGER PRIMARY KEY,
    htmlHeaders TEXT NOT NULL,
    cvContents TEXT NOT NULL,
    templateId INTEGER NOT NULL,
    avatarUrl TEXT NOT NULL,
    FOREIGN KEY (userId) REFERENCES User(id)
);`




module.exports = [User, Template, UserCv];
