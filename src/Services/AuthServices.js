export default {
    login : user =>{
        console.log(user);
        return fetch('/users/login',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => {
            if(res.status !== 401)
                return res.json().then(data => data);
            else
                return { isAuthenticated : false, user : {username : ""}};
        })
    },
    register : user =>{
        console.log(user);
        return fetch('/users/signup',{
            method : "post",
            body : JSON.stringify(user),
            headers : {
                'Content-Type' : 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json())
          .then(data => data);
    },
    logout : ()=>{
        return fetch('/users/logout')
                .then(res => res.json())
                .then(data => data);
    },
    isAuthenticated : ()=>{
        return fetch('/users/authenticated')
                .then(res=>{
                    if(res.status !== 401)
                        return res.json().then(data => data);
                    else
                        return { isAuthenticated : false, user : {username : ""}};
                });
    }

}