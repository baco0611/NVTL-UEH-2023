import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import './Forgot.scss'
import { Link } from 'react-router-dom'
import { emailForgotError, sendRequest } from '../../scripts/resetPassword'
import Validator from '../../scripts/validForm'
import Reset from './Reset'
import Swal from 'sweetalert2'
import shark from '../../../../../components/RequestLogin/img/shark.png'

function ForgotPassword() {
    const [ email, setEmail ] = useState('')
    const [ error, setError ] = useState()
    const buttonTimeOutRef = useRef(null)
    const loadingRef = useRef()

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
            loadingRef.current.classList.remove('none')
            const request = await sendRequest(email, setError)
            // console.log(request)
            if(request == true) {
                loadingRef.current.classList.add('none')
                Swal.fire({
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    customClass: {
                        confirmButton: 'user-update-success-button'
                    },
                    html: `
                        <div class="user-update-success">
                            <i class="fa-regular fa-circle-check"></i>
                            <h1>Hãy kiểm tra mail của bạn</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn"><a style="color: white;" href="/">Trở lại trang chủ</h2>',
                    confirmButtonColor: "#3288f3"
                })
            } else 
            if(request==false) {
                loadingRef.current.classList.add('none')
                Swal.fire({
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    customClass: {
                        confirmButton: 'user-update-success-button'
                    },
                    html: `
                        <div class="user-update-success">
                            <i class="fa-regular fa-circle-xmark"></i>
                            <h1>Có lỗi</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn"><a style="color: white;" href="/">Trở lại trang chủ</h2>',
                    confirmButtonColor: "#3288f3"
                })
            }
        }, 1000)
    }

    useEffect(() => {
        if(error)
            emailForgotError(error)
    }, [error])
    

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
            <div ref={loadingRef} className="loading none">
                <div className="loading-container">
                    <img className="animate__animated animate__swing animate__infinite animate__slow" src={shark}/>
                    <div className="continuous"></div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword