const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
const buildPath = path.join(__dirname, '..', 'build')
console.log(buildPath)

app.use(express.static(buildPath))
app.use(express.static(path.join(buildPath)));


app.get('*', function (req, res) {
  res.sendFile(path.join(buildPath, 'index.html'));
});
app.listen(port, () => console.log('server is up'));
