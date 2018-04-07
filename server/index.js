const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const items = require('../database-mongo');
require('dotenv').config()

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();
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

app.post('/notifyUser', (req, res) => {
  console.log(req.body.phone);
  console.log(process.env.TWILIO_AUTH_TOKEN);

  client.messages.create({
    from: process.env.TWILIO_PHONE_NUMBER,
    to: req.body.phone,
    body: "Hello from michael!"
  })
    .then((messsage) => console.log(message.sid));

  res.sendStatus(201);
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
