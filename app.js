const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res, next) => {
  console.log('this is home');
  res.render('home');
})

app.get('/about', (res, req, next) => {
  console.log('this is about');
  res.render('about');
})

app.get('/works', (res, req, next) => {
  console.log('this is works');
  res.render('works');
})

const port = 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));