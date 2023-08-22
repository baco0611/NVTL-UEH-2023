import { Link } from 'react-router-dom'
import './RequestLogin.scss'
import shark from './img/shark.png'
function RequestLogin() {
    return (
        <div id="request">
            <div className='request'>
                <h1>Bạn đã là "chú cá" <br/> trong "đại dương" UEH chưa?</h1>
                <img className='animate__animated animate__swing animate__infinite animate__slow' src={shark}/>
                <p>Hãy <Link to={'/login'}>Đăng nhập</Link> để cùng khám phá “đại dương” UEH nhé!</p>
            </div>
        </div>
    )
}

export default RequestLogin