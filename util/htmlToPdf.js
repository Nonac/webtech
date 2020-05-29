const fs = require('fs');
const pdf = require('html-pdf');
const path = require('path');


async function async_create(html, userId) {
  let options = {
    format: 'Letter'
  };

  const extraHtml =
    `<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">`;

  let pdfPath = path.resolve(__dirname + `./../tmp/pdf/${userId}.pdf`);

  return new Promise((resolve, reject) => {
    pdf.create(extraHtml + html, options).toFile(pdfPath, (err, res) =>
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
