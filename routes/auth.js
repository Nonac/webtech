"use strict";
const router = require('express').Router();
const db = require('../util/dbManager');

const {
  validateRegistation
} = require('../util/validation');



router.post('/register', async (req, res) => {
  // validate schema
  const {
    error,
    value: newUser
  } = validateRegistation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check existence
  if(db.checkExistence('User', 'username', newUser.username) === true){
        return res.status(400).send(`username ${newUser.username} already exists.`);
  }
  if(db.checkExistence('User', 'email', newUser.email) === true){
        return res.status(400).send(`${newUser.email} has already been registered.`);
  }

  const dbResult = await db.createNewUser(newUser);
  console.log(dbResult);
  res.send('Registration is successful');

})


module.exports = router;
