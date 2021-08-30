
const { model, Schema } = require('mongoose');

const techniqueSchema = Schema({
 name: String,
 type: String,
 time: Number,
 goal: String,
 material: String,
 task: String,
 workflow: String, 
 ilustration: String,
 review: [{ type: Schema.Types.ObjectId, ref: 'Review'}]
})

module.exports = model('Technique', techniqueSchema);