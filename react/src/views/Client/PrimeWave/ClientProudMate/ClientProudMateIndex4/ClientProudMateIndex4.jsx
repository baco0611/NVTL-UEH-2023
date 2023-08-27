import { Navigate } from 'react-router-dom'
import './ClientProudMateIndex4.scss'
import { useContext, useRef, useState } from 'react'
import { UserContext } from '../../../../../context/ContextProvider'
import clsx from 'clsx'
import { getBase64 } from '../../../Casting/scripts/base64'
import care from './img/care.png'
import { handleUploadProof } from './handleUploadProof'
import shark from '../../../../../components/RequestLogin/img/shark.png'

export default function ClientProudMateIndex4({ setIndex, proudMateInfo }) {

    if(!proudMateInfo.condition)
        return <Navigate to={'/primewave/proudmate'}/>
    
    const { getUserId } = useContext(UserContext)

    const [ proof, setProof ] = useState({
        idProudMate: getUserId(proudMateInfo.teamInformation.idProudMate).real,
        proof: "",
        proofName: "",
    })

    const downloadRef = useRef()
    const loadingRef = useRef()

    const handleChangeProof = async (e) => {
        const file = e.target.files[0]

        const value = await getBase64(file)
        const name = file.name.replace(/[^A-Z0-9]+/ig, "_")

        setProof({
            ...proof,
            proof: value,
            proofName: name
        })
    }

    const handleSaving = async() => {
        loadingRef.current.classList.remove('none')
        const postResult = await handleUploadProof(proof)
        loadingRef.current.classList.add('none')
    }

    return (
        <div className="client-proud-4">
            <div className='client-proud-4-main'>
                <div className='client-proud-4-teamName'>
                    <h1>{proudMateInfo.teamInformation.teamName}</h1>
                    <h2>{proudMateInfo.teamInformation.teamName}</h2>
                </div>
                <div className='client-proud-4-input'>
                    <div 
                        className={clsx('item', {filled: proof.proofName})} 
                        onClick={() => downloadRef.current.click()}
                    >
                    {
                        proof.proofName 
                        &&
                        <p className='proof'>{proof.proofName}</p>
                        ||
                        <p>Hình ảnh minh chứng bạn đã up story tham gia minigame</p>
                    }
                    </div>
                    <input 
                        type='file' 
                        ref={downloadRef} 
                        accept='.png, .jpeg, .jpg'
                        onChange={handleChangeProof}
                    />
                </div>
                <div className='client-proud-4-care'>
                    <img src={care}/>
                    <p>
                        Mỗi nhóm chỉ cần 1 bạn đại diện điền form
                        <br/>Các file ảnh được up load định dạng: png, jpeg, jpg
                    </p>
                </div>
            </div>
            <div className='client-proud-4-btn'>
                <button className='secondary-button' onClick={() => setIndex(1)}>Quay lại</button>
                {
                    !proudMateInfo.teamInformation.proof &&
                    <button className='secondary-button' onClick={handleSaving}>Gửi</button>
                }
            </div>
            <div ref={loadingRef} className="loading none">
                <div className="loading-container">
                    <img className="animate__animated animate__swing animate__infinite animate__slow" src={shark}/>
                    <div className="continuous"></div>
                </div>
            </div>
        </div>
    )
}
