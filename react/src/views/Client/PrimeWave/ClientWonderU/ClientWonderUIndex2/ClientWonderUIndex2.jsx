import clsx from "clsx"
import care from '../../ClientProudMate/ClientProudMateIndex4/img/care.png'
import { useContext, useRef, useState } from "react"
import { UserContext } from "../../../../../context/ContextProvider"
import { getBase64 } from "../../../Casting/scripts/base64"
import RequestLaptop from "../../../../../components/RequestLaptop/RequestLaptop"
import shark from '../../../../../components/RequestLogin/img/shark.png'

function ClientWonderUIndex2() {
    const { getUserId } = useContext(UserContext)
    const user = JSON.parse(localStorage.getItem('ACCESS_USER')) || JSON.parse(sessionStorage.getItem('ACCESS_USER'))

    const [ proof, setProof ] = useState({
        idUser: getUserId(user.id).real,
        proof1: "",
        proof1Name: "",
        proof2: "",
        proof2Name: "",
    })

    const download1Ref = useRef()
    const download2Ref = useRef()
    const loadingRef = useRef()

    const handleChangeProof = async (e) => {
        const file = e.target.files[0]
        const name = e.target.name 

        setProof({
            ...proof,
            [name + 'Name']: file.name.replace(/[^A-Z0-9]+/ig, "_"),
            [name]: await getBase64(file)
        })
    }

    const handleSaving = () => {
        console.log(proof)
    }

    return (
        <div className="client-proud-4">
            {
                <div className='client-proud-4-main'>
                    <div className='client-proud-4-input'>
                        <div 
                            className={clsx('item')} 
                            onClick={() => download1Ref.current.click()}
                        >
                        {
                            proof.proof1Name 
                            &&
                            <p className='proof'>{proof.proof1Name}</p>
                            ||
                            <p>Hình ảnh minh chứng bạn đã up video lên story Facebook</p>
                        }
                        </div>
                        <input 
                            type='file' 
                            ref={download1Ref} 
                            accept='.png, .jpeg, .jpg'
                            name="proof1"
                            onChange={handleChangeProof}
                        />
                    </div>
                    <div className='client-proud-4-input'>
                        <div 
                            className={clsx('item')} 
                            onClick={() => download2Ref.current.click()}
                        >
                        {
                            proof.proof2Name 
                            &&
                            <p className='proof'>{proof.proof2Name}</p>
                            ||
                            <p>Hình ảnh minh chứng bạn đã up video lên Tiktok cá nhân</p>
                        }
                        </div>
                        <input 
                            type='file' 
                            ref={download2Ref} 
                            accept='.png, .jpeg, .jpg'
                            name="proof2"
                            onChange={handleChangeProof}
                        />
                    </div>
                    <div className='client-proud-4-care'>
                        <img src={care}/>
                        <p>
                            Các file ảnh được up load định dạng: png, jpeg, jpg
                        </p>
                    </div>
                </div>
            }
            <div className='client-proud-4-btn'>
                <button className='secondary-button' onClick={() => setIndex(1)}>Quay lại</button>
                {
                    //!proudMateInfo.teamInformation.proof &&
                    <button className='secondary-button' onClick={handleSaving}>Gửi</button>
                }
            </div>
            <div ref={loadingRef} className="loading none">
                <div className="loading-container">
                    <img className="animate__animated animate__swing animate__infinite animate__slow" src={shark}/>
                    <div className="continuous"></div>
                </div>
            </div>
            {
                window.innerWidth < 1024 &&
                <RequestLaptop/>
            }
        </div>
    )
}

export default ClientWonderUIndex2