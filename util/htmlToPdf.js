const fs = require('fs');
// const pdf = require('html-pdf');
const puppeteer = require('puppeteer');
const path = require('path');

// returns null if and only if succeeds
async function async_fsWrite(filePath, payload){
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, payload, err => err ? reject(err) : resolve(null));
  })
}

async function toPdf(html, userId = 1) {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();

  let htmlTmpPath = path.resolve(__dirname + `./../tmp/html/${userId}.html`);
  let rv = await async_fsWrite(htmlTmpPath, html);
  if(rv != null) throw rv;

  let htmlTransitUrl = process.env.SERVER_ROOT_URL + '/api/toPdf/htmlTransit';
  console.log('new Pdf request, transit:' + htmlTransitUrl);
  await page.goto(htmlTransitUrl, {waitUntil:'networkidle0'});
  const newPdf = await page.pdf({ format: 'A4' });
  await browser.close();
  return newPdf;
}


// async function async_create(html, userId) {
//   let options = {
//     format: 'Letter'
//   };
//
//
//   let pdfPath = path.resolve(__dirname + `./../tmp/pdf/${userId}.pdf`);
//
//   return new Promise((resolve, reject) => {
//     pdf.create(html, options).toFile(pdfPath, (err, res) =>
//       // { filename: '/app/businesscard.pdf' }
//       err ? reject(err) : resolve(res.filename)
//     );
//   });
// }

// returns the path to the generated pdf. null if error occurred
// async function toPdf(html, userId = 1) {
//   try{
//     return await async_create(html, userId);
//   }catch(err){
//     console.log(err);
//     return null;
//   }
// }


module.exports.toPdf = toPdf;
