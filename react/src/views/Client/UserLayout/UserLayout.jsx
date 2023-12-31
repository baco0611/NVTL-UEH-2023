import '../LogLayout/LogLayout.scss'
import '../LogLayout/Sign/Sign.scss'
import './UserLayout.scss'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/ContextProvider'
import clsx from 'clsx'
import UserInformation from './UserInformation'
import UserPassword from './UserPassword'
import LogBanner from '../LogLayout/Sign/LogBanner/LogBanner'

function User() {
    const { user, setPath } = useContext(UserContext)
    const navigate = useNavigate()
    const [ isThongTin, setIsThongTin ] = useState(true)

    useEffect(() => {
        if(!user) {
            setPath('/login')
            navigate('/login')
        } else {
            setPath('/user')
        }
    }, [])

    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section id='client-log' className='client-log'>
            <LogBanner/>
            <div className='client-log-side client-log-sign'>
                <div className='client-log-container'>
                    <div className='client-log-sign-header'>
                        <button 
                            className={clsx({'active': isThongTin})}
                            onClick={() => setIsThongTin(true)}
                        >Thông tin</button>
                        <button 
                            className={clsx({'active': !isThongTin})}
                            onClick={() => setIsThongTin(false)}
                        >Mật khẩu</button>
                    </div>
                    {
                        isThongTin 
                        &&
                        <UserInformation/>
                        ||
                        <UserPassword/>
                    }
                </div>
            </div>
        </section>
    )
}

export default User