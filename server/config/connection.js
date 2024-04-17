const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/fitness_tracker_2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
