import axios from 'axios';

export default {
    register(name, profession, city, email, password) {
        const userData = { name, profession, city, email, password };
        const {data} = axios.post("http://localhost:5000/synergy/auth/signup", userData);
        return data;
    },

    async login(email,password) {
        const userData = { email, password };
        const {data} = await axios.post("http://localhost:5000/synergy/auth/login", userData);
        console.log("esto es el data en auth", data);
        return data;
    }
}

