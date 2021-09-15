const express = require('express')
const app = express()
const port = 5001

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
