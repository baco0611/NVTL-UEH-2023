import { useRef } from 'react'
import './ClientPrideTakeIndex1.scss'
import logo from './img/logo.png'
import { Link } from 'react-router-dom'

function ClientPrideTakeIndex1({ avatar, setAvatar, setIndex }) {

    
    const imageRef = useRef(null)

    const handleImageClick = () => {
        imageRef.current.click()
    }

    const handleChangValue = e => {
        const file = e.target.files[0]
        
        if(file) {
            setAvatar(URL.createObjectURL(file))
        }
    }

    return (
        <div id='client-pride-1' className='client-pride-1'>
            <div className='client-pride-1-logo'>
                <img src={logo}/>
            </div>
            <div className='client-pride-1-message'>
                <p>
                    Chào mừng các ‘‘chú cá’’ tân sinh viên K49 đến với ‘‘đại dương’’ UEH.
                    <br/>
                    Hãy thay cho mình 1 chiếc avatar thật xinh xắn
                    <br/>
                    để sẵn sàng khám phá đại dương bao la.
                </p>
                <div></div>
            </div>
            <div className='client-pride-1-nav'>
                <Link className="secondary-button btn" to={'/primewave'}>
                    <i className="fa-solid fa-arrow-left-long"></i>
                    Quay lại
                </Link> 
                {
                    avatar &&
                    <button className="secondary-button btn" onClick={() => setIndex(2)}>
                        Tiếp theo
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </button> 
                }
            </div>
            <div className='client-pride-1-image'>
                <div className='client-pride-1-input' onClick={handleImageClick}>
                    {
                        !avatar 
                        ?
                        <i className="image fa-regular fa-image"></i>
                        :
                        <img className='image' src={avatar}/>
                    }
                    <button>
                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        Tải ảnh lên
                    </button>
                    <input 
                        type='file' 
                        ref={imageRef}
                        accept='.png, .jpeg, .jpg'
                        onChange={handleChangValue}
                    />
                </div>
            </div>
        </div>
    )
}

export default ClientPrideTakeIndex1