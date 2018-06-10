const express   = require('express');
      pug       = require('pug');
      exp       = express();

//Setup simple listener for the main server
    exp.listen(8671, () => console.log('Simple Server Started Listening on 8671'))

//Jade Setup
    exp.set('views','./PageData')
    exp.set('view engine', 'pug')
    exp.engine('pug', pug.__express)
    exp.locals = {
        title: 'Peter\'s Website Jam'
    }

//Static files
    exp.use(express.static(__dirname + '/img'))
    exp.use(express.static(__dirname + '/css'))
    exp.use(express.static(__dirname + '/script'))

//Simple Page Loader
    exp.get('/profilePicture.jpg', (req, res) => res.sendFile('profilePicture.jpg'))
    exp.get('/style.css', (req, res)  => res.sendFile('style.css'))
    exp.get('/main.js', (req,res) => res.sendFile('main.js'))
    exp.get('/', (req, res) => res.render('index'))
    //TO-DO Prevent error screen
    exp.get('/:pageId', async (req, res) => {
        res.render(String(req.params.pageId))
    })
