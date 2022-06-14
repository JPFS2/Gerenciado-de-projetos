const express = require('express');
const app = express();
const routs = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(routs);

const host = '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host, () => {
    console.log('Acessar https://git.heroku.com/dry-tundra-57760.git');
})


