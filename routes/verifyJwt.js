const jwt = require('jsonwebtoken');

// jwt authorisation middleware
module.exports = (req, res, next) => {
  const token = JSON.parse(JSON.stringify(req.cookies)).jwt;
  if(!token) return res.status(401).send('Access Denied: Please log in first.');
  try{
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = verified.id;
    console.log(`\nuser ${req.userId} authorised.`);
    next();
  }catch(err){
    return res.status(400).send('Please log in again.');
  }
}
