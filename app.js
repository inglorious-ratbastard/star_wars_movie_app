var express = require('express');
var app = express();
const port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number?', routes.movie_single);

app.get("*", routes.notFound);

app.listen(() => {
  console.log(`Listening at http://localhost:${port}`);
  console.log("R2-D2, you know better than to trust a strange computer");
})
