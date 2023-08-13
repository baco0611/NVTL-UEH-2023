import clsx from 'clsx'
import React from 'react'
import './SignUp.scss'

function SignUp({ state, setState }) {
    const handleChangeValue = (e) => {
        const element = e.target

        setState({
            ...state,
            [element.name]: element.value
        })
    }

    return (
        <>
            <div className='client-log-in client-log-sign-box'>
                <form className='client-sign-form'>
                    <input 
                        id='client-fullName'
                        type='text'
                        value={state.fullName}
                        name='fullName'
                        placeholder='Họ và tên'
                        onChange={handleChangeValue}
                        autoComplete='off'
                        className={clsx({'filled': state.fullName})}
                    />
                    <div className='client-department'>
                        <input 
                            id='client-department'
                            type='text'
                            value={state.department}
                            name='department'
                            placeholder='Khoa'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.department})}
                        />
                    </div>
                    <input 
                        id='client-phone'
                        type='text'
                        value={state.phone}
                        name='phone'
                        placeholder='Số điện thoại'
                        onChange={handleChangeValue}
                        autoComplete='off'
                        className={clsx({'filled': state.phone})}
                    />
                    <input 
                        id='client-email'
                        type='text'
                        value={state.email}
                        name='email'
                        placeholder='Email'
                        onChange={handleChangeValue}
                        autoComplete='off'
                        className={clsx({'filled': state.email})}
                    />
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
                    <input 
                        id='client-password'
                        type='text'
                        value={state.password}
                        name='password'
                        placeholder='Mật khẩu'
                        onChange={handleChangeValue}
                        autoComplete='off'
                        className={clsx({'filled': state.password})}
                    />
                    <input 
                        id='client-confirmPassword'
                        type='text'
                        value={state.confirmPassword}
                        name='confirmPassword'
                        placeholder='Nhập lại mật khẩu'
                        onChange={handleChangeValue}
                        autoComplete='off'
                        className={clsx({'filled': state.confirmPassword})}
                    />
                </form>
            </div>
            <div className='client-log-button'>
                <button className='secondary-button'>Đăng ký</button>
            </div>
        </>
    )
}

export default SignUp