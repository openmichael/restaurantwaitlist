const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurant');

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

const itemSchema = mongoose.Schema({
  name: String,
  phone: String,
  party: Number,
  date: Date
});

const Item = mongoose.model('Item', itemSchema);

const selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

const insert = function(user) {
  return Item.insertMany(user);
};

const remove = function(_id) {
  return Item.remove({ _id: _id });
}

module.exports.selectAll = selectAll;
module.exports.insert = insert;
module.exports.remove = remove;
