const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080

const fs = require('fs')
const path = require('path')

// Automatically load all vue components
app.get('/autoload-components', (req, res) => {
    let files = fs.readdirSync(path.join(__dirname, 'src/components'))
    files = files.filter(js => js.substr(-3) === '.js')
    let html = files.map(js => `<script src="./components/${js}"></script>`).join('')
    res.send(`document.write('${html}')`)
})

// Automatically load all game entities
app.get('/autoload-game-entities', (req, res) => {
    let files = fs.readdirSync(path.join(__dirname, 'src/entities'))
    files = files.filter(js => js.substr(-3) === '.js')
    let html = files.map(js => `<script src="./entities/${js}"></script>`).join('')
    res.send(`document.write('${html}')`)
})

app.get('/api', (req, res) => {
    res.json({msg: 'connected to server api'})
})

app.use(express.static(__dirname + "/src/"));
app.get('*', function(req, res) {
  res.sendfile(__dirname + "/src/index.html");
});

app.listen(PORT, () => {
    console.log('API listening on ', PORT);
})