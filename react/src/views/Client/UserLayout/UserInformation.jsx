import clsx from 'clsx'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/ContextProvider'
import { useNavigate } from 'react-router-dom'
import Validator from '../LogLayout/scripts/validForm'
import { handleUpdateInformation } from './scripts/userInfomationUpdate'
import Swal from 'sweetalert2'

function UserInformation() {
    const { listDepartment, setUser, getUserId } = useContext(UserContext)
    const navigate = useNavigate()
    const [ state, setState ] = useState(JSON.parse(localStorage.getItem('ACCESS_USER') || sessionStorage.getItem('ACCESS_USER')))

    const handleChangeValue = (e) => {
        const element = e.target

        setState({
            ...state,
            [element.name]: element.value
        })
    }
    const setFocus = () => {
        setIsDepartment(!isDepartment)
    }

    const [ isValid, setIsValid ] = useState(true)
    const [ isDepartment, setIsDepartment ] = useState(false)

    useEffect(() => {
        Validator({
            form: '#client-sign-up',
            formGroupSelector: '.client-sign-item',
            errorSelector: '.client-sign-message',
            rules: [
                Validator.isRequired('#client-fullName', 'Vui lòng điền họ tên của bạn'),
                Validator.isRequired('#client-phone', 'Vui lòng điền số điện thoại của bạn'),
                Validator.isPhoneNumber('#client-phone'),
                Validator.isRequired('#client-email', 'Vui lòng điền email của bạn'),
                Validator.isEmail('#client-email', 'Vui lòng điền email hợp lệ'),
                Validator.isRequired('#client-studentCode', 'Vui lòng điền mã số sinh viên của bạn'),
            ],
            submitButton: '#submit-btn',
            action: updateInformation
        })
    }, [state])

    const updateInformation = async () => {
        const result = await handleUpdateInformation({ state, setUser, getUserId })
        if(result) {
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
                        <h1>CẬP NHẬT THÀNH CÔNG</h1>
                    </div>
                `,
                confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                confirmButtonColor: "#3288f3"
            })
        }
    }

    return (
        <>
            <div className='client-log-in client-log-sign-box'>
                <form className='client-sign-form' id='client-sign-up'>
                    <div className='client-sign-item'>
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
                        <span className='client-sign-message'></span>
                    </div>
                    <div className={clsx('client-department', 'client-sign-item', {
                        focus: isDepartment,
                        filled: state.department,
                        invalid: !isValid
                    })}>
                        <div 
                            id='client-department' 
                            className='client-department-item'
                            onClick={setFocus}
                        >
                        {
                            state.department 
                            &&
                                <p>{state.department}</p>
                            ||
                                <p className='placeholder'>Khoa</p>
                        }
                        </div>
                        <i className="fa-solid fa-caret-down" onClick={setFocus}></i>
                        <ul className={clsx({
                            'visible': !isDepartment,
                            'filled': state.department
                        })}>
                            {
                                listDepartment.map(item => 
                                    <li 
                                        key={item}
                                        onClick={() => {
                                            setIsDepartment(false)
                                            setIsValid(true)
                                            setState({
                                                ...state,
                                                'department': item
                                            })
                                        }}
                                    >{item}</li>
                                )
                            }
                        </ul>
                        <span className='client-sign-message'>Vui lòng chọn khoa của bạn</span>
                    </div>
                    <div className='client-sign-item'>
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
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item'>
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
                        <span className='client-sign-message'></span>
                    </div>
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
                    id='submit-btn'
                >Cập nhật</button>
            </div>
        </>
    )
}

export default UserInformation