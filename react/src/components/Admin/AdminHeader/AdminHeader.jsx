import './AdminHeader.scss'
import uehlogo from './img/header_uehlogo.png'
import hoisvlogo from './img/header_hoisvlogo.png'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { UserContext } from '../../../context/ContextProvider'
import { useContext, useEffect, useState } from 'react'
function AdminHeader() {
    const { path, setUser, setPath, user } = useContext(UserContext)
    const [ isCasting, setIsCasting ] = useState(false)
    const [ isNews, setIsNews ] = useState(false)
    const navigate = useNavigate()
    console.log(user)

    const handleActiveList = (e, setState) => {
        e.preventDefault()
        setState()
    }

    const logOut = () => {
        setUser()
        setPath('/')
        navigate('/status')
    }

    useEffect(() => {
        const handleClick = e => {
            let element = e.target

            while(element.parentElement) {
                if(element.parentElement.matches('.list'))
                {
                    element = element.parentElement
                    break
                }
                
                element = element.parentElement
            }
            if(!element.className.split(' ').includes('list')) {
                setIsCasting(false)
                setIsNews(false)
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    })

    return (
        <header id='admin-header' className='admin-header'>
            <div className='admin-header-logo'>
                <Link to={'/'}><img src={uehlogo}/></Link>
                <Link to={'/'}><img src={hoisvlogo}/></Link>
            </div>
            <nav className='admin-header-nav'>
                <div 
                    className={clsx('admin-header-item', {
                        'active': path == '/status'
                    })}
                >
                    <Link to={'/status'}>Trạng thái</Link>
                </div>
                <div 
                    className={clsx('admin-header-item', {
                        'active': path == '/account'
                    })}
                >
                    <Link to={'/account'}>Tài khoản</Link>
                </div>
                <div 
                    className={clsx('admin-header-item', {
                        'active': path == '/mission'
                    })}
                >
                    <Link to={'/mission'}>Priwe Wave</Link>
                </div>
                <div 
                    className={clsx('admin-header-item', 'list', {
                        'active': path == '/casting'
                    })}
                >
                    <Link onClick={(e) => handleActiveList(e, () => setIsCasting(!isCasting))}>Casting</Link>
                    <i className="fa-solid fa-caret-down" onClick={() => setIsCasting(!isCasting)}></i>
                    {
                        isCasting &&
                        <ul className='list-item admin'>
                            <li><Link onClick={() => setIsCasting(false)} to={'/stage'}>Văn Nghệ</Link></li>
                            <li><Link onClick={() => setIsCasting(false)} to={'/mc'}>MC</Link></li>
                        </ul>
                    }
                </div>
                <div 
                    className={clsx('admin-header-item', {
                        'active': path == '/recruit'
                    })}
                >
                    <Link to={'/recruit'}>Tuyển CTV</Link>
                </div>
                <div 
                    className={clsx('admin-header-item', 'list', {
                        'active': path == '/news'
                    })}
                >
                    <Link onClick={(e) => handleActiveList(e, () => setIsNews(!isNews))}>News</Link>
                    <i className="fa-solid fa-caret-down" onClick={() => setIsNews(!isNews)}></i>
                    {
                        isNews &&
                        <ul className='list-item admin'>
                            <li><Link onClick={() => setIsNews(false)} to={'/news/home'}>Home</Link></li>
                            <li><Link onClick={() => setIsNews(false)} to={'/news/weekly'}>Tuần lễ</Link></li>
                        </ul>
                    }
                </div>
            </nav>
            <div className='admin-header-login cursorPointer'>
                <p onClick={logOut}>Đăng xuất</p>
            </div>
        </header>
    )
}

export default AdminHeader