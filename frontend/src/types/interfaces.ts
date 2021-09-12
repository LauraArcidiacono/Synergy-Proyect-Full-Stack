interface Technique {
  _id: string,
  name: string,
  type: string,
  time: number,
  goal: string,
  material: string,
  task: string,
  workflow: string,
  ilustration: string,
  reviews: Array<Review>,
  __v: number,
  userProvider: string
}

interface FavoriteTechniques {
  userId: string,
  techniqueId: string
}

interface UpdatedFavorites {
  dataIds: {
    userId: string,
    techniqueId: string
  }
  favoriteTechniques: Array<Technique>
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
                favoriteTechniques: Array<Technique>,
                techniquesProvided: Array<TechniquesProvided>,
            },
            description: string,
            score: number,
        }
    ],
    userProvider: Array<string>

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
  favoriteTechniques: Array<Technique>,
  techniquesProvided: Array<TechniquesProvided>
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

interface UserId {
  userId: string
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
      favoriteTechniques: Array<DataBaseTechnique>,
      techniquesProvided: Array<TechniquesProvided>,
    }
  token: string,
  refreshToken: string,
}

interface TechniquesProvided {
  _id: string,
  ilustration: string,
  name: string
}

interface State {
  techniques: Array<Technique>,
  currentTechnique: Technique,
  currentUserTechniquesProvided: Array<Technique>,
  currentUser: User,
  isUserAuthenticate: Boolean,
  token: string,
  refreshToken: string,
  resources: Array<Resource>
}

export {
  Technique,
  FavoriteTechniques,
  TechniquesProvided,
  UpdatedFavorites,
  Review,
  NewReview,
  User,
  Resource,
  UserWithToken,
  UserId,
  UserRegisterData,
  UserLoginData,
  State,   
  DataBaseTechnique,
}