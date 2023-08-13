import { useContext, useEffect, useState } from 'react'
import './ClientFooter.scss'
import clsx from 'clsx'
import BPTLogo from './img/BPTLogo.png'
import { UserContext } from '../../../context/ContextProvider'
import { Link } from 'react-router-dom'
function ClientFooter() {
    const { path } = useContext(UserContext)

    return (
        <footer id='client-footer' className={clsx({
            'recruitment':  path == '/recruitment'   
        }
        )}>
            <div className='client-footer'>
                <div className='client-footer-logo'>
                    <img src={BPTLogo}/>
                    <h2>BAN PHONG TRÀO - TÌNH NGUYỆN<br/>ĐOÀN TRƯỜNG UEH</h2>
                </div>
                <div className='client-footer-address'>
                    <div className='client-footer-info'>
                        <h3>ĐỊA CHỈ</h3>
                        <h4>59C Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh</h4>
                    </div>
                    <div className='client-footer-info'>
                        <h3>EMAIL</h3>
                        <h4>banphongtrao@global.ueh.edu.vn</h4>
                    </div>
                </div>
                <div className='client-footer-connect'>
                    <h3>LIÊN HỆ</h3>
                    <div className='client-footer-info'>
                        <h3>MS. DƯ PHÚC MỸ KIM</h3>
                        <h4>CHỦ TỊCH HỘI SINH VIÊN UEH</h4>
                        <p>SĐT: 0934000901</p>
                        <p>EMAIL: kim.du@isb.edu.vn</p>
                    </div>
                    <div className='client-footer-info'>
                        <h3>MS. NGUYỄN VÕ KIM NGÂN</h3>
                        <h4>PHÓ CHỦ TỊCH HỘI SINH VIÊN UEH</h4>
                        <p>SĐT: 0839224444</p>
                        <p>EMAIL: nguyenvokimngan2304@gmail.com</p>
                    </div>
                    <div className='client-footer-info'>
                        <h3>MS. ĐÀO ANH TRÚC</h3>
                        <h4>CHỦ TỊCH HỘI SINH VIÊN UEH</h4>
                        <p>SĐT: 0934000901</p>
                        <p>EMAIL: kim.du@isb.edu.vn</p>
                    </div>
                </div>
            </div>
            {
                path != '/login' &&
                <div className='client-footer-sns'>
                    <Link to={'https://www.tiktok.com/@bptueh'} target='blank'>
                        <i className="fa-brands fa-tiktok"></i>
                    </Link>
                    <Link to={'https://www.facebook.com/BPTUEH/'} target='blank'>
                        <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link to={'https://www.instagram.com/banphongtrao.ueh/'} target='blank'>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link to={'https://youth.ueh.edu.vn/'} target='blank'>
                        <i className="fa-solid fa-globe"></i>
                    </Link>
                    <Link to={'https://www.youtube.com/channel/UCukkP4Wu3VH5kqK1inZNOAg'} target='blank'>
                        <i className="fa-brands fa-youtube"></i>
                    </Link>
                </div>
            }
            <p id='copyright'>Copyright &copy; 2023 by Huỳnh Văn Nguyên Bảo - Nguyễn Thị Vân Anh</p>
        </footer>
    )
}

export default ClientFooter