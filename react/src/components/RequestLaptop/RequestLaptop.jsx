import shark from '../RequestLogin/img/shark.png'
import '../RequestLogin/RequestLogin.scss'
function RequestLaptop() {
    return (
        <div id="request">
            <div className='request'>
                <h1>Hãy sử dụng máy tính để <br/> có thể điền thông tin bạn nhé ^^</h1>
                <img className='animate__animated animate__swing animate__infinite animate__slow' src={shark}/>
                <h1></h1>
            </div>
        </div>
    )
}

export default RequestLaptop