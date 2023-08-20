import './ClientPrideTake.scss'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../context/ContextProvider'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import ClientPrideTakeIndex1 from './ClientPrideTakeIndex1/ClientPrideTakeIndex1'
import ClientPrideTakeIndex2 from './ClientPrideTakeIndex2/ClientPrideTakeIndex2'
import ClientPrideTakeIndex3 from './ClientPrideTakeIndex3/ClientPrideTakeIndex3'

function ClientPrideTake() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    const [ index, setIndex ] = useState(2)
    const navigate = useNavigate()

    const [ avatar, setAvatar ] = useState('')
    const [ result, setResult ] = useState('')

    useEffect(() => {
        if(!index) {
            navigate('/primewave/pridetake?index=1')
        } 
    }, [])

    return (
        <section id='client-pride'>
        {
            index == 1 
            ?
                <ClientPrideTakeIndex1
                    avatar={avatar}
                    setAvatar={setAvatar}
                    setIndex={setIndex}
                />
            : index == 2
            ?
                <ClientPrideTakeIndex2
                    avatar={avatar}
                    setResult={setResult}
                    setIndex={setIndex}
                />
            : index == 3
            ?
                <ClientPrideTakeIndex3
                    result={result}
                />
            :
                <Navigate to={'/error'}/>
        }
        </section>
    )
}

export default ClientPrideTake