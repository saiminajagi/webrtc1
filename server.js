const express = require('express');

const app = express();
const port = 3000;
var router = express.Router();

// Set public folder as root
app.use(express.static('public'));

// Provide access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Redirect all traffic to index.html
// app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.get('/files', function (req, res) {
  res.sendFile(`${__dirname}/public/index1.html`)
})

// app.use((req, res) => res.sendFile(`${__dirname}/FileBufferReader/index.html`));


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info('listening on %d', port);
});



