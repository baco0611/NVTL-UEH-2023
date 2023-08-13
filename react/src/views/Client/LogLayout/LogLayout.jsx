import { Outlet } from 'react-router-dom'
import './LogLayout.scss'
import SidePic from './img/SidePic.png'

function LogLayout() {
    return (
        <section id='client-log' className='client-log'>
            <img src={SidePic}></img>
            <Outlet/>
        </section>
    )
}

export default LogLayout