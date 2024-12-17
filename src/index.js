const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const port = 3000;
const handlebars = require('express-handlebars'); // Import engine từ express-handlebars

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extName: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


console.log("hello",__dirname)// Chỉ định thư mục chứa file view

app.get('/', (req, res) => {
  res.render('home'); // Render file 'home.handlebars'
});

app.get('/news', (req, res) => {
  res.render('news'); // Render file 'home.handlebars'
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
