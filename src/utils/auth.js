const MY_TOKEN='XT_TOKEN'

export const getToken=()=>{
    return localStorage.getItem(MY_TOKEN)
}

export const setToken=(token)=>{
     localStorage.setItem(MY_TOKEN,token)
}

export const removeToken=()=>{
     localStorage.removeItem(MY_TOKEN)
}