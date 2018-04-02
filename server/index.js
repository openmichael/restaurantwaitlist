var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var items = require('../database-mongo');

var app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist/'));

app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/user', (req, res) => {
  console.log(req.body);
  items.insert(req.body)
    .then(() => {
      console.log('successfully saved to DB!');
    })
    .catch((error) => {
      console.log(error);
    });

  res.sendStatus(200);
});

app.post('/remove_user', (req, res) => {
  // console.log(req.body);
  items.remove(req.body)
    .then(() => {
      console.log('successfully removed from DB!');
    })
    .catch((error) => {
      console.log(error);
    });

  res.sendStatus(200);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'), (error) => {
    if (error) {
      console.log(error);
    }
  })
})

app.listen(3000, () => {
  console.log('listening on port 3000!');
});
