import clsx from 'clsx'
import './SignIn.scss'
import { useContext, useEffect, useState } from 'react'
import Validator from '../../scripts/validForm'
import { Link } from 'react-router-dom'
import { handleSignIn } from '../../scripts/signUpdate'
import { UserContext } from '../../../../../context/ContextProvider'

function SignIn({ state, setState, setIsDangNhap }) {
    const { setUser } = useContext(UserContext)
    const handleChangeValue = (e) => {
        const element = e.target

        setState({
            ...state,
            [element.name]: element.value
        })
    }

    const [hidePassword, setHidePassword] = useState(true)
    const [ isSubmit, setIsSubmit] = useState(true)
    const [ isRemember, setIsRemember ] = useState(false) 

    useEffect(() => {
        Validator({
            form: '#client-sign-up',
            formGroupSelector: '.client-sign-item',
            errorSelector: '.client-sign-message',
            rules: [
                Validator.isRequired('#client-studentCode', 'Vui lòng điền mã số sinh viên của bạn'),
                Validator.isRequired('#client-password', 'Vui lòng điền mật khẩu'),
            ],
            setIsSubmit
        })
    }, [state])

    return (
        <>
            <div className='client-log-in client-log-sign-box'>
                <form className='client-sign-form' id='client-sign-up'>
                    <div className='client-sign-item'>
                        <input 
                            id='client-studentCode'
                            type='text'
                            value={state.studentCode}
                            name='studentCode'
                            placeholder='Mã số sinh viên'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.studentCode})}
                        />
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item'>
                        <input 
                            id='client-password'
                            type={hidePassword ? "password" : "type"} 
                            value={state.password}
                            name='passWord'
                            placeholder='Mật khẩu'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.passWord})}
                        />
                        <span className='client-sign-message'></span>
                        {
                            hidePassword == false
                            &&
                                <i className="ti-eye" style={{color: '#ccc'}} onClick={() => setHidePassword(!hidePassword)}/>
                            ||
                                <i className="ti-eye" onClick={() => setHidePassword(!hidePassword)}/>
                        }
                    </div>
                </form>
                <div className='client-sign-user'>
                    <div className='client-sign-remember'>
                        <input
                            type='checkbox'
                            className='checkbox-btn'
                            checked={isRemember}
                            onChange={() => setIsRemember(!isRemember)}
                        />
                        
                        <span>Nhớ tài khoản</span>
                    </div>
                    <div className='client-sign-forgot'>
                        <Link>Quên mật khẩu ?</Link>
                    </div>
                </div>
            </div>
            <div className='client-log-button'>
                <button
                    className={clsx(
                        'secondary-button',
                        {
                            active: isSubmit
                        }
                    )}
                    onClick={async () => await handleSignIn({state, setUser, isRemember})}
                >Đăng nhập</button>
                <p>Chưa có tài khoản? <span onClick={() => setIsDangNhap(false)}>Đăng ký ngay</span></p>
            </div>
        </>
    )
}

export default SignIn