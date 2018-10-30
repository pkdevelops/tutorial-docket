const mongoose = require('mongoose');
const { Schema } = mongoose;

const docketSchema = new Schema({
  title: String,
  items: [String]
});

mongoose.model('docket', docketSchema);
