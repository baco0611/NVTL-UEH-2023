import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../context/ContextProvider'
import { Navigate, useNavigate } from 'react-router-dom'
import './ClientProudMate.scss'
import ClientProudMateIndex1 from './ClientProudMateIndex1/ClientProudMateIndex1'
import ClientProudMateIndex2 from './ClientProudMateIndex2/ClientProudMateIndex2'
import ClientProudMateIndex3 from './ClientProudMateIndex3/ClientProudMateIndex3'
import ClientProudMateIndex4 from './ClientProudMateIndex4/ClientProudMateIndex4'
import RequestLogin from '../../../../components/RequestLogin/RequestLogin'
import axiosClient from '../../../../context/axiosClient'

function ClientProudMate() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])
    const urlParams = new URLSearchParams(window.location.search);
    const [ index, setIndex ] = useState(urlParams.get('index'))
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('ACCESS_USER')) || JSON.parse(sessionStorage.getItem('ACCESS_USER'))
    const { getUserId } = useContext(UserContext)
    // const [ proudMateInfo, setProudMateInfo ] = useState({
    //     status: 200,
    //     condition: true,
    //     teamInformation: {
    //         idProudMate: "",
    //         teamName: "",
    //         memberName1: "",
    //         memberStudentCode1: "",
    //         memberName2: "",
    //         memberStudentCode2: "",
    //         memberName3: "",
    //         memberStudentCode3: "",
    //         proof: true,
    //     }
    // })

    const [ proudMateInfo, setProudMateInfo ] = useState({
        status: 200,
        condition: false
    })

    useEffect(() => {
        if(!index) {
            navigate('/primewave/proudmate?index=1')
            setIndex(1)
        }
        else {
            navigate(`/primewave/proudmate?index=${index}`)
        }
    }, [index])

    useEffect(() => {
        const Params = new URLSearchParams(window.location.search);
        setIndex(Params.get('index'))
    }, [window.location.href])

    useEffect(() => {
        axiosClient.get('/getProudMate/' + getUserId(user.id).real)
        .then(response => {
            if(response.data.condition)
                setProudMateInfo({
                    condition: true,
                    teamInformation: response.data.data[0]
                })
        })
    }, [])

    return (
        <section id='client-proud'>
        {
            user == null &&
            <RequestLogin/>
        }
        {
            index == 1 
            ?
                <ClientProudMateIndex1
                    setIndex={setIndex}
                />
            : index == 2
            ?
                <ClientProudMateIndex2
                    setIndex={setIndex}
                    proudMateInfo={proudMateInfo}
                    setProudMateInfo={setProudMateInfo}
                />
            : index == 3
            ?
                <ClientProudMateIndex3
                    setIndex={setIndex}
                    proudMateInfo={proudMateInfo}
                />
            : index == 4
            ?
                <ClientProudMateIndex4
                    setIndex={setIndex}
                    proudMateInfo={proudMateInfo}
                    setProudMateInfo={setProudMateInfo}
                />
            :
                <Navigate to={'/error'}/>
        }
        </section>
    )
}

export default ClientProudMate