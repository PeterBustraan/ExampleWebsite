const express   = require('express');
const exp       = express();

//Setup simple listener for the main server
exp.listen(8671, () => console.log('Simple Server Started Listening on 8671'))

//Static file Locations
exp.use(express.static(__dirname + '/PageData'))
exp.use(express.static(__dirname + '/css'))
exp.use(express.static(__dirname + '/script'))

//Simple Page Loader
exp.get('/style.css', (req, res)  => res.sendFile('style.css'))
exp.get('/', (req, res) => res.sendFile('index.html'))
