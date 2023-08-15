import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/ContextProvider'

function ClientInformation() {
    const [ isAccount, setIsAccount ] = useState(false)
    const { setUser, handleChangeURL, adminURL } = useContext(UserContext)
    const navigate = useNavigate()
    const { user } = useContext(UserContext)

    const logOut = () => {
        setUser()
        handleChangeURL('/', navigate)
    }

    useEffect(() => {
        const handleClick = e => {
            let element = e.target

            while(element.parentElement) {
                if(element.parentElement.matches('.account'))
                {
                    element = element.parentElement
                    break
                }
                
                element = element.parentElement
            }
            if(!element.className.split(' ').includes('account')) {
                setIsAccount(false)
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    })

    return (
        <div className='client-header-login cursorPointer account'>
            <p onClick={() => setIsAccount(!isAccount)}>Tài khoản</p>
            {
                isAccount &&
                <ul className='list-item account'>
                    <li><Link onClick={() => setIsAccount(false)} to={'/user'}>Thông tin</Link></li>
                    <li onClick={logOut}><Link to={'/'}>Đăng xuất</Link></li>
                    {
                        user.permission == 1 
                        &&
                        <li><Link onClick={() => setIsAccount(false)} to={adminURL}>Admin</Link></li>
                    }
                </ul>
            }
        </div>
    )
}

export default ClientInformation