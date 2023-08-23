import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { sendPassword } from '../../scripts/resetPassword'
import Validator from '../../scripts/validForm'
import Swal from 'sweetalert2'


function Reset({ token }) {
    const [ state, setState ] = useState({
        newPassword: '',
        confirmNewPassword: ''
    })

    const handleChangeValue = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value 
        })
    }

    const [ hidePassword, setHidePassword ] = useState(true)
    const [ hidePassword2, setHidePassword2 ] = useState(true)
    const [ error, setError ] = useState({})
    const buttonTimeOutRef = useRef(null)

    const handleChangePassword = async() => {
        if(buttonTimeOutRef.current)
            clearTimeout(buttonTimeOutRef.current)
    
        buttonTimeOutRef.current = await setTimeout(async () => {
            const request = await sendPassword(token, state, setError)
            if(request){
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
                            <h1>Cập nhật thành công</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn"><a style="color: white;" href="/login">Đăng nhập</h2>',
                    confirmButtonColor: "#3288f3"
                })
            } else {
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
                            <h1>Yêu cầu lỗi, vui lòng kiểm tra email mới nhất</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn"><a style="color: white;" href="/">Trở lại trang chủ</h2>',
                    confirmButtonColor: "#3288f3"
                })
            }
        }, 1000)
    }

    useEffect(() => {
        Validator({
            form: '#client-sign-up',
            formGroupSelector: '.client-sign-item',
            errorSelector: '.client-sign-message',
            rules: [
                Validator.isRequired('#client-password', 'Vui lòng điền mật khẩu'),
                Validator.minLength('#client-password', 8),
                Validator.isPassword('#client-password'),
                Validator.isRequired('#client-confirmPassword', 'Vui lòng nhập lại mật khẩu'),
                Validator.isConfirm('#client-confirmPassword', '#client-password'),
            ],
            submitButton: '#forgotBtn'
        })
    }, [state])

    return (
        <div className='client-log-side client-log-forgot'>
            <div className='client-log-forgot-container'>
                <h3>Mật khẩu mới</h3>
                <div className='client-log-forgot-content'>
                    <h4>Vui lòng nhập mật khẩu mới</h4>
                    <form className='client-sign-form' id='client-sign-up'>
                    <div className='client-sign-item'>
                        <input 
                            id='client-password'
                            type={hidePassword ? "password" : "type"} 
                            value={state.newPassword}
                            name='newPassword'
                            placeholder='Nhập mật khẩu mới'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.newPassword})}
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
                    <div className='client-sign-item'>
                        <input 
                            id='client-confirmPassword'
                            type={hidePassword2 ? "password" : "type"} 
                            value={state.confirmNewPassword}
                            name='confirmNewPassword'
                            placeholder='Nhập lại mật khẩu'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.confirmNewPassword})}
                        />
                        <span className='client-sign-message'></span>
                        {
                            hidePassword2 == false
                            &&
                                <i className="ti-eye" style={{color: '#ccc'}} onClick={() => setHidePassword2(!hidePassword2)}/>
                            ||
                                <i className="ti-eye" onClick={() => setHidePassword2(!hidePassword2)}/>
                        }
                    </div>
                    </form>
                </div>
                <div className='client-log-forgot-nav'>
                    <button id='forgotBtn' className='primary-button btn' onClick={handleChangePassword}>Lưu</button>
                </div>
            </div>
        </div>
    )
}

export default Reset