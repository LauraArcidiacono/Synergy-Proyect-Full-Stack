const { model, Schema } = require('mongoose');

const userSchema = Schema({
  name: String,
  profession: String,
  city: String,
  avatar: { type: String, default: 'https://i.ibb.co/GPnrGDw/Default-profile-picture-avatar-photo-placeholder-Vector-illustration.jpg' },
  email: String,
  password: String,
  favoriteTechniques: [{ type: Schema.Types.ObjectId, ref: 'Technique' }],
  techniquesProvided: [{ type: Schema.Types.ObjectId, ref: 'Technique' }]
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
