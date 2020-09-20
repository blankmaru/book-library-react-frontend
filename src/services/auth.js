import axios from 'axios';

const url = 'http://localhost:8080/api/user';

class Auth {
    register(username, email, password) {
        return axios.post(url + '/register', {
            username,
            email,
            password
        }); 
    };

    async login(username, password) {
        const res = await axios.post(url + '/login', {
            username,
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