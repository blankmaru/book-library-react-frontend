import axios from 'axios';

const url = 'http://localhost:8080/api/user';

class Auth {
    register(name, email, password) {
        return axios.post(url + '/register', {
            name,
            email,
            password
        }); 
    };

    async login(email, password) {
        const res = await axios.post(url + '/login', {
            email,
            password
        });
        if (res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
        };
        return res.data;
    };

    logOut() {
        localStorage.removeItem('user');
    };

    currentUser() {
        return JSON.parse(localStorage.getItem('user'));
    };
};

export default new Auth();