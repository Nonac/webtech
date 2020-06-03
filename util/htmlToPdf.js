// const pdf = require('html-pdf');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('./async_fs');

// returns null if and only if succeeds


async function toPdf(html, userId, jwt) {
  const browser = await puppeteer.launch({headless:true});
  const page = await browser.newPage();

  let htmlTmpPath = path.resolve(__dirname + `./../tmp/html/${userId}.html`);
  let rv = await fs.writeFile(htmlTmpPath, html);
  if(rv != null) throw rv;

  let htmlTransitUrl = process.env.SERVER_ROOT_URL + '/api/toPdf/htmlTransit';
  console.log(`new Pdf request by user ${userId}`);

  await page.setCookie({name:"jwt", value:jwt, url:process.env.SERVER_ROOT_URL});

  await page.goto(htmlTransitUrl, {waitUntil:'networkidle0'});
  const newPdf = await page.pdf({ format: 'A4' });
  await browser.close();
  return newPdf;
}


module.exports.toPdf = toPdf;
