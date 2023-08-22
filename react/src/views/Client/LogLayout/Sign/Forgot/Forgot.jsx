import clsx from 'clsx'
import { useState } from 'react'
import './Forgot.scss'
import { Link } from 'react-router-dom'

function ForgotPassword() {
    const [ email, setEmail ] = useState('')

    return (
        <div className='client-log-side client-log-forgot'>
            <div className='client-log-forgot-container'>
                <h3>Tìm tài khoản</h3>
                <div className='client-log-forgot-content'>
                    <h4>Nhập email của bạn để lấy lại tài khoản</h4>
                    <form className='client-sign-form' id='client-sign-up'>
                        <div className='client-sign-item'>
                            <input 
                                id='client-studentCode'
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
                    <button className='primary-button btn'>Gửi</button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword