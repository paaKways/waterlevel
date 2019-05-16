/* const
  express = require('express'),
  serveStatic = require('serve-static'),
  history = require('connect-history-api-fallback'),
  port = process.env.PORT || 5000,
  path = require('path')

const app = express()

app.use(history())
app.use(serveStatic(path.join(__dirname, '/pwa-mat')))
app.listen(port) */
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname, '/pwa-mat'));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);