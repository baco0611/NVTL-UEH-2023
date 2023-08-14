import clsx from 'clsx'
import { useContext, useEffect, useRef, useState } from 'react'
import './SignUp.scss'
import Validator from '../../scripts/validForm'
import { UserContext } from '../../../../../context/ContextProvider'
import { handleSignUp } from '../../scripts/signUpdate'
import { useNavigate } from 'react-router-dom'

function SignUp({ state, setState }) {
    const { listDepartment, setUser, handleChangeURL } = useContext(UserContext)
    const navigate = useNavigate()

    const handleChangeValue = (e) => {
        const element = e.target

        setState({
            ...state,
            [element.name]: element.value
        })
    }

    const [ isSubmit, setIsSubmit] = useState(true)

    const [ isDepartment, setIsDepartment ] = useState(false)
    const [ isFocus, setIsFocus ] = useState(false)
    const [ isValid, setIsValid ] = useState(true)
    const [ isSuccess, setIsSuccess ] = useState(false)
    const [ userValue, setUserValue ] = useState(null)

    const [hidePassword, setHidePassword] = useState(true)
    const [hidePassword2, setHidePassword2] = useState(true)

    const setFocus = () => {
        setIsDepartment(!isDepartment)
        setIsFocus(true)
    }

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
                Validator.isRequired('#client-password', 'Vui lòng điền mật khẩu'),
                Validator.minLength('#client-password', 8),
                Validator.isPassword('#client-password'),
                Validator.isRequired('#client-confirmPassword', 'Vui lòng nhập lại mật khẩu'),
                Validator.isConfirm('#client-confirmPassword', '#client-password'),
            ],
            setIsSubmit
        })
    }, [state])

    useEffect(() => {
        const handleClick = e => {
            let element = e.target

            while(element.parentElement) {
                if(element.parentElement.matches('.client-department'))
                {
                    element = element.parentElement
                    break
                }
                
                element = element.parentElement
            }
            if(!element.className.split(' ').includes('client-department')) {
                setIsDepartment(false)

                if(isFocus) {
                    if(state.department)
                        setIsValid(true)
                    else
                        setIsValid(false)
                }
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    })

    useEffect(() => {
        if(isSuccess) {
            setUser(userValue)
            setIsSuccess(false)
            handleChangeURL('/', navigate)
        }
    }, [isSuccess])

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
                    <div className='client-sign-item'>
                        <input 
                            id='client-password'
                            type={hidePassword ? "password" : "type"} 
                            value={state.password}
                            name='password'
                            placeholder='Mật khẩu'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.password})}
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
                            value={state.confirmPassword}
                            name='confirmPassword'
                            placeholder='Nhập lại mật khẩu'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.confirmPassword})}
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
            <div className='client-log-button'>
                <button
                    className={clsx(
                        'secondary-button',
                        {
                            active: isSubmit && isValid && isFocus
                        }
                    )}
                    onClick={async () => await handleSignUp({ state, setIsSuccess, setUserValue })}
                >Đăng ký</button>
            </div>
        </>
    )
}

export default SignUp