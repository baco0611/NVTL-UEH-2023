import './ClientHeader.scss'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import uehlogo from './img/header_uehlogo.png'
import hoisvlogo from './img/header_hoisvlogo.png'
import { useState } from 'react'

function ClientHeader() {
    const [ path, setPath ] = useState(window.location.pathname)
    const navigate = useNavigate()
    const [ isNav, setIsNav ] = useState(false)
    const [ isWeekly, setIsWeekly ] = useState(false)

    const handleChangeLink = (e) => {
        e.preventDefault()
        const href = e.target.href
        const newPath = href.split('/')[3]

        if(newPath != path) {
            setPath('/' + newPath)
            navigate(newPath)
        }
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

        if(!getParent(e.target, 'nav-mobile')) setIsNav(false)
    }

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
                                'active': path == '/pridetide'
                            })}
                            onClick={() => setIsNav(false)}
                        >
                            <Link onClick={handleChangeLink} to={'/pridetide'}>Pride tide</Link>
                        </div>
                        <div 
                            className={clsx('client-header-item weekly', {
                                'active': path == '/weekly'
                            })}
                        >
                            <Link 
                                onClick={() => {
                                    handleChangeLink
                                    setIsNav(false)
                                }} 
                                to={'/weekly'}
                            >Tuần lễ</Link>
                            <i className="fa-solid fa-caret-down" onClick={() => setIsWeekly(!isWeekly)}></i>
                        </div>
                        {
                            isWeekly &&
                            <ul className='weekly-item'>
                                <li onClick={() => { 
                                    setIsNav(false)
                                    setIsWeekly(false)}
                                }
                                ><Link to={'/weekly/day1'}>Ngày 1</Link></li>
                                <li onClick={() => { 
                                    setIsNav(false)
                                    setIsWeekly(false)}
                                }
                                ><Link to={'/weekly/day2'}>Ngày 2</Link></li>
                                <li onClick={() => { 
                                    setIsNav(false)
                                    setIsWeekly(false)}
                                }
                                ><Link to={'/weekly/day3'}>Ngày 3</Link></li>
                                <li onClick={() => { 
                                    setIsNav(false)
                                    setIsWeekly(false)}
                                }
                                ><Link to={'/weekly/day4'}>Ngày 4</Link></li>
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
                        'active': path == '/pridetide'
                    })}
                >
                    <Link onClick={handleChangeLink} to={'/pridetide'}>Pride tide</Link>
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
                        <ul className='weekly-item'>
                            <li onClick={() => setIsWeekly(false)}><Link to={'/weekly/day1'}>Ngày 1</Link></li>
                            <li onClick={() => setIsWeekly(false)}><Link to={'/weekly/day2'}>Ngày 2</Link></li>
                            <li onClick={() => setIsWeekly(false)}><Link to={'/weekly/day3'}>Ngày 3</Link></li>
                            <li onClick={() => setIsWeekly(false)}><Link to={'/weekly/day4'}>Ngày 4</Link></li>
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

            <div className='client-header-login'>
                <Link>Đăng nhập</Link>
            </div>
        </header>
    )
}

export default ClientHeader