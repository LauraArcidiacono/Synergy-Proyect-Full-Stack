import {State} from '@/types/interfaces';

const state = {
    techniques: [{
        _id: "",
        name: "",
        type: "",
        time: 0,
        goal: "",
        material: "",
        task: "",
        workflow: "",
        ilustration: "",
        reviews: [{
                _id: "",
                technique: {
                    _id: "",
                    name: "",
                    type: "",
                    time: 0,
                    goal: "",
                    material: "",
                    task: "",
                    workflow: "",
                    ilustration: "",
                    reviews: [
                        "",
                    ],
                },
                user: {
                    _id: "",
                    name:"",
                    profession: "",
                    city: "",
                    avatar: "",
                    email: "",
                    password: "",
                    favoriteTechniques: [
                        "",
                    ],
                    techniquesProvided: [],
                },
                description: "",
                score: 5,
        }],
        userProvider: "" 
        }],

    currentTechnique: {
        _id: "",
        name: "",
        type: "",
        time: 0,
        goal: "",
        material: "",
        task: "",
        workflow: "",
        ilustration: "",
        reviews: [{
                _id: "",
                technique: {
                    _id: "",
                    name: "",
                    type: "",
                    time: 25,
                    goal: "",
                    material: "",
                    task: "",
                    workflow: "",
                    ilustration: "",
                    reviews: [
                        "",
                    ],
                },
                user: {
                    _id: "",
                    name:"",
                    profession: "",
                    city: "",
                    avatar: "",
                    email: "",
                    password: "",
                    favoriteTechniques: [
                        "",
                    ],
                    techniquesProvided: [
                        "",
                    ],
                },
                description: "",
                score: 5,
        }],
        userProvider: ""
    },

    currentUserTechniquesProvided: [{
        _id: "",
        name: "",
        type: "",
        time: 30,
        goal: "",
        material: "",
        task: "",
        workflow: "",
        ilustration: "",
        reviews: [{
                _id: "",
                technique: {
                    _id: "",
                    name: "",
                    type: "",
                    time: 25,
                    goal: "",
                    material: "",
                    task: "",
                    workflow: "",
                    ilustration:"",
                    reviews: [
                        "",
                    ],
                },
                user: {
                    _id: "",
                    name:"",
                    profession: "",
                    city: "",
                    avatar: "",
                    email: "",
                    password: "",
                    favoriteTechniques: [
                        "",
                    ],
                    techniquesProvided: [
                        "",
                    ],
                },
                description: "",
                score: 5,
        }],
        userProvider: "" 
        }],

    currentUser: {
        _id: "",
                    name:"",
                    profession: "",
                    city: "",
                    avatar: "",
                    email: "",
                    password: "",
                    favoriteTechniques: [
                        "",
                    ],
                    techniquesProvided: [
                        "",
                    ],
                    token: "",
                    refreshToken: ""

    },

    isUserAuthenticate: false,

    token: "",

    refreshToken: "",

    resources: [{
            _id: "",
            title: "",
            author: "",
            editorial: "",
            siteEditorial: ""
    }],
};

export default state as unknown as State; 