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

interface TechniqueProvidedToDelete {
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
    __v: number,
    userProvider: Array<string>

}

interface Review {
  _id: string,
  technique: string,
  user: string,
  description: string,
  score: number,
  __v: number
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

interface TechniqueId {
  techniqueId: string
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
  filteredTechniques: Array<Technique>,
  currentTechnique: Technique,
  currentUserTechniquesProvided: Array<Technique>,
  currentTechniqueReviews: Array<Review>,
  currentUser: User,
  isUserAuthenticate: boolean,
  token: string,
  refreshToken: string,
  resources: Array<Resource>
  reviews: Array<Review>, 
}

export {
  Technique,
  FavoriteTechniques,
  TechniquesProvided,
  TechniqueId,
  TechniqueProvidedToDelete,
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