"use strict";
const router = require('express').Router();
const db = require('../util/dbManager');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();


const DBError = require('../util/DBError');
const {
  validateRegistation,
  validateLogin
} = require('../util/validation');


// register
router.post('/register', async (req, res) => {
  // validate schema
  const {
    error,
    value: newUser
  } = await validateRegistation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // update into db
  try{
      const thisUser = await db.createNewUser(newUser);
      console.log("\nNew user registered:\n" + JSON.stringify(thisUser));
      // create a jwt
      const token = jwt.sign({id:thisUser.id}, process.env.JWT_SECRET);
      res.status(201).header('auth-token', token).send({username:thisUser.username});
      //res.send('registration succeeded.');
  }catch(err){
    if(err instanceof DBError){
      return res.status(err.status).send(err.message);
    }
    console.error(err.message);
    return res.status(400).send('registration failed.');
  }
})

// login
router.post('/login', async (req, res) =>{
  // validate schema
  const {
    error,
    value: reqUser
  } = await validateLogin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try{
    const dbUser = await db.getUser(reqUser.username);
    if(dbUser === null){
      // return this.$alert(`Username or password is wrong.`,'Error','error')
      return res.status(400).send(`Username or password is wrong.`);
    }

    // chec password
    const isPasswordValid = await bcrypt.compare(reqUser.password, dbUser.userhash);
    if(!isPasswordValid){
      // return this.$alert(`Username or password is wrong.`,'Error','error')
      return res.status(400).send('Username or password is wrong.');
    }

    // create a jwt
    const token = jwt.sign({id:dbUser.id}, process.env.JWT_SECRET);
    res.status(200).header('auth-token', token).send({username:dbUser.username});
    //console.log(JSON.stringify(thisUser));
  }catch(err){
    console.log(err)
  }
})


module.exports = router;
