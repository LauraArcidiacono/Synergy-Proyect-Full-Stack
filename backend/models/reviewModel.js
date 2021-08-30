const { model, Schema } = require('mongoose');

const reviewSchema = Schema({
    technique:  { type: Schema.Types.ObjectId, ref: 'Technique' },
    user:  { type: Schema.Types.ObjectId, ref: 'User' },
    description: String,
    score: Number
})

module.exports = model('Review', reviewSchema);