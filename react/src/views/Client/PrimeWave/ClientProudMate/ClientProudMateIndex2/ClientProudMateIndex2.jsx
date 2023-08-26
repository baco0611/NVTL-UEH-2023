import './ClientProudMateIndex2.scss'
import title from './img/title.png'
import subTitle from './img/subTitle.png'
import ClientProudMateInfo from './ClientProudMateInfo'
import ClientProudMateInput from './ClientProudMateInput/ClientProudMateInput'
import { useEffect } from 'react'

export default function ClientProudMateIndex2({ setIndex, proudMateInfo, setProudMateInfo }) {

    return (
        <div className='client-proud-2'>
            <div className='client-proud-2-left'>
                <img className='title' src={title}/>
                <img className='title' src={subTitle}/>
                <p>* Hãy đảm bảo các thành viên đều đã tạo tài khoản và chưa thuộc đội nào để có thể đăng ký tham gia</p>
            </div>
            <div className='client-proud-2-right'>
            {
                proudMateInfo.condition 
                &&
                <ClientProudMateInfo/>
                ||
                <ClientProudMateInput/>
            }
            </div>
        </div>
    )
}
