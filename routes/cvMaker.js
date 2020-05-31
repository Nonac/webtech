const router = require('express').Router();
const path = require('path');
const fs = require('../util/async_fs');


const { validateAvatarUpload } = require('../util/validation');


function getAvatarUserUrl(userId){
  return `/api/cvMaker/avatar?uId=${userId}`;
}

const imgTmpDir = path.resolve(__dirname + `/../tmp/img/avatar`);


router.get('/avatar', async(req, res) => {
  let userId = req.query.uId;

  try{
    let userAvatarDir = path.resolve(`${imgTmpDir}/${userId}`);
    let files = await fs.readdir(userAvatarDir);
    console.log(files);

    // todo: check files.length === 1
    let imgPath = path.resolve(`${userAvatarDir}/${files[0]}`);
    console.log(imgPath);
    res.status(200).sendFile(imgPath);

  }catch(err){
    console.log(err);
  }

})

// root/api/cvMaker
router.post('/avatar', async(req, res) =>{
  console.log('\nreceiving avatar...');
  // validate
  const {
    error,
    value: image
  } = await validateAvatarUpload(req.body);
  if (error){
    console.log(error.details[0].message);
    return res.status(400).send('Upload failed');
  }

  // todo check uId via jwt
  let userId = 1;
  const imgDir = path.resolve(`${imgTmpDir}/${userId}`);
  fs.old.mkdir(imgDir, { recursive: true }, err => console.log(err));
  const imgPath = path.resolve(`${imgDir}/avatar.${image.format}`);
  // todo: only allow a sinlge file in the dir or store it in db
  try{
    if(await(fs.writeFile(imgPath, req.body.data)) === null){
        console.log(`avatar saved. ${getAvatarUserUrl(userId)}`)
        res.status(201).send({url:getAvatarUserUrl(userId)});
    }

  }catch(err){
    console.log(err);
    return res.status(500).send('Upload failed.');
  }

})



module.exports = router;
