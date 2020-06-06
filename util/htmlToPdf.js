// const pdf = require('html-pdf');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('./async_fs');

// returns null if and only if succeeds

// returns the pdf if succeeds, throw error on failure
async function toPdf(html, userId, jwt, serverRootUrl) {
  const browser = await puppeteer.launch({
    headless:true,
    ignoreHTTPSErrors:true,
    args:['--no-sandbox']});
  const page = await browser.newPage();

  const htmlDir = path.resolve(__dirname + `./../tmp/html`);
  if(await fs.mkdir(htmlDir, { recursive: true }) !== null){
    throw new Error(`unable to create temp html dir for user ${userId}`);
  }

  let htmlTmpPath = path.resolve(`${htmlDir}/${userId}.html`);
  let rv = await fs.writeFile(htmlTmpPath, html);
  if(rv != null) throw rv;

  let htmlTransitUrl = serverRootUrl + '/api/toPdf/htmlTransit';
  console.log(`new Pdf request by user ${userId}`);

  await page.setCookie({name:"jwt", value:jwt, url:serverRootUrl});

  await page.goto(htmlTransitUrl, {waitUntil:'networkidle0'});
  const newPdf = await page.pdf({ format: 'A4' });
  await browser.close();
  return newPdf;
}


module.exports.toPdf = toPdf;
