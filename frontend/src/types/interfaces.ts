interface Technique {
  name: String,
  type: String,
  time: Number,
  goal: String,
  material: String,
  task: String,
  workflow: String,
  ilustration: String,
  reviews: [Review],
  userProvider: [String]
}

interface DataBaseTechnique {
    _id: String,
    name: String,
    type: String,
    time: Number,
    goal: String,
    material: String,
    task: String,
    workflow: String,
    ilustration:String,
    reviews: [
        {
            _id: String,
            user: {
                _id: String,
                name: String,
                profession: String,
                city: String,
                avatar: String,
                email: String,
                password: String,
                favoriteTechniques: [
                    String
                ],
                techniquesProvided: [
                    String,
                ],
            },
            description: String,
            score: Number,
        }
    ],
    userProvider: [String]

}

interface Review {
  technique: Technique,
  user: User,
  description: String,
  score: Number
}
interface User {
  name: String,
  profession: String,
  city: String,
  avatar: String, 
  email: String,
  password: String,
  favoriteTechniques: [Technique],
  techniquesProvided: [Technique]
}
interface Resource {
  title: String,
  author: String,
  editorial: String,
  siteEditorial: String,
  image: String
}
interface UserRegisterData {
  name: String,
  profession: String,
  city: String,
  email: String,
  password: String,
}
interface UserLoginData {
  email: String,
  password: String,
}

interface UserWithToken {
  
    user: {
      _id: String,
      name: String,
      profession: String,
      city: String,
      avatar: String,
      email: String,
      password: String,
      favoriteTechniques: [{}],
      techniquesProvided: [{}],
    }

token: String,
refreshToken: String,
}

interface State {
  techniques: [DataBaseTechnique],
  currentTechnique: Technique,
  currentUser: User,
  isUserAuthenticate: Boolean,
  token: String,
  refreshToken: String,
  resources: [Resource]
}

export {
  Technique,
  Review,
  User,
  Resource,
  UserWithToken,
  UserRegisterData,
  UserLoginData,
  State,   
  DataBaseTechnique,
}