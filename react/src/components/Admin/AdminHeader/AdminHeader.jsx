import './AdminHeader.scss'
import uehlogo from './img/header_uehlogo.png'
import hoisvlogo from './img/header_hoisvlogo.png'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { useContext } from 'react'
import { UserContext } from '../../../context/ContextProvider'
function AdminHeader() {
    const { path } = useContext(UserContext)
    console.log(path)

    const handleChangeLink = () => {{

    }}

    return (
        <header id='admin-header' className='admin-header'>
            <div className='admin-header-logo'>
                <Link to={'/'}><img src={uehlogo}/></Link>
                <Link to={'/'}><img src={hoisvlogo}/></Link>
            </div>
            <nav className='admin-header-nav'>
                <div 
                    className={clsx('admin-header-item', {
                        'active': path == '/'
                    })}
                >
                    <Link onClick={handleChangeLink} to={'/'}>Trang chủ</Link>
                </div>
            </nav>
        </header>
    )
}

export default AdminHeader