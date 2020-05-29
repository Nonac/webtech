const fs = require('fs');
const pdf = require('html-pdf');
const path = require('path');


async function async_create(html, userId) {
  let options = {
    format: 'Letter'
  };


  let pdfPath = path.resolve(__dirname + `./../tmp/pdf/${userId}.pdf`);

  return new Promise((resolve, reject) => {
    pdf.create(html, options).toFile(pdfPath, (err, res) =>
      // { filename: '/app/businesscard.pdf' }
      err ? reject(err) : resolve(res.filename)
    );
  });
}

// returns the path to the generated pdf. null if error occurred
async function toPdf(html, userId = 1) {
  try{
    return await async_create(html, userId);
  }catch(err){
    console.log(err);
    return null;
  }
}


module.exports.toPdf = toPdf;
