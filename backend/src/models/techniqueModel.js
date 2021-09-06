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
  userProvider: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = model('Technique', techniqueSchema);
