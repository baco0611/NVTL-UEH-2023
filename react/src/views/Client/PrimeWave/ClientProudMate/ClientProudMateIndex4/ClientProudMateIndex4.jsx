import { Navigate } from 'react-router-dom'
import './ClientProudMateIndex4.scss'
import { useContext, useRef, useState } from 'react'
import { UserContext } from '../../../../../context/ContextProvider'
import clsx from 'clsx'
import { getBase64 } from '../../../Casting/scripts/base64'
import care from './img/care.png'
import fish from './img/fish.png'
import { handleUploadProof } from './handleUploadProof'
import shark from '../../../../../components/RequestLogin/img/shark.png'
import Swal from 'sweetalert2'
import axiosClient from '../../../../../context/axiosClient'
import RequestLaptop from '../../../../../components/RequestLaptop/RequestLaptop'

export default function ClientProudMateIndex4({ setIndex, proudMateInfo, setProudMateInfo }) {

    if(!proudMateInfo.condition)
        setIndex(2)
    
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
        if(proof.proofName) {
            loadingRef.current.classList.remove('none')
            const postResult = await handleUploadProof(proof)
            if(postResult) {
                loadingRef.current.classList.add('none')
                Swal.fire({
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    customClass: {
                        confirmButton: 'user-update-success-button'
                    },
                    html: `
                        <div class="user-update-success">
                            <i class="fa-regular fa-circle-check"></i>
                            <h1>Bạn đã đăng kí thành công</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn"><a href="/primewave" style="color:white">Về lại trang Prime Wave</a></h2>',
                    confirmButtonColor: "#3288f3"
                }) 
                axiosClient.get('/getProudMate/' + teamInformation.idMember1)
                .then(response => 
                    setProudMateInfo({
                        teamInformation: response.data.data[0],
                        condition: true
                    })
                )
            } else {
                loadingRef.current.classList.add('none')
                Swal.fire({
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    customClass: {
                        confirmButton: 'user-update-success-button'
                    },
                    html: `
                        <div class="user-update-success">
                            <i class="fa-regular fa-circle-xmark"></i>
                            <h1>Gửi minh chứng thất bại, vui lòng thử lại sau</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                    confirmButtonColor: "#3288f3"
                }) 
            }
            loadingRef.current.classList.add('none')
        } else {
            Swal.fire({
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                },
                customClass: {
                    confirmButton: 'user-update-success-button'
                },
                html: `
                    <div class="user-update-success">
                        <i class="fa-regular fa-circle-xmark"></i>
                        <h1>Vui lòng tải file minh chứng trước khi gửi</h1>
                    </div>
                `,
                confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                confirmButtonColor: "#3288f3"
            }) 
        }
    }

    return (
        <div className="client-proud-4">
        {
            !proudMateInfo.teamInformation.proof &&
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
            ||
            <div className='client-proud-4-main'>
                <div className='client-proud-4-teamName'>
                    <h1>{proudMateInfo.teamInformation.teamName}</h1>
                    <h2>{proudMateInfo.teamInformation.teamName}</h2>
                </div>
                <div className='client-proud-4-success'>
                    <img src={fish}/>
                    <h1>Chúc mừng bạn đã hoàn thành thử thách</h1>
                </div>
            </div>
        }
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
            {
                window.innerWidth < 1024 &&
                <RequestLaptop/>
            }
        </div>
    )
}
