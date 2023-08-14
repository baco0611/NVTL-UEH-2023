import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../context/ContextProvider'

function ClientUser() {
    const [ isAccount, setIsAccount ] = useState(false)
    const { setUser } = useContext(UserContext)

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
                    <li><Link>Thông tin</Link></li>
                    <li onClick={() => setUser()}><p>Đăng xuất</p></li>
                </ul>
            }
        </div>
    )
}

export default ClientUser