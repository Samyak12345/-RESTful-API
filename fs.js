const express = require('express')
const app = express()
const port = 5001
const fs = require('fs')

app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get("/list_users", (req, res) => {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data) => {
        res.end(data);
    });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
