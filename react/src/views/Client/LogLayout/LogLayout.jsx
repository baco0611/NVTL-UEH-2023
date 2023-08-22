import { Outlet } from 'react-router-dom'
import './LogLayout.scss'
import SidePic from './img/SidePic.png'
import { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/ContextProvider'

function LogLayout() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/login'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section id='client-log' className='client-log'>
            <img src={SidePic}></img>
            <Outlet/>
        </section>
    )
}

export default LogLayout