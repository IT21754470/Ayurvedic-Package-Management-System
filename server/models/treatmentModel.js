const mongoose = require('mongoose');

const schemaData = mongoose.Schema(
  {
    name: String,
    image: String,
    packageName: String,
    price: Number,
    description1: String,
    description2: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('treatment', schemaData);



