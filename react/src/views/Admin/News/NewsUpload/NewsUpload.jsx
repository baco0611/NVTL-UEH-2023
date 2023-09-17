import { useRef, useState } from 'react'
import './NewsUpload.scss'
import { getBase64 } from '../../../Client/Casting/scripts/base64'
import Swal from 'sweetalert2'
import axiosClient from '../../../../context/axiosClient'

function NewsUpload({ setUploadStatus, category }) {
    const [ value, setValue ] = useState({
        title: "",
        subTitle: "",
        thumbnail: "",
        thumbnailName: "",
        category,
        linkPost: ""
    })

    const imageRef = useRef()
    
    const handleChangePic = async (e) => {
        const file = e.target.files[0]
        const base64 = await getBase64(file)

        setValue({
            ...value,
            thumbnail: base64,
            thumbnailName: file.name
        })
    }

    const handleChangeValue = e => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const uploadImage = () => {
        if(
            value.title && value.subTitle && value.linkPost && value.thumbnail
        ) {
            axiosClient.post('/newsUpload', value)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
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
                        <i style="background: #4f4949" class="fa-regular fa-circle-xmark"></i>
                        <h1>Vui lòng điền đầy đủ thông tin</h1>
                    </div>
                `,
                confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                confirmButtonColor: "#4f4949"
            })
        }
    }

    return (
        <div className='new-upload'>
            <div className='new-upload-block'>
                <i 
                    className="fa-solid fa-xmark close"
                    onClick={() => setUploadStatus(false)}
                ></i>
                <h1>Upload News</h1>
                <form>
                    <div className='image'>
                        <input
                            type='file'
                            accept='.png, .jpeg, .jpg'
                            style={{display: "none"}}
                            ref={imageRef}
                            onChange={handleChangePic}
                        />
                        {
                            value.thumbnail 
                            &&
                            <img 
                                src={value.thumbnail}
                                onClick={() => imageRef.current.click()}
                            />
                            ||
                            <i 
                                className="fa-solid fa-images"
                                onClick={() => imageRef.current.click()}
                            ></i>
                        }
                        <p>
                            {
                                value.thumbnailName || "Click vào biểu tượng để upload ảnh"
                            }
                        </p>
                    </div>
                    <div className='input'>
                        <label htmlFor='news-title'>Title</label>
                        <input
                            name='title'
                            id='news-title'
                            value={value.title}
                            onChange={handleChangeValue}
                        />
                    </div>
                    <div className='input'>
                        <label htmlFor='news-subtitle'>Sub title</label>
                        <textarea
                            name='subTitle'
                            id='news-subtitle'
                            value={value.subTitle}
                            onChange={handleChangeValue}
                        />
                    </div>
                    <div className='input'>
                        <label htmlFor='news-link'>Link</label>
                        <input
                            name='linkPost'
                            id='news-link'
                            value={value.linkPost}
                            onChange={handleChangeValue}
                        />
                    </div>
                </form>
                <button 
                    className='upload'
                    onClick={uploadImage}
                >Upload</button>
            </div>
        </div>
    )
}

export default NewsUpload