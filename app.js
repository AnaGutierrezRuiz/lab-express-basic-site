const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res, next) => {
  console.log('this is home');
  res.render('home', {
    name: name
  });
})

app.get('/about', (res, req, next) => {
  console.log('this is about');
  res.render('about', {
    name: name
  });
})

app.get('/works', (res, req, next) => {
  console.log('this is works');
  res.render('works', {
    name: name
  });
})

const port = 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));