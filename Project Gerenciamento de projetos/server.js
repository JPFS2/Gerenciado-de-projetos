const express = require('express');
const app = express();
const routs = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(routs);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
})

