var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: String,
  phone: String,
  party: Number,
  date: Date
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var insert = function(user) {
  return Item.insertMany(user);
};

module.exports.selectAll = selectAll;
module.exports.insert = insert;
