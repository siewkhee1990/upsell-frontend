const BACKEND_URL_USERS = process.env.REACT_APP_BACKEND_URL_USERS || 'http://localhost:3002/users';
const BACKEND_URL_ORDERS = process.env.REACT_APP_BACKEND_URL_ORDERS || 'http://localhost:3002/orders';

export default {
    getAllbyUserID: (userID) => {
        return fetch(`${BACKEND_URL_ORDERS}/${userID}`)
            .then(res => res.json())
            .then(data => data)
    },
    submitOrder: (info) => {
        return fetch(`${BACKEND_URL_USERS}/order`, {
            credentials: 'include',
            method: "post",
            body: JSON.stringify(info),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'access_token': localStorage.getItem('access_token')
            }
        }).then(res => res.json())
            .then(data => data);
    }
}