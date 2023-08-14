import clsx from 'clsx'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import Validator from '../LogLayout/scripts/validForm'

function UserPassword() {
    const { setUser, handleChangeURL } = useContext(UserContext)
    const navigate = useNavigate()
    const [ state, setState ] = useState({
        oldPassword: '',
        password: '',
        confirmPassword: ''
    })

    const handleChangeValue = (e) => {
        const element = e.target

        setState({
            ...state,
            [element.name]: element.value
        })
    }

    const [ hideOldPassword, setHideOldPassword ] = useState(true)
    const [ hideNewPassword, setHideNewPassword ] = useState(true)
    const [ hidePassword, setHidePassword ] = useState(true)

    useEffect(() => {
        Validator({
            form: '#client-sign-up',
            formGroupSelector: '.client-sign-item',
            errorSelector: '.client-sign-message',
            rules: [
                Validator.isRequired('#client-old-password', 'Hãy nhập mật khẩu cũ'),
                Validator.isRequired('#client-new-password', 'Hãy nhập mật khẩu mới'),
                Validator.isPassword('#client-new-password'),
                Validator.minLength('#client-new-password', 8),
                Validator.isRequired('#client-new-confirmPassword', 'Hãy nhập lại mật khẩu mới'),
                Validator.isConfirm('#client-new-confirmPassword', '#client-new-password', 'Hãy nhập lại mật khẩu mới'),
            ]
        })
    }, [state])

    return (
        <>
            <div className='client-log-in client-log-sign-box'>
                <form className='client-sign-form' id='client-sign-up'>
                    <div className='client-sign-item'>
                        <input 
                            id='client-old-password'
                            type={hideOldPassword ? "password" : "type"} 
                            value={state.oldPassword}
                            name='passWord'
                            placeholder='Mật khẩu cũ'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.pldPassword})}
                        />
                        <span className='client-sign-message'></span>
                        {
                            hideOldPassword == false
                            &&
                                <i className="ti-eye" style={{color: '#ccc'}} onClick={() => setHideOldPassword(!hideOldPassword)}/>
                            ||
                                <i className="ti-eye" onClick={() => setHideOldPassword(!hideOldPassword)}/>
                        }
                    </div>
                    <div className='client-sign-item'>
                        <input 
                            id='client-new-password'
                            type={hidePassword ? "password" : "type"} 
                            value={state.password}
                            name='passWord'
                            placeholder='Mật khẩu mới'
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
                    <div className='client-sign-item'>
                        <input 
                            id='client-new-confirmPassword'
                            type={hideNewPassword ? "password" : "type"} 
                            value={state.confirmPassword}
                            name='confirmPassword'
                            placeholder='Nhập lại mật khẩu mới'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.confirmPassword})}
                        />
                        <span className='client-sign-message'></span>
                        {
                            hideNewPassword == false
                            &&
                                <i className="ti-eye" style={{color: '#ccc'}} onClick={() => setHideNewPassword(!hideNewPassword)}/>
                            ||
                                <i className="ti-eye" onClick={() => setHideNewPassword(!hideNewPassword)}/>
                        }
                    </div>
                </form>
            </div>
            <div className='client-log-button'>
                <button
                    className={clsx(
                        'secondary-button',
                        {
                            active: true
                        }
                    )}
                    // onClick={async () => await handleSignUp({ state, setIsSuccess, setUserValue })}
                >Cập nhật</button>
            </div>
        </>
    )
}

export default UserPassword