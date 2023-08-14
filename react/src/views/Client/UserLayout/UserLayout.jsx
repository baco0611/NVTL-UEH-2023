import '../LogLayout/LogLayout.scss'
import '../LogLayout/Sign/Sign.scss'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../context/ContextProvider'
import SidePic from '../LogLayout/img/SidePic.png'
import clsx from 'clsx'
import UserInformation from './UserInformation'
import UserPassword from './UserPassword'

function User() {
    const { user, handleChangeURL, setPath } = useContext(UserContext)
    const navigate = useNavigate()
    const [ isThongTin, setIsThongTin ] = useState(true)

    useEffect(() => {
        if(!user) {
            handleChangeURL('/login', navigate)
        } else {
            setPath('/user')
        }
    }, [])

    useEffect(() => {window.scrollTo(0, 0)})

    return (
        <section id='client-log' className='client-log'>
            <img src={SidePic}></img>
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