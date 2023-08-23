import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import './Forgot.scss'
import { Link } from 'react-router-dom'
import { sendRequest } from '../../scripts/resetPassword'
import Validator from '../../scripts/validForm'
import Reset from './Reset'

function ForgotPassword() {
    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState({})
    const buttonTimeOutRef = useRef(null)

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token')

    useEffect(() => {
        Validator({
            form: '#client-sign-up',
            formGroupSelector: '.client-sign-item',
            errorSelector: '.client-sign-message',
            rules: [
                Validator.isRequired('#client-email', 'Vui lòng điền email của bạn'),
                Validator.isEmail('#client-email', 'Vui lòng điền email hợp lệ'),
            ],
            submitButton: '#forgotBtn'
        })
    }, [email])

    const handleSendRequest = async () => {
        if(buttonTimeOutRef.current)
            clearTimeout(buttonTimeOutRef.current)
    
        buttonTimeOutRef.current = await setTimeout(async () => {
            const request = await sendRequest(email, setError)
        }, 1000)
    }
    

    if(token)
        return <Reset
            token={token}
        />

    return (
        <div className='client-log-side client-log-forgot'>
            <div className='client-log-forgot-container'>
                <h3>Tìm tài khoản</h3>
                <div className='client-log-forgot-content'>
                    <h4>Nhập email của bạn để lấy lại tài khoản</h4>
                    <form className='client-sign-form' id='client-sign-up'>
                        <div className='client-sign-item'>
                            <input 
                                id='client-email'
                                type='text'
                                value={email}
                                name='email'
                                placeholder='Email của bạn'
                                onChange={e => setEmail(e.target.value)}
                                autoComplete='off'
                                className={clsx({'filled': email})}
                            />
                            <span className='client-sign-message'></span>
                        </div>
                    </form>
                </div>
                <div className='client-log-forgot-nav'>
                    <Link to={'/login'} className='primary-button btn'>Quay lại</Link>
                    <button id='forgotBtn' className='primary-button btn' onClick={handleSendRequest}>Gửi</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword