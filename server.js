const express = require('express');
const app = express();

const publicDir = __dirname + '/dist/'
app.use( express.static( publicDir ));

app.get('/', (req, res) => {
  res.sendFile(publicDir + 'index.html');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Server listening on port ${port}`));
