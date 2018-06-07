const express   = require('express');
const exp       = express();


exp.listen(8671, () => console.log('Simple Server Started Listening on 8671'))

exp.get('/', (req, res) => res.send('Let\'s Get It Started'))
