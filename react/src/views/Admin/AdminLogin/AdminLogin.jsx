import { useContext, useEffect, useState } from 'react'
import './AdminLogin.scss'
import Validator from '../../Client/LogLayout/scripts/validForm'
import clsx from 'clsx'
import { handleSignIn } from '../../Client/LogLayout/scripts/signUpdate'
import { UserContext } from '../../../context/ContextProvider'
// import Swal from 'sweetalert2'
function AdminLogin() {
    const [ state, setState ] = useState({
        studentCode: '',
        password: ''
    })

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

    const updateInformation = async () => {
        const result = await handleSignIn({state, setUser, isRemember})
        console.log(result)
        if(result) {
            // Swal.fire({
            //     title: 'Custom animation with Animate.css',
            //     showClass: {
            //       popup: 'animate__animated animate__fadeInDown'
            //     },
            //     hideClass: {
            //       popup: 'animate__animated animate__fadeOutUp'
            //     }
            //   })
        }
    }

    return (
        <div id='admin-login'>
            <h1>ADMIN LOGIN</h1>
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
                    onClick={updateInformation}
                >Đăng nhập</button>
            </div>
        </div>
    )
}

export default AdminLogin