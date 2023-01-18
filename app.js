const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  console.log('this is home');
  const name = 'Canela';
  res.render('home', {
    name: name
  });
})

app.get('/about', (res, req, next) => {
  console.log('this is about');
  const name = 'Canela';
  res.render('about', {
    name: name
  });
})

app.get('/works', (res, req, next) => {
  console.log('this is works');
  const name = 'Canela';
  res.render('works', {
    name: name
  });
})

app.get('/gallery', (req, res, next) => {
  console.log('this is gallery');
  const name = 'Canela';
  res.render('works', {
    name: name
  })
})

const port = 3000;
app.listen(port, () => console.log(`Application running at port ${port}`));