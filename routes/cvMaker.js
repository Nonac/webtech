const router = require('express').Router();
const path = require('path');
const fs = require('../util/async_fs');
const formidable = require('formidable');
const _ = require('underscore');
const db = require('../util/dbManager');


const { validateAvatarUpload } = require('../util/validation');


function getAvatarUserUrl(userId){
  return `/api/cvMaker/avatar?uId=${userId}`;
}

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


router.get('/avatar', async(req, res) => {
  let userId = req.query.uId;

  try{
    let userAvatarDir = path.resolve(`${imgTmpDir}/${userId}`);
    // let files = await fs.readdir(userAvatarDir);
    // console.log(files);

    let mostRecentAvatar = await getMostRecentFileName(userAvatarDir);
    let imgPath = path.resolve(`${userAvatarDir}/${mostRecentAvatar}`);
    // console.log(imgPath);
    res.status(200).sendFile(imgPath);
    console.log(`\navatar uId = ${userId} ${mostRecentAvatar} sent.`)
  }catch(err){
    console.log(err);
  }

})

// root/api/cvMaker
router.post('/avatar', async(req, res) =>{
  console.log('\nreceiving avatar...');

  // todo check uId via jwt
  let userId = 1;
  const imgDir = path.resolve(`${imgTmpDir}/${userId}`);
  fs.old.mkdir(imgDir, { recursive: true }, err => err ? console.log(err) : null);

  // make format
  let form = new formidable.IncomingForm();
  form.uploadDir = imgDir;
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if(err) return console.log(err);
    if(files.avatar === undefined) return res.status(400);
    console.log(`\tsize: ${JSON.stringify(files.avatar.size)}`);
    console.log(`\tname: ${JSON.stringify(files.avatar.name)}`);
    console.log(`\tpath: ${JSON.stringify(files.avatar.path)}`);
    console.log(`\ttype: ${JSON.stringify(files.avatar.type)}`);

    // todo: only allow a sinlge file in the dir or store it in db
    const newPath = path.resolve(`${imgDir}/avatar${path.extname(files.avatar.name)}`);
    fs.old.rename(files.avatar.path, newPath, (err) => {
      if(err){
        console.log(err);
        return res.status(500).send('Upload failed');
      }
      console.log(`avatar saved at ${newPath}`);
      res.status(201).send({url:getAvatarUserUrl(userId)});
    });

  })
})

router.post('/save', async(req, res) =>{
  // TODO jwt
  let userId = 1;
  let templateId = req.body.templateId;
  if(templateId == undefined) templateId = 0;

  const htmlHeaders = req.body.htmlHeaders;
  const cvContents = req.body.cvContents;

  const sql = `INSERT OR REPLACE INTO UserCv (userId, htmlHeaders, cvContents)
                VALUES (?, ?, ?);`
  let rv = await db.async_run(sql, [userId, htmlHeaders, cvContents]);
  if(rv !== null){
    console.log(rv);
    return res.status(500).end();
  }
  console.log(`user ${userId} saved progress.`);
  return res.status(201).end();
})


router.delete('/deleteSaved', async(req, res) =>{
  res.status(205).end();
})


router.get('/load', async(req, res) => {
  // TODO uid
  // TODO *create image only when needed, delete afterwards
  let userId = 1;
  const sql = 'SELECT htmlHeaders, cvContents FROM UserCv WHERE userId = ?;'
  let userData = await db.async_get(sql, userId);
  if(userData === null){
    return res.status(404).send('no saved data');
  }
  let htmlHeaders = userData.htmlHeaders;
  let cvContents = userData.cvContents;

  res.status(200).send({htmlHeaders:htmlHeaders, cvContents:cvContents});
  console.log(`user ${userId} loaded cv`);
})



module.exports = router;
