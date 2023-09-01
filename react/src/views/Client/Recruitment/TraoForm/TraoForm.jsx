import './TraoForm.scss'
import information from './img/information.png'
import introduce from './img/introduce.png'
import apply from './img/apply.png'
import * as Question from './img/Question'
import { useContext, useEffect, useRef, useState } from 'react'
import Validator from '../../LogLayout/scripts/validForm'
import { getBase64 } from "../../Casting/scripts/base64"
import { UserContext } from '../../../../context/ContextProvider'
import Swal from 'sweetalert2'
import { checkFile, errorInformation, handleApply } from './script/applyForm'
import loadingImg from './img/loading.png'
import clsx from 'clsx'
import RequestLaptop from '../../../../components/RequestLaptop/RequestLaptop'

function TraoForm() {
    const { getParent, setPath } = useContext(UserContext)
    useEffect(() => setPath('/recruitment'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    const [ informationValue, setInformationValue ] = useState({
        fullName: "",
        studentCode: "",
        email: "",
        phone: "",
        accountLink: "",
        grade: "K48"
    })

    const changeInformation = e => {
        setInformationValue({
            ...informationValue,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        Validator({
            form: "#client-recruit-information",
            formGroupSelector: '.client-recruit-item',
            errorSelector: '.recruit-message',
            rules: [
                Validator.isRequired('#recruit-fullName', 'Vui lòng điền họ tên của bạn'),
                Validator.isRequired('#recruit-studentCode', 'Vui lòng điền mã số sinh viên của bạn'),
                Validator.isRequired('#recruit-email', 'Vui lòng điền email của bạn'),
                Validator.isEmail('#recruit-email', 'Vui lòng điền email hợp lệ'),
                Validator.isRequired('#recruit-phone', 'Vui lòng điền số điện thoại'),
                Validator.isPhoneNumber('#recruit-phone', 'Vui lòng điền số điện thoại hợp lệ'),
                Validator.isRequired('#recruit-accountLink', 'Vui lòng điền link facebook của bạn'),
                Validator.isFacebook('#recruit-accountLink', 'Vui lòng điền link facebook hợp lệ'),
            ],
            // submitButton: '.client-apply'
        })
    }, [informationValue])

    const [ introduceFile, setIntroduceFile ] = useState([])

    const introduceRef = useRef()

    const SwalFile = value => {
        const [error, maxSize] = value
        const MB = maxSize / (1024*1024)

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
                    <i style="background: #be291f" class="fa-regular fa-circle-xmark"></i>
                    <h1>${error} bạn tải lên đã vượt quá ${MB}MB. Vui lòng tải lại file khác.</h1>
                </div>
            `,
            confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
            confirmButtonColor: "#be291f"
        })
    }

    const appendIntroduceFile = async (e) => {
        const files = e.target.files

        Array.from(files).forEach(async file => {
            const check = checkFile(file)

            if(check == true) {
                const fileName = file.name.replace(/[^A-Z0-9]+/ig, "_")
                const _file = await getBase64(file)
                
                setIntroduceFile(prev => {
                    return [
                        ...prev,
                        {
                            fileName,
                            file: _file,
                            type: 'information'
                        }
                    ]
                })
            } else {
                SwalFile(check)
            }
        })
    }

    const deleteIntroduceFile = index => {
        const newList = [...introduceFile]
        newList.splice(index, 1)
        setIntroduceFile(newList)
    }

    const aspiration = [
        "CREATIVE",
        "COMS & PR",
        "GRAPHIC DESIGN",
        "SCENOGRAPHY",
        "HR",
        "VIDEOGRAPHY"
    ]

    const aspirationQues = {
        "CREATIVE": "creative",
        "COMS & PR": "coms",
        "GRAPHIC DESIGN": "graphic",
        "SCENOGRAPHY": "sceno",
        "HR": "hr",
        "VIDEOGRAPHY": "video"
    }

    const [ aspiration1, setAspiration1 ] = useState("")
    const [ aspiration1File, setAspiration1File] = useState([])
    const [ aspiration1Open, setAspiration1Open ] = useState(false)

    const aspiration1Ref = useRef()
    const aspiration1DivRef = useRef()

    const setAspiration1Value = value => {
        setAspiration1Open(false)
        setAspiration1(value)
        setAspiration1File([])
        if(value == aspiration2) {
            setAspiration2("")
            setAspiration2File([])
        }
    }

    const appendAspiration1File = async (e) => {
        const files = e.target.files

        Array.from(files).forEach(async file => {
            const check = checkFile(file)

            if(check == true) {
                const fileName = file.name.replace(/[^A-Z0-9]+/ig, "_")
                const _file = await getBase64(file)
                
                setAspiration1File(prev => {
                    return [
                        ...prev,
                        {
                            fileName,
                            file: _file,
                            type: 'aspiration1'
                        }
                    ]
                })
            } else {
                SwalFile(check)
            }
        })
    }

    const deleteAspiration1File = index => {
        const newList = [...aspiration1File]
        newList.splice(index, 1)
        setAspiration1File(newList)
    }

    const [ aspiration2, setAspiration2 ] = useState("")
    const [ aspiration2File, setAspiration2File] = useState([])
    const [ aspiration2Open, setAspiration2Open ] = useState(false)

    const aspiration2Ref = useRef()
    const aspiration2DivRef = useRef()

    const setAspiration2Value = value => {
        setAspiration2Open(false)
        setAspiration2(value)
        setAspiration2File([])
    }

    const appendAspiration2File = async (e) => {
        const files = e.target.files

        Array.from(files).forEach(async file => {
            const check = checkFile(file)

            if(check == true) {
                const fileName = file.name.replace(/[^A-Z0-9]+/ig, "_")
                const _file = await getBase64(file)
                
                setAspiration2File(prev => {
                    return [
                        ...prev,
                        {
                            fileName,
                            file: _file,
                            type: 'aspiration2'
                        }
                    ]
                })
            } else {
                SwalFile(check)
            }
        })
    }

    const deleteAspiration2File = index => {
        const newList = [...aspiration2File]
        newList.splice(index, 1)
        setAspiration2File(newList)
    }

    useEffect(() => {
        const handleClose = (e) => {
            const element = e.target
            const parentElement = getParent(element, '.client-recruit-aspiration')
            
            if(aspiration1Open)
                if(parentElement != aspiration1DivRef.current) {
                    setAspiration1Open(false)
                }

            if(aspiration2Open)
                if(parentElement != aspiration2DivRef.current) {
                    setAspiration2Open(false)
                }
        }

        window.addEventListener('click', handleClose)

        return () => window.removeEventListener('click', handleClose)
    }, [])

    const loadingRef = useRef()
    const [ error, setError ] = useState({})

    const clickApply = async () => {
        if( informationValue.fullName=="" || 
            informationValue.accountLink=="" ||
            informationValue.email=="" ||
            informationValue.phone=="" ||
            informationValue.studentCode==""
        ) {
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
                        <i style="background: #be291f" class="fa-regular fa-circle-xmark"></i>
                        <h1>Vui lòng điền đầy đủ thông tin chung</h1>
                    </div>
                `,
                confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                confirmButtonColor: "#be291f"
            })
        }
        else
        if(introduceFile.length <= 0) {
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
                        <i style="background: #be291f" class="fa-regular fa-circle-xmark"></i>
                        <h1>Vui lòng upload các file giới thiệu bản thân</h1>
                    </div>
                `,
                confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                confirmButtonColor: "#be291f"
            })
        }
        else
        if(!aspiration1) {
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
                        <i style="background: #be291f" class="fa-regular fa-circle-xmark"></i>
                        <h1>Vui lòng chọn nguyện vọng 1</h1>
                    </div>
                `,
                confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                confirmButtonColor: "#be291f"
            })
        }
        else
        if(aspiration1File.length <= 0) {
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
                        <i style="background: #be291f" class="fa-regular fa-circle-xmark"></i>
                        <h1>Vui lòng upload sản phẩm nguyện vọng 1</h1>
                    </div>
                `,
                confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                confirmButtonColor: "#be291f"
            })
        }
        else
        if(aspiration2 != "" && aspiration2File.length <= 0) {
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
                        <i style="background: #be291f" class="fa-regular fa-circle-xmark"></i>
                        <h1>Vui lòng upload sản phẩm nguyện vọng 2</h1>
                    </div>
                `,
                confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                confirmButtonColor: "#be291f"
            })
        } else {
            const value = {
                ...informationValue,
                aspiration1,
                aspiration2,
                files: [
                    ...introduceFile,
                    ...aspiration1File,
                    ...aspiration2File
                ]
            }

            console.log(value)
            loadingRef.current.classList.remove('none')
            const applyResult = await handleApply(value, setError)
            if(applyResult) {
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
                            <i style="background: #be291f" class="fa-regular fa-circle-check"></i>
                            <h1>Đăng ký thành công</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                    confirmButtonColor: "#be291f"
                })

                setInformationValue({
                    fullName: "",
                    studentCode: "",
                    email: "",
                    phone: "",
                    accountLink: "",
                    grade: "K48"
                })

                setIntroduceFile([])
                setAspiration1Value('')
                setAspiration2Value('')
                window.scrollTo(0, 0)
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
                            <i style="background: #be291f" class="fa-regular fa-circle-xmark"></i>
                            <h1>Đã xảy ra lỗi, vui lòng kiểm tra thông tin hoặc thử lại sau</h1>
                        </div>
                    `,
                    confirmButtonText: '<h2 class="user-update-success-btn">OK</h2>',
                    confirmButtonColor: "#be291f"
                })
            }
        }
    }

    useEffect(() => {
        errorInformation(error)
    }, [error])

    return (
        <section id="client-recruitment" className='client-recruit-form'>
            <div className='client-recruit-form-block information'>
                <img className='form-title' src={information}/>
                <form className='client-recruit-information' id='client-recruit-information'>
                    <div className='client-recruit-item'>
                        <label htmlFor='recruit-fullName'>Họ và tên:</label>
                        <input 
                            id='recruit-fullName'
                            type='text'
                            value={informationValue.fullName}
                            name='fullName'
                            onChange={changeInformation}
                            autoComplete='off'
                        />
                        <span className='recruit-message'></span>
                    </div>
                    <div className='client-recruit-item'>
                        <label>Khóa:</label>
                        <div className='client-recruit-grade'>
                            <div className='client-recruit-radio'>
                                <input
                                    type='radio'
                                    value={'K48'}
                                    name='grade'
                                    id='recruit-grade-k48'
                                    checked={informationValue.grade == 'K48'}
                                    onChange={changeInformation}
                                />
                                <label htmlFor='recruit-grade-k48'>K48</label>
                            </div>
                            <div className='client-recruit-radio'>
                                <input
                                    type='radio'
                                    value={'K49'}
                                    name='grade'
                                    id='recruit-grade-k49'
                                    checked={informationValue.grade == 'K49'}
                                    onChange={changeInformation}
                                />
                                <label htmlFor='recruit-grade-k49'>K49</label>
                            </div>
                        </div>
                    </div>
                    <div className='client-recruit-item'>
                        <label htmlFor='recruit-studentCode'>MSSV:</label>
                        <input 
                            id='recruit-studentCode'
                            type='text'
                            value={informationValue.studentCode}
                            name='studentCode'
                            onChange={changeInformation}
                            autoComplete='off'
                        />
                        <span className='recruit-message'></span>
                    </div>
                    <div className='client-recruit-item'>
                        <label htmlFor='recruit-email'>Email:</label>
                        <input 
                            id='recruit-email'
                            type='text'
                            value={informationValue.email}
                            name='email'
                            onChange={changeInformation}
                            autoComplete='off'
                        />
                        <span className='recruit-message'></span>
                    </div>
                    <div className='client-recruit-item'>
                        <label htmlFor='recruit-phone'>Số điện thoại:</label>
                        <input 
                            id='recruit-phone'
                            type='text'
                            value={informationValue.phone}
                            name='phone'
                            onChange={changeInformation}
                            autoComplete='off'
                        />
                        <span className='recruit-message'></span>
                    </div>
                    <div className='client-recruit-item'>
                        <label htmlFor='recruit-accountLink'>Link Facebook:</label>
                        <input 
                            id='recruit-accountLink'
                            type='text'
                            value={informationValue.accountLink}
                            name='accountLink'
                            onChange={changeInformation}
                            autoComplete='off'
                        />
                        <span className='recruit-message'></span>
                    </div>
                </form>
            </div>
            <div className='line'>
            </div>
            <div className='client-recruit-form-block'>
                <img className='form-title' src={introduce}/>
                <form>
                    <img className='image-question' src={Question.information}/>
                    <div className='client-recruit-upload'>
                        <div className='client-recruit-file'>
                            <div className='file-list'>
                            {
                                introduceFile.map((item, index) => {
                                    return (
                                        <div className='file-list-item' key={index}>
                                            <p>{item.fileName}</p>
                                            <span onClick={() => deleteIntroduceFile(index)}>(xóa file)</span>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                        <div className='client-recruit-item'>
                            <label>Upload sản phẩm</label>
                            <div className='client-recruit-input'>
                                <input
                                    type='file'
                                    accept='.jpeg, .jpg, .png, .webp, .mp4, .pdf'
                                    ref={introduceRef}
                                    onChange={appendIntroduceFile}
                                    multiple
                                />
                                <div className='input-item' onClick={() => introduceRef.current.click()}>
                                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                </div>
                                <ul>
                                    <li>Quy định về định dạng</li>
                                    <li><span></span>{`Đối với video: .mp4, .webp' (<=50MB)`}</li>
                                    <li><span></span>{'Đối với ảnh: .jpeg, .jpg, .png (<=2.5MB)'}</li>
                                    <li><span></span>{'Đối với văn bản: .pdf (<=25MB)'}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className='line'>
            </div>
            <div className='client-recruit-form-block'>
                <img className='form-title' src={apply}/>
                <form>
                    <div className='client-recruit-item'>
                        <label>Nguyện vọng 1</label>
                        <div ref={aspiration1DivRef} className='client-recruit-aspiration'>
                            <div onClick={() => setAspiration1Open(true)}>
                                <p>{aspiration1 || "Chọn nguyện vọng"}</p>
                            </div>
                            {
                                aspiration1Open &&
                                <ul>
                                {
                                    aspiration.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                onClick={() => setAspiration1Value(item)}
                                            >
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                                </ul>
                            }
                        </div>
                        <div className='client-aspiration-question'>
                        {
                            aspiration1 
                            &&
                            <img className='image-question' src={Question[aspirationQues[aspiration1]]}/>
                            ||
                            <div className='client-aspiration-question-none'>
                                <p>HÃY CHỌN NGUYỆN VỌNG 1<br/>(BẮT BUỘC)</p>
                            </div>
                        }
                        </div>
                        <div className='client-recruit-upload'>
                            <div className='client-recruit-file'>
                                <div className='file-list'>
                                {
                                    aspiration1File.map((item, index) => {
                                        return (
                                            <div className='file-list-item' key={index}>
                                                <p>{item.fileName}</p>
                                                <span onClick={() => deleteAspiration1File(index)}>(xóa file)</span>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                            <div className='client-recruit-item'>
                                <label>Upload sản phẩm</label>
                                <div className='client-recruit-input'>
                                    <input
                                        type='file'
                                        accept='.jpeg, .jpg, .png, .pdf'
                                        ref={aspiration1Ref}
                                        onChange={appendAspiration1File}
                                        multiple
                                    />
                                    <div className={clsx("input-item", {"disable": !aspiration1})} onClick={() => aspiration1Ref.current.click()}>
                                        <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                    </div>
                                    <ul>
                                        <li>Quy định về định dạng</li>
                                        <li><span></span>{'Đối với ảnh: .jpeg, .jpg, .png (<=2.5MB)'}</li>
                                        <li><span></span>{'Đối với văn bản: .pdf (<=25MB)'}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                {
                    aspiration1
                    &&
                    <form>
                        <div className='client-recruit-item'>
                            <label>Nguyện vọng 2</label>
                            <div ref={aspiration2DivRef} className='client-recruit-aspiration'>
                                <div onClick={() => setAspiration2Open(true)}>
                                    <p>{aspiration2 || "Chọn nguyện vọng"}</p>
                                </div>
                                {
                                    aspiration2Open &&
                                    <ul>
                                    {
                                        aspiration.map((item, index) => {
                                            if(item != aspiration1)
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() => setAspiration2Value(item)}
                                                >
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }
                                        <li onClick={() => setAspiration2Value("")}>Chọn nguyện vọng</li>
                                    </ul>
                                }
                            </div>
                            <div className='client-aspiration-question'>
                            {
                                aspiration2 
                                &&
                                <img className='image-question' src={Question[aspirationQues[aspiration2]]}/>
                                ||
                                <div className='client-aspiration-question-none'>
                                    <p>HÃY CHỌN NGUYỆN VỌNG 2<br/>(KHÔNG BẮT BUỘC)</p>
                                </div>
                            }
                            </div>
                            <div className='client-recruit-upload'>
                                <div className='client-recruit-file'>
                                    <div className='file-list'>
                                    {
                                        aspiration2File.map((item, index) => {
                                            return (
                                                <div className='file-list-item' key={index}>
                                                    <p>{item.fileName}</p>
                                                    <span onClick={() => deleteAspiration2File(index)}>(xóa file)</span>
                                                </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                                <div className='client-recruit-item'>
                                    <label>Upload sản phẩm</label>
                                    <div className='client-recruit-input'>
                                        <input
                                            type='file'
                                            accept='.jpeg, .jpg, .png, .pdf'
                                            ref={aspiration2Ref}
                                            onChange={appendAspiration2File}
                                            multiple
                                        />
                                        <div className={clsx("input-item", {"disable": !aspiration1})} onClick={() => aspiration2Ref.current.click()}>
                                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                        </div>
                                        <ul>
                                            <li>Quy định về định dạng</li>
                                            <li><span></span>{'Đối với ảnh: .jpeg, .jpg, .png (<=2.5MB)'}</li>
                                            <li><span></span>{'Đối với văn bản: .pdf (<=25MB)'}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                }
            </div>
            <div className='client-apply'>
                <button onClick={clickApply}>APPLY</button>
            </div>
            <div ref={loadingRef} className='recruit-form-loading none'>
                <div className='main'>
                    <img src={loadingImg}/>
                    <div className="continuous"></div>
                </div>
            </div>
            {
                window.innerWidth < 1024 &&
                <RequestLaptop/>
            }
        </section>
    )
}

export default TraoForm