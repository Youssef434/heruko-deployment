const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use('/', express.static(path.join(__dirname, 'movies-explorer')))

app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, 'movies-explorer', 'index.html'));
})

app.listen(port, () => {
  console.log("server running at port " + port)
})
