"use strict";
const router = require('express').Router();
const db = require('../util/dbManager');
const bcrypt = require('bcryptjs');

const {
  validateRegistation
} = require('../util/validation');



router.post('/register', async (req, res) => {
  // validate schema
  const {
    error,
    value: newUser
  } = await validateRegistation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check existence
  let is_existing = await db.checkExistence('User', 'username', newUser.username);
  if(is_existing){
        return res.status(400).send(`username ${newUser.username} already exists.`);
  }
  is_existing = await db.checkExistence('User', 'email', newUser.email);
  if(is_existing){
        return res.status(400).send(`${newUser.email} has already been registered.`);
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const userhash = await bcrypt.hash(newUser.password, salt);

  // update into db
  let dbResult = await db.createNewUser(
    {username: newUser.username, userhash: userhash, email: newUser.email});
  if(dbResult){
    console.error(dbResult);
    return res.status(400).send('Registration failed.');
  }

  res.send('Registration was successful');
})


module.exports = router;
