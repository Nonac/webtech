const router = require('express').Router();
const path = require('path');
const fs = require('../util/async_fs');
const formidable = require('formidable');
const _ = require('underscore');
const db = require('../util/dbManager');
const verifyJwt = require('./verifyJwt');


const { validateSaveCv } = require('../util/validation');


const imgTmpDir = path.resolve(__dirname + `/../tmp/img/avatar`);


// returns the fullname (with ext) of the most recent file in the dir
const getMostRecentFileName = async (dir) => {
  let files = await fs.readdir(dir);
  return new Promise((resolve) => {
    resolve(_.max(files, (f) => {
      let fullPath = path.join(dir, f);
      return fs.old.statSync(fullPath).ctime;
    }));
  })
}

// cleans the temp img dir for the user except the most recent file and the one named avatarInDb
const cleanAvatarDir = async(userId, avatarInDb) => {
  let userAvatarDir = path.resolve(`${imgTmpDir}/${userId}`);
  let files = await fs.readdir(userAvatarDir);
  let mostRecentImg = await getMostRecentFileName(userAvatarDir);
  for(let fileName of files){
    if(fileName === mostRecentImg || fileName === avatarInDb){
      continue;
    }
    fs.old.unlink(`${userAvatarDir}/${fileName}`, (err) => {
      if(err) console.log(err);
    });
  }
}


router.get('/avatar',verifyJwt, async(req, res) => {
  let userId = req.userId;
  let avatarName = req.query.name;
  if(userId === undefined) return res.status(500).end();
  if(!avatarName) return res.status(400).end();

  try{
    let userAvatarDir = path.resolve(`${imgTmpDir}/${userId}`);
    // let mostRecentAvatar = await getMostRecentFileName(userAvatarDir);
    let imgPath = path.resolve(`${userAvatarDir}/${avatarName}`);
    // console.log(imgPath);
    res.status(200).sendFile(imgPath,(err) => {
      if(!err) return;
      console.log(err);
      if(err.status === 404){
        return res.status(404).send('no such avatar');
      }
      return res.status(500).end();
    });
    // console.log(`\navatar uId = ${userId} ${imgPath} sent.`)
  }catch(err){
    console.log(err);
    return res.status(500).end();
  }

})

router.get('/has_save', verifyJwt, async(req, res) => {
  let userId = req.userId;
  if(userId === undefined) return res.status(500).end();

  try{
    if(await db.checkExistence('UserCv', 'userId', userId)){
      res.status(200).end();
    }else{
      res.status(404).end();
    }
  }catch(err){
    console.log(err);
    res.status(500).end();
  }

})

// root/api/cvMaker
router.post('/avatar', verifyJwt, async(req, res) =>{

  console.log('\nreceiving avatar...');

  let userId = req.userId;
  if(userId === undefined) return res.status(500).end();

  const imgDir = path.resolve(`${imgTmpDir}/${userId}`);
  if(await fs.mkdir(imgDir, { recursive: true }) !== null){
    return res.status(500).end();
  }

  // make format
  let form = new formidable.IncomingForm();
  form.uploadDir = imgDir;
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if(err) {
      console.log(err);
      res.status(500).send('Upload failed');
    }
    if(files.avatar === undefined) return res.status(400);
    // console.log(`\tsize: ${JSON.stringify(files.avatar.size)}`);
    // console.log(`\tname: ${JSON.stringify(files.avatar.name)}`);
    // console.log(`\tpath: ${JSON.stringify(files.avatar.path)}`);
    // console.log(`\ttype: ${JSON.stringify(files.avatar.type)}`);

    // rename image
    const newName = `${new Date().getTime()}${path.extname(files.avatar.name)}`
    const newPath = path.resolve(`${imgDir}/${newName}`);

    fs.old.rename(files.avatar.path, newPath, (err) => {
      if(err){
        console.log(err);
        return res.status(500).send('Upload failed');
      }
      console.log(`avatar saved at ${newPath}`);
      res.status(201).send({url:`/api/cvMaker/avatar?name=${newName}`});
    });

  })
})

// TODO check different template support
router.post('/save', verifyJwt, async(req, res) =>{
  // added at verifyJwt
  let userId = req.userId;
  if(userId === undefined) return res.status(500).end();

  // validate schema
  const {
    error,
    value: cv
  } = await validateSaveCv(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let templateId = cv.templateId;
  const htmlHeaders = cv.htmlHeaders;
  const cvContents = cv.cvContents;
  const avatarUrl = cv.avatarUrl;

  let dbImgName = path.basename(avatarUrl).match(/(?<=(avatar\?name=)).*/g)[0];
  if(dbImgName === undefined){
    return res.status(400).send('Please use a image with an ordinary file name.');
  }

  const sql = `INSERT OR REPLACE INTO UserCv
                (userId, htmlHeaders, cvContents, templateId, avatarUrl)
                VALUES (?, ?, ?, ?, ?);`
  let rv = await db.async_run(sql,
    [userId, htmlHeaders, cvContents, templateId, avatarUrl]);

  cleanAvatarDir(userId, dbImgName);

  if(rv !== null){
    console.log(rv);
    return res.status(500).end();
  }
  console.log(`user ${userId} saved progress.`);
  return res.status(201).end();
})


// router.delete('/deleteSaved', async(req, res) =>{
//
//
//   res.status(205).end();
// })


router.get('/load', verifyJwt, async(req, res) => {
  let userId = req.userId;
  if(userId === undefined) return res.status(500).end();


  const sql = 'SELECT htmlHeaders, cvContents, templateId, avatarUrl FROM UserCv WHERE userId = ?;'
  let userData = await db.async_get(sql, userId);
  if(userData === null){
    return res.status(404).send('no saved data');
  }

  res.status(200).send(
    {
      htmlHeaders:userData.htmlHeaders,
      cvContents:userData.cvContents,
      templateId:userData.templateId,
      avatarUrl: userData.avatarUrl,
    }
    );
  console.log(`user ${userId} loaded cv`);
})



module.exports = router;
