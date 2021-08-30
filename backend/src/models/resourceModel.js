const { model, Schema } = require('mongoose');

const resourceSchema = Schema({
 title: String,
 author: String,
 editorial: String,
 siteEditorial: String,
 image: String
})

module.exports = model('Resource', resourceSchema);