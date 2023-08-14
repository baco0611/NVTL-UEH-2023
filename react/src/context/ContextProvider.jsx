import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({
    path: '/' +  window.location.pathname.split('/')[1],
    setPath: () => {},
    user: null,
    setUser: () => {},
    apiURL: null,
    fakeApi: null,
    listDepartment: [],
    getUserId: () => {}
})

function StateContext({ children }) {

    // User and token
    const [user, _setUser] = useState(JSON.parse(localStorage.getItem('ACCESS_USER')) || JSON.parse(sessionStorage.getItem('ACCESS_USER')))

    const setUser = (user, isRemember) => {
        console.log(user)
        if(user) {
            if(isRemember)
                localStorage.setItem('ACCESS_USER', JSON.stringify(user))
            else
                sessionStorage.setItem('ACCESS_USER', JSON.stringify(user))
            _setUser(user)
        } else {
            localStorage.removeItem('ACCESS_USER')
            sessionStorage.removeItem('ACCESS_USER')
            _setUser(null)
        }
    }

    const getUserId = (id) => {
        const idList = id.split('-')
        if(idList[1])
            return {
                id,
                real: idList[1]
            }
        else
            return {
                id,
                real: id
            }
    }

    // Default path of API
    const apiURL = "http://localhost:8000/api"
    const fakeApi = "http://localhost:3001"

    const [ path, setPath ] = useState('/' + window.location.pathname.split('/')[1])

    const handleChangePath = (e, value, navigate) => {
        e.preventDefault()
        const href = e.target.href
        const newPath = href.split('/')[3]

        if(newPath != path) {
            setPath('/' + newPath)
            if(value)
                navigate(newPath + '/' + href.split('/')[4])
            else
                navigate(newPath)
        }
    }

    const handleChangeURL = (url, navigate) => {
        if(url != path) {
            setPath(url)
            navigate(url)
        }
    }

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
                setUser,
                apiURL,
                fakeApi,
                path,
                setPath,
                listDepartment,
                getUserId,
                handleChangePath,
                handleChangeURL
            }
        }>
            {children}
        </UserContext.Provider>
    )
}

export default StateContext
export { UserContext }