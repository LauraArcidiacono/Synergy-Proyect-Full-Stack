import {State} from '@/types/interfaces';

const stateMock = {
    techniques: [
        {
            _id: "",
            name: "",
            type: "",
            time: 0,
            goal: "",
            material: "",
            task: "",
            workflow: "",
            ilustration: "",
            reviews: [],
            __v: 0,
            userProvider: ""
        }
    ],

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
        reviews: [],
        __v: 0,
        userProvider: ""
    },

    currentUserTechniquesProvided: [
        {
        _id: "",
        name: "",
        type: "",
        time: 0,
        goal: "",
        material: "",
        task: "",
        workflow: "",
        ilustration: "",
        reviews: [],
        __v: 0,
        userProvider: ""
    }

    ],

    currentUser: {
        name: "",
        profession: "",
        city: "",
        avatar: "", 
        email: "",
        password: "",
        favoriteTechniques: [],
        techniquesProvided: []
    },

    isUserAuthenticate: false,

    token: "",

    refreshToken: "",

    resources: [
        {
            _id: "",
            title: "",
            author: "",
            editorial: "",
            siteEditorial: "",
            __v: 0
        }
    ],
};


export default stateMock as unknown as State; 