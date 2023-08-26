import { useState } from 'react'
import './ClientProudMateInput.scss'

function ClientProudMateInput() {
    const [ teamInformation, setTeamInfomation ] = useState({
        idMember1: "",
        memberName1: "",
        memberStudenCode1: "",
        idMember2: "",
        memberName2: "",
        memberStudenCode2: "",
        idMember3: "",
        memberName3: "",
        memberStudenCode3: "",
        teamName: "",
    })

    return (
        <div className='client-proud-2-content'>
        
        </div>
    )
}

export default ClientProudMateInput