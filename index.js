const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.send("Get All");
});

app.get('/:id', (req, res, next) => {
  res.send(`get id= ${req.params.id}`);
})

app.post('/', (req, res, next) => {
  res.send(`post id= ${req.params.id}`);
});

app.put('/:id', (req, res, next) => {
  res.send(`put id= ${req.params.id}`);
});

app.delete('/:id', (req, res, next) => {
  res.send(`delete id= ${req.params.id}`);
});

app.all('*', function (req, res) {
  res.sendFile(__dirname+'/public/404.html');
})

app.listen(port, (req, res, next) => {
  console.log(`Application running at ${port}`);
})