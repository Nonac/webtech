// const pdf = require('html-pdf');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('./async_fs');

// returns null if and only if succeeds


async function toPdf(html, userId = 1) {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();

  const htmlTmpDir = path.resolve(__dirname + `./../tmp/html`);
  fs.old.mkdir(htmlTmpDir, { recursive: true }, err => console.log(err));
  let htmlTmpPath = path.resolve(__dirname + `./../tmp/html/${userId}.html`);
  let rv = await fs.writeFile(htmlTmpPath, html);
  if(rv != null) throw rv;

  let htmlTransitUrl = process.env.SERVER_ROOT_URL + '/api/toPdf/htmlTransit';
  console.log('new Pdf request, transit:' + htmlTransitUrl);
  await page.goto(htmlTransitUrl, {waitUntil:'networkidle0'});
  const newPdf = await page.pdf({ format: 'A4' });
  await browser.close();
  return newPdf;
}


module.exports.toPdf = toPdf;
