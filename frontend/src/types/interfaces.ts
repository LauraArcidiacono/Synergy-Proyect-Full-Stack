interface Technique {
  _id: string;
  name: string,
  type: string,
  time: number,
  goal: string,
  material: string,
  task: string,
  workflow: string,
  ilustration: string,
  reviews: [Review],
  userProvider: [string]
}

interface FavoriteTechniques {
  userId: string,
  techniqueId: string
}

interface DataBaseTechnique {
    _id: string,
    name: string,
    type: string,
    time: number,
    goal: string,
    material: string,
    task: string,
    workflow: string,
    ilustration:string,
    reviews: [
        {
            _id: string,
            user: {
                _id: string,
                name: string,
                profession: string,
                city: string,
                avatar: string,
                email: string,
                password: string,
                favoriteTechniques: [
                    string
                ],
                techniquesProvided: [
                    string,
                ],
            },
            description: string,
            score: number,
        }
    ],
    userProvider: [string]

}

interface Review {
  technique: string,
  user: User,
  description: string,
  score: number
}

interface NewReview {
  technique: Technique,
  user: User
}

interface User {
  name: string,
  profession: string,
  city: string,
  avatar: string, 
  email: string,
  password: string,
  favoriteTechniques: [Technique],
  techniquesProvided: [Technique]
}
interface Resource {
  title: string,
  author: string,
  editorial: string,
  siteEditorial: string,
  image: string
}
interface UserRegisterData {
  name: string,
  profession: string,
  city: string,
  email: string,
  password: string,
}
interface UserLoginData {
  email: string,
  password: string,
}

interface UserWithToken {
  
    user: {
      _id: string,
      name: string,
      profession: string,
      city: string,
      avatar: string,
      email: string,
      password: string,
      favoriteTechniques: [{}],
      techniquesProvided: [{}],
    }

token: string,
refreshToken: string,
}

interface State {
  techniques: [DataBaseTechnique],
  currentTechnique: Technique,
  currentUserTechniquesProvided: [DataBaseTechnique],
  currentUser: User,
  isUserAuthenticate: Boolean,
  token: string,
  refreshToken: string,
  resources: [Resource]
}

export {
  Technique,
  FavoriteTechniques,
  Review,
  NewReview,
  User,
  Resource,
  UserWithToken,
  UserRegisterData,
  UserLoginData,
  State,   
  DataBaseTechnique,
}