import clsx from 'clsx'
import './SignIn.scss'
import { useEffect, useState } from 'react'
import Validator from '../../scripts/validForm'

function SignIn({ state, setState, setIsDangNhap }) {

    const handleChangeValue = (e) => {
        const element = e.target

        setState({
            ...state,
            [element.name]: element.value
        })
    }

    const [hidePassword, setHidePassword] = useState(true)
    const [ isSubmit, setIsSubmit] = useState(true)

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
            </div>
            <div className='client-log-button'>
                <button
                    className={clsx(
                        'secondary-button',
                        {
                            active: isSubmit
                        }
                    )}
                >Đăng nhập</button>
                <p>Chưa có tài khoản? <span onClick={() => setIsDangNhap(false)}>Đăng ký ngay</span></p>
            </div>
        </>
    )
}

export default SignIn