const mongoose = require('mongoose')

const schema = mongoose.Schema

const productSchema = new schema({
  pname: { type: String, required: true },

  pdesc: { type: String, required: true },

  pprice: { type: Number, required: true },

  pqty: {
    type: Number,
    required: true
  },

  pic: {
    type: String,
  },
})

module.exports = mongoose.model('Product', productSchema)

