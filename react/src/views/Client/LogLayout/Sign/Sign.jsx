import { useContext, useEffect, useState } from 'react'
import './Sign.scss'
import clsx from 'clsx'
import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../../../context/ContextProvider'

function Sign() {
    const [ isDangNhap, setIsDangNhap ] = useState(true)
    const navigate = useNavigate()
    const { user, setPath } = useContext(UserContext)

    const [ signInValue, setSignInValue ] = useState({
        studentCode: '',
        password: ''
    })

    const [ signUpValue, setSignUpValue ] = useState({
        fullName: '',
        department: '',
        phone: '',
        email: '',
        studentCode: '',
        password: '',
        confirmPassword: '',
        permission: false
    })

    useEffect(() => {
        if(user) {
            setPath('/')
            navigate('/')
        }
    }, [])

    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div className='client-log-side client-log-sign'>
            <div className='client-log-container'>
                <div className='client-log-sign-header'>
                    <button 
                        className={clsx({'active': isDangNhap})}
                        onClick={() => setIsDangNhap(true)}
                    >Đăng nhập</button>
                    <button 
                        className={clsx({'active': !isDangNhap})}
                        onClick={() => setIsDangNhap(false)}
                    >Đăng ký</button>
                </div>

                {
                    isDangNhap 
                    &&
                        <SignIn
                            state={signInValue}
                            setState={setSignInValue}
                            setIsDangNhap={setIsDangNhap}
                        /> 
                    ||
                        <SignUp
                            state={signUpValue}
                            setState={setSignUpValue}
                        />
                }
            </div>
        </div> 
    )
}

export default Sign