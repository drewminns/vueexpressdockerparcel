const path = require('path');
const Bundler = require('parcel-bundler');
const express = require('express');

const app = express();

const PORT = 8080;

const file = path.join(__dirname, 'index.html');

if (process.env.NODE_ENV === 'production') {
  app.set('view options', { layout: false });
  app.use(express.static(__dirname + '/dist'));

  app.get('/', function(req, res) {
    res.render(path.join(__dirname + 'dist' + 'index.html'));
  });
} else {
  const bundler = new Bundler(file, { hmrPort: 4343 });
  app.use(bundler.middleware());
}

app.listen(PORT, () =>
  console.log(`Client running on http://localhost:${PORT}`)
);
