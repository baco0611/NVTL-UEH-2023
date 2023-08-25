import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../../../context/ContextProvider"
import clsx from 'clsx'
import Validator from "../../LogLayout/scripts/validForm"
import Swal from 'sweetalert2'
import { getBase64 } from "../scripts/base64"
import { handleUpdateStage } from "../scripts/updateDatabase"
import shark from "../img/shark.png"

function CastingStage() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/casting'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])
    
    const [ state, setState ] = useState({
        fullName: "",
        phone: "",
        schoolName: "",
        className: "",
        studentCode: "",
        accountLink: "",
        email: "",
        categoryStage: "",
        fileMusic: null,
        fileMusicName: "",
        clipTemplate: null,
        clipTemplateName: "",
        prize: ""
    })
    // console.log(state)

    useEffect(() => {
        Validator({
            form: '#client-sign-up',
            formGroupSelector: '.client-sign-item',
            errorSelector: '.client-sign-message',
            rules: [
                Validator.isRequired('#client-fullName', 'Vui lòng điền họ tên của đại diện'),
                Validator.isRequired('#client-phone', 'Vui lòng điền số điện thoại'),
                Validator.isRequired('#client-schoolName', 'Vui lòng điền tên trường của bạn'),
                Validator.isRequired('#client-accountLink', 'Vui lòng điền link facebook đại diện'),
                Validator.isRequired('#client-email', 'Vui lòng điền email của bạn'),
                Validator.isRequired('#client-categoryStage', 'Vui lòng điền thể loại văn nghệ'),
                Validator.isEmail('#client-email', 'Vui lòng điền email hợp lệ'),
                Validator.isFacebook('#client-accountLink', 'Vui lòng điền link hợp lệ'),
                Validator.isPhoneNumber('#client-phone'),
            ],
            submitButton: '#submit-button',
            action: handleUploadData
        })
    }, [state])

    const musicRef = useRef()
    const videoRef = useRef()
    const loadingRef = useRef()
    const buttonTimeOutRef = useRef(null) 

    const handleChangeValue = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleChangeMusic = async (e) => {
        const files = e.target.files
        console.log(files)
        if(files[0]) {
            const file = files[0]
            const maxSize = 1024 * 1024 * 15
            console.log(file)

            if(file.size <= maxSize) {
                const name = file.name.replace(/[^A-Z0-9]+/ig, "_")
                const fileData = await getBase64(file)
                setState({
                    ...state,
                    fileMusicName: name,
                    fileMusic: fileData
                })
            }
            else {
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
                            <h1>Vui lòng tải file nhạc dưới 20MB</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                    confirmButtonColor: "#3288f3"
                })
            }
        }
    }

    const handleChangeVideo = async (e) => {
        const files = e.target.files
        console.log(files)
        if(files[0]) {
            const file = files[0]
            const maxSize = 1024 * 1024 * 75
            console.log(file)

            if(file.size <= maxSize) {
                const name = file.name.replace(/[^A-Z0-9]+/ig, "_")
                const fileData = await getBase64(file)
                setState({
                    ...state,
                    clipTemplateName: name,
                    clipTemplate: fileData
                })
            }
            else {
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
                            <h1>Vui lòng tải file video dưới 75MB</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                    confirmButtonColor: "#3288f3"
                })
            }
        }
    }

    const handleUploadData = async() => {
        if(state.clipTemplateName && state.fileMusicName) {
            loadingRef.current.classList.remove('none')
            const result = await handleUpdateStage(state)
            if(result) {
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
                    confirmButtonText: '<h2 class="user-update-success-btn"><a href="/" style="color:white">Về lại trang chủ</a></h2>',
                    confirmButtonColor: "#3288f3"
                }) 
                setState({
                    fullName: "",
                    phone: "",
                    schoolName: "",
                    className: "",
                    studentCode: "",
                    accountLink: "",
                    email: "",
                    categoryStage: "",
                    fileMusic: null,
                    fileMusicName: "",
                    clipTemplate: null,
                    clipTemplateName: "",
                    prize: ""
                })
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
                            <h1>Đăng kí thất bại, vui lòng thử lại sau</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                    confirmButtonColor: "#3288f3"
                }) 
            }
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
                        <h1>Bạn chưa tải đủ các file liên quan</h1>
                    </div>
                `,
                confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                confirmButtonColor: "#3288f3"
            }) 
        }
    }

    return (
        <div className="client-casting-item">
            <h1>CASTING VĂN NGHỆ</h1>
            
            <div className="client-casting-item-content">
                <form className='client-sign-form client-casting-form' id='client-sign-up'>
                    <div className='client-sign-item input-1'>
                        <input 
                            id='client-fullName'
                            type='text'
                            value={state.fullName}
                            name='fullName'
                            placeholder='Họ và tên người đại diện'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.fullName})}
                        />
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item input-2'>
                        <input 
                            id='client-phone'
                            type='text'
                            value={state.phone}
                            name='phone'
                            placeholder='Số điện thoại'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.phone})}
                        />
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item input-3'>
                        <input 
                            id='client-schoolName'
                            type='text'
                            value={state.schoolName}
                            name='schoolName'
                            placeholder='Trường'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.schoolName})}
                        />
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item input-4'>
                        <input 
                            id='client-className'
                            type='text'
                            value={state.className}
                            name='className'
                            placeholder='Khóa - Lớp'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.className})}
                        />
                        <p>*Đối với sinh viên UEH</p>
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item input-5'>
                        <input 
                            id='studentCode'
                            type='text'
                            value={state.studentCode}
                            name='studentCode'
                            placeholder='Mã số sinh viên'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.studentCode})}
                        />
                        <p>*Đối với sinh viên UEH</p>
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item input-6'>
                        <input 
                            id='client-accountLink'
                            type='text'
                            value={state.accountLink}
                            name='accountLink'
                            placeholder='Link Facebook người đại diện'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.accountLink})}
                        />
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item input-7'>
                        <input 
                            id='client-email'
                            type='text'
                            value={state.email}
                            name='email'
                            placeholder='Email'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.email})}
                        />
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item input-8'>
                        <input 
                            id='client-categoryStage'
                            type='text'
                            value={state.categoryStage}
                            name='categoryStage'
                            placeholder='Thể loại văn nghệ'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.categoryStage})}
                        />
                        <span className='client-sign-message'></span>
                    </div>
                    <div className='client-sign-item input-9'>
                        <div 
                            id='client-casting-file' 
                            className={clsx('client-casting-form-item cursorPointer', {
                                filled: state.fileMusicName
                            })}
                            onClick={() => {musicRef.current.click()}}
                        >
                        {
                            state.fileMusicName 
                            &&
                                <p>{state.fileMusicName}</p>
                            ||
                                <p className='placeholder'>File nhạc</p>
                        }
                        </div>
                        <p>{'*Upload file định dạng mp3/wav (<=15MB)'}</p>
                        <span className='client-sign-message'></span>
                        <input ref={musicRef} className="none" type="file" accept=".wav, .mp3" onChange={handleChangeMusic}/>
                    </div>
                    <div className='client-sign-item input-10'>
                        <div 
                            id='client-casting-file' 
                            className={clsx('client-casting-form-item cursorPointer', {
                                filled: state.clipTemplateName
                            })}
                            onClick={() => {videoRef.current.click()}}
                        >
                        {
                            state.clipTemplateName 
                            &&
                                <p>{state.clipTemplateName}</p>
                            ||
                                <p className='placeholder'>Clip mẫu (tối đa 1 phút)</p>
                        }
                        </div>
                        <p>{'*Upload file định dạng mp4/webp (<=75MB)'}</p>
                        <span className='client-sign-message'></span>
                        <input ref={videoRef} className="none" type="file" accept=".mp4, .webp" onChange={handleChangeVideo}/>
                    </div>
                    <div className='client-sign-item input-prize'>
                        <input 
                            id='client-prize'
                            type='text'
                            value={state.prize}
                            name='prize'
                            placeholder='Giải thưởng liên quan (nếu có)'
                            onChange={handleChangeValue}
                            autoComplete='off'
                            className={clsx({'filled': state.prize})}
                        />
                        <span className='client-sign-message'></span>
                    </div>
                </form>
            </div>
            <div className="client-casting-btn">
                <button id="submit-button" className="secondary-button">Đăng ký</button>
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

export default CastingStage