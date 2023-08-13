import { createContext, useState } from "react";

const UserContext = createContext({
    path: '/' +  window.location.pathname.split('/')[1],
    setPath: () => {},
    user: null,
    token: null,
    setUser: () => {},
    setToken:() => {},
    apiURL: null,
    fakeApi: null,
    listDepartment: []
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

    const [ path, setPath ] = useState('/' + window.location.pathname.split('/')[1])

    const listDepartment = [
        'Công nghệ thông tin và kinh doanh (BIT)',
        'Viện đào tạo quốc tế (ISB)',
        'Du lịch (DL)',
        'Kế toán (KET)',
        'Lý luận chính trị (LLCT)',
        'Kinh doanh quốc tế - Marketing (KQM)',
        'Kinh tế (SOE)',
        'Luật (SOL)',
        'Ngân hàng (SOB)',
        'Ngoại ngữ (NN)',
        'Quản lý nhà nước (SOG)',
        'Quản trị (SOM)',
        'Tài chính (SOF)',
        'Tài chính công (TCC)',
        'Toán - Thống kê (TTK)',
        'Đoàn Liên viên (CTD)',
        'Khoa Thiết kế Truyền thông (SMD)',
        'Viện Đô thị thông minh và quản lý (ISCM)',
        'Viện Đổi mới sáng tạo (UII)'
    ]

    return (
        <UserContext.Provider value={{
                user,
                token,
                setUser,
                setToken,
                apiURL,
                fakeApi,
                path,
                setPath,
                listDepartment
            }
        }>
            {children}
        </UserContext.Provider>
    )
}

export default StateContext
export { UserContext }