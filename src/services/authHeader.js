export default function authHeader() {
    const user = localStorage.getItem('user');

    if (user && user.accessToken) {
        return { 'auth-token': user.accessToken };
    } else {
        return {};
    };
};