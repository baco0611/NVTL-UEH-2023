import { useContext } from 'react'
import './ComingSoon.scss'
import coming from './img/Coming.png'
import Tcoming from './img/TComing.png'
import { UserContext } from '../../context/ContextProvider'
import clsx from 'clsx'

function ComingSoon() {
    const { path } = useContext(UserContext)

    return (
        <div className={clsx("coming", {recruit: path == '/recruitment'})}>
            <div className='coming-quote'>
            {
                path == '/recruitment'
                &&
                <img src={Tcoming}/>
                ||
                <img src={coming}/>
            }
            </div>
        </div>
    )
}

export default ComingSoon