import clsx from 'clsx'
import './SignIn.scss'

function SignIn({ state, setState, setIsDangNhap }) {

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
                        type='text'
                        value={state.studentCode}
                        name='studentCode'
                        placeholder='Mã số sinh viên'
                        onChange={handleChangeValue}
                        autoComplete='off'
                        className={clsx({'filled': state.studentCode})}
                    />
                    <input 
                        type='text'
                        value={state.password}
                        name='password'
                        placeholder='Mật khẩu'
                        onChange={handleChangeValue}
                        autoComplete='off'
                        className={clsx({'filled': state.password})}
                    />
                </form>
            </div>
            <div className='client-log-button'>
                <button className='secondary-button'>Đăng ký</button>
                <p>Chưa có tài khoản? <span onClick={() => setIsDangNhap(false)}>Đăng ký ngay</span></p>
            </div>
        </>
    )
}

export default SignIn