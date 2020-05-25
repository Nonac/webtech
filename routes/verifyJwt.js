const jwt = require('jsonwebtoken');

// jwt authorisation middleware
module.exports = (req, res, next) => {
  const token = req.header('auth-token');
  if(!token) return res.status(401).send('Access Denied: Please log in first.');

  try{
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  }catch(err){
    return res.status(400).send('Please log in again.');
  }
}
