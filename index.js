const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const upload = multer();
const port = 8080;

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(upload.array()); 
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.enable('verbose errors');

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/redirect', (req, res) => {
  res.redirect('/');
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('500', { 
    error: err,
    loggedin: loggedin
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})