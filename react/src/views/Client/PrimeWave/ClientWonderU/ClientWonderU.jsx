import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../context/ContextProvider'
import { Navigate, useNavigate } from 'react-router-dom'
import RequestLogin from '../../../../components/RequestLogin/RequestLogin'
import ClientWonderUIndex1 from './ClientWonderUIndex1/ClientWonderUIndex1'
import ClientWonderUIndex2 from './ClientWonderUIndex2/ClientWonderUIndex2'
import './ClientWonderU.scss'

function ClientWonderU() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const urlParams = new URLSearchParams(window.location.search);
    const [ index, setIndex ] = useState(urlParams.get('index'))
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('ACCESS_USER')) || JSON.parse(sessionStorage.getItem('ACCESS_USER'))

    useEffect(() => {
        if(!index) {
            navigate('/primewave/wonderu?index=1')
            setIndex(1)
        }
        else {
            navigate(`/primewave/wonderu?index=${index}`)
        }
    }, [index])

    return (
        <section id='client-wonder'>
        {
            user == null &&
            <RequestLogin/>
        }
        {
            index == 1 
            ?
                <ClientWonderUIndex1
                    setIndex={setIndex}
                />
            : index == 2
            ?
                <ClientWonderUIndex2
                    setIndex={setIndex}
                />
            :   
                <Navigate to={'/error'}/>
        }
        </section>
    )
}

export default ClientWonderU