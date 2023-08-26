import { useState } from 'react'
import './ClientProudMateInput.scss'
import ProudMateInputElement from './ProudMateInputElement'

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
            <form id='client-proud-2-form' className='client-proud-2-input'>
                <input
                    type='text'
                    className='teamName'
                    placeholder='Tên đội'
                />
                <ProudMateInputElement
                    state={teamInformation}
                    setState={setTeamInfomation}
                    id="idMember2"
                    name="memberName2"
                    studentCode="studentCode2"
                />
            </form>
        </div>
    )
}

export default ClientProudMateInput