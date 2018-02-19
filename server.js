let express = require('express');
let app = express();
let path = require('path');
let helmet = require('helmet');
let bodyParser = require('body-parser');
let routes = require('./routes');
let cors = require('cors');
require('dotenv').config();

let PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(routes.home);
app.use('/skills', routes.skills);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function () {
    console.log('Listening on port ' + PORT + ' ' + __dirname);
});