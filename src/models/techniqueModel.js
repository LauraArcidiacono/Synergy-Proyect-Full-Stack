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
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  userProvider: String
});

module.exports = model('Technique', techniqueSchema);
