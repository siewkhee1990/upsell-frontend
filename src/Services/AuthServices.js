const BACKEND_URL_USERS = process.env.REACT_APP_BACKEND_URL_USERS || 'http://localhost:3002/users';

export default {
    login: user => {
        return fetch(`${BACKEND_URL_USERS}/login`, {
            credentials: 'include',
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => {
            if (res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated: false, user: { username: "" } };
        })
    },
    register: user => {
        return fetch(`${BACKEND_URL_USERS}/signup`, {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
            .then(data => data);
    },
    logout: () => {
        return fetch(`${BACKEND_URL_USERS}/logout`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => data);
    },
    isAuthenticated: () => {
        return fetch(`${BACKEND_URL_USERS}/authenticated`, { credentials: 'include' })
            .then(res => {
                if (res.status !== 401) {
                    return res.json().then(data => data);
                }
                else {
                    return { isAuthenticated: false, user: { username: "" } };
                }
            })
    }

}