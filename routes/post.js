const router = require('express').Router();
const verifyJwt = require('./verifyJwt');

router.get('/', verifyJwt, (req, res) => {
  res.json({
    posts:{
      title: 'nmsl',
      description: "oh boy you've logged in. your daddy is surprised."
    }
  })
})

module.exports = router;
