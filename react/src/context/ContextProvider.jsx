import { createContext, useEffect, useState } from "react";

const UserContext = createContext({
    path: window.location.pathname,
    setPath: () => {},
    user: null,
    token: null,
    setUser: () => {},
    setToken:() => {},
    apiURL: null,
    fakeApi: null,
})

function StateContext({ children }) {

    // User and token
    // const [user, setUser] = useState()
    const [user, setUser] = useState({
        name: 'Huynh Van Nguyen Bao'
    })
    const [token, _setToken] = useState(localStorage.getItem('ACCES_TOKEN'))
    // const [token, _setToken] = useState(123)

    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCES_TOKEN', token)
        } else { 
            localStorage.removeItem('ACCES_TOKEN')
        }
    } 

    // Default path of API
    const apiURL = "http://localhost:8000/api"
    const fakeApi = "http://localhost:3001"

    const [ path, setPath ] = useState(window.location.pathname)
    return (
        <UserContext.Provider value={{
                user,
                token,
                setUser,
                setToken,
                apiURL,
                fakeApi,
                path,
                setPath
            }
        }>
            {children}
        </UserContext.Provider>
    )
}

export default StateContext
export { UserContext }