import './ClientHeader.scss'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import uehlogo from './img/header_uehlogo.png'
import hoisvlogo from './img/header_hoisvlogo.png'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../context/ContextProvider'
import ClientInformation from './ClientInformation'

function ClientHeader() {
    const { path, user, handleChangePath } = useContext(UserContext)
    const navigate = useNavigate()
    const [ isNav, setIsNav ] = useState(false)
    const [ isWeekly, setIsWeekly ] = useState(false)

    const handleChangeLink = (e, value) => {
        handleChangePath(e, value, navigate)
        setIsWeekly(false)
    }

    const _setIsWeekly = (e, value) => {
        handleChangeLink(e, 'weekly')
        setIsWeekly(value)
    }

    const handleCloseMenu = e => {
        function getParent(element, id) {
            while(element.parentElement) {
                if(element.parentElement.id.split(' ').includes(id))
                    return true
                
                element = element.parentElement
            }
            return false
        }

        if(!getParent(e.target, 'nav-mobile')) {
            setIsNav(false)
            setIsWeekly(false)
        }
    }

    useEffect(() => {
        const handleClick = e => {
            let element = e.target

            while(element.parentElement) {
                if(element.parentElement.matches('.weekly'))
                {
                    element = element.parentElement
                    break
                }
                
                element = element.parentElement
            }
            if(!element.className.split(' ').includes('weekly')) {
                setIsWeekly(false)
            }
        }

        window.addEventListener('click', handleClick)

        return () => {
            window.removeEventListener('click', handleClick)
        }
    })

    return (
        <header 
            id='client-header' 
            className={clsx('client-header', {
                'recruitment':  path == '/recruitment'   
            }
            )}
        >
            <div className='client-header-mobile'>
                <i className="fa-solid fa-bars" onClick={() => setIsNav(true)}></i>
                <div 
                    className={clsx('nav-mobile', {'active-mobile': isNav})}
                    onClick={handleCloseMenu}
                >
                    <nav id='nav-mobile'>
                        <div 
                            className={clsx('client-header-item', {
                                'active': path == '/'
                            })}
                            onClick={() => setIsNav(false)}
                        >
                            <Link onClick={handleChangeLink} to={'/'}>Trang chủ</Link>
                        </div>
                        <div 
                            className={clsx('client-header-item', {
                                'active': path == '/primewave'
                            })}
                            onClick={() => setIsNav(false)}
                        >
                            <Link onClick={handleChangeLink} to={'/primewave'}>Prime wave</Link>
                        </div>
                        <div 
                            className={clsx('client-header-item weekly', {
                                'active': path == '/weekly'
                            })}
                        >
                            <Link 
                                onClick={(e) => {
                                    handleChangeLink(e)
                                    setIsNav(false)
                                }} 
                                to={'/weekly'}
                            >Tuần lễ</Link>
                            <i className="fa-solid fa-caret-down" onClick={() => setIsWeekly(!isWeekly)}></i>
                        </div>
                        {
                            isWeekly &&
                            <ul className='list-item'>
                                <li><Link 
                                    to={'/weekly/day1'}
                                    onClick={(e) => { 
                                        setIsNav(false)
                                        _setIsWeekly(e, false)}
                                    }
                                >Ngày 1</Link></li>
                                <li><Link 
                                    to={'/weekly/day2'}
                                    onClick={(e) => { 
                                        setIsNav(false)
                                        _setIsWeekly(e, false)}
                                    }
                                >Ngày 2</Link></li>
                                <li><Link 
                                    to={'/weekly/day3'}
                                    onClick={(e) => { 
                                        setIsNav(false)
                                        _setIsWeekly(e, false)}
                                    }
                                >Ngày 3</Link></li>
                                <li><Link 
                                    to={'/weekly/day4'}
                                    onClick={(e) => { 
                                        setIsNav(false)
                                        _setIsWeekly(e, false)}
                                    }
                                >Ngày 4</Link></li>
                            </ul>
                        }
                        <div 
                            className={clsx('client-header-item', {
                                'active': path == '/nightfest'
                            })}
                            onClick={() => setIsNav(false)}
                        >
                            <Link onClick={handleChangeLink} to={'/nightfest'}>Đêm hội</Link>
                        </div>
                        <div 
                            className={clsx('client-header-item', {
                                'active': path == '/casting'
                            })}
                            onClick={() => setIsNav(false)}
                        >
                            <Link onClick={handleChangeLink} to={'/casting'}>Casting</Link>
                        </div>
                        <div 
                            className={clsx('client-header-item', {
                                'active': path == '/recruitment'
                            })}
                            onClick={() => setIsNav(false)}
                        >
                            <Link onClick={handleChangeLink} to={'/recruitment'}>Tuyển CTV</Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='client-header-logo'>
                <Link to={'/'}><img src={uehlogo}/></Link>
                <Link to={'/'}><img src={hoisvlogo}/></Link>
            </div>

            <nav className='client-header-nav'>
                <div 
                    className={clsx('client-header-item', {
                        'active': path == '/'
                    })}
                >
                    <Link onClick={handleChangeLink} to={'/'}>Trang chủ</Link>
                </div>
                <div 
                    className={clsx('client-header-item', {
                        'active': path == '/primewave'
                    })}
                >
                    <Link onClick={handleChangeLink} to={'/primewave'}>Prime wave</Link>
                </div>
                <div 
                    className={clsx('client-header-item weekly', {
                        'active': path == '/weekly'
                    })}
                >
                    <Link onClick={handleChangeLink} to={'/weekly'}>Tuần lễ</Link>
                    <i className="fa-solid fa-caret-down" onClick={() => setIsWeekly(!isWeekly)}></i>
                    {
                        isWeekly &&
                        <ul className='list-item'>
                            <li><Link onClick={(e) => _setIsWeekly(e, false)} to={'/weekly/day1'}>Ngày 1</Link></li>
                            <li><Link onClick={(e) => _setIsWeekly(e, false)} to={'/weekly/day2'}>Ngày 2</Link></li>
                            <li><Link onClick={(e) => _setIsWeekly(e, false)} to={'/weekly/day3'}>Ngày 3</Link></li>
                            <li><Link onClick={(e) => _setIsWeekly(e, false)} to={'/weekly/day4'}>Ngày 4</Link></li>
                        </ul>
                    }
                </div>
                <div 
                    className={clsx('client-header-item', {
                        'active': path == '/nightfest'
                    })}
                >
                    <Link onClick={handleChangeLink} to={'/nightfest'}>Đêm hội</Link>
                </div>
                <div 
                    className={clsx('client-header-item', {
                        'active': path == '/casting'
                    })}
                >
                    <Link onClick={handleChangeLink} to={'/casting'}>Casting</Link>
                </div>
                <div 
                    className={clsx('client-header-item', {
                        'active': path == '/recruitment'
                    })}
                >
                    <Link onClick={handleChangeLink} to={'/recruitment'}>Tuyển CTV</Link>
                </div>
            </nav>
            
            {
                !user 
                &&
                    <div className='client-header-login'>
                        <Link onClick={handleChangeLink} to={'/login'}>Đăng nhập</Link>
                    </div>
                ||
                    <ClientInformation/>
            }
        </header>
    )
}

export default ClientHeader