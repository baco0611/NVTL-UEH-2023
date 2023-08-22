import { Link } from 'react-router-dom'
import './RequestLogin.scss'
import shark from './img/shark.png'
function RequestLogin() {
    return (
        <div id="request">
            <div className='request'>
                <h1>Bạn đã phải là một "chú cá"<br/>trong "đại dương" UEH chưa?</h1>
                <img src={shark}/>
                <p>Vui lòng <Link to={'/login'}>Đăng nhập</Link> để có thể tham gia các hoạt động của Trào</p>
            </div>
        </div>
    )
}

export default RequestLogin