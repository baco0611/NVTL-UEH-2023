import { useContext, useEffect, useRef, useState } from 'react'
import './ClientProudMateInput.scss'
import { UserContext } from '../../../../../../context/ContextProvider'
import clsx from 'clsx'
import member2 from '../img/Member2.png'
import member3 from '../img/Member3.png'
import { savingTeam, searchMember } from './searchProudMate'
import shark from '../../../../../../components/RequestLogin/img/shark.png'
import axiosClient from '../../../../../../context/axiosClient'

function ClientProudMateInput({ setIndex, setProudMateInfo}) {
    const user = JSON.parse(localStorage.getItem('ACCESS_USER')) || JSON.parse(sessionStorage.getItem('ACCESS_USER'))
    const { getUserId } = useContext(UserContext)
    const [ teamInformation, setTeamInformation ] = useState({
        idMember1: getUserId(user.id).real,
        idMember2: "",
        memberName2: "",
        memberStudentCode2: "",
        idMember3: "",
        memberName3: "",
        memberStudentCode3: "",
        teamName: "",
    })
    // console.log(teamInformation)
    
    const handleChangeValue = e => {
        setTeamInformation({
            ...teamInformation,
            [e.target.name]: e.target.value
        })
    }

    const nameRef = useRef()
    const codeRef = useRef()
    const nameRef1 = useRef()
    const codeRef1 = useRef()
    const searchRef = useRef(null)
    const [ noti, setNoti ] = useState(false)
    
    const [ result, setResult ] = useState([])
    const [ nameStatus, setNameStatus ] = useState(false)
    const [ codeStatus, setCodeStatus ] = useState(false)
    const [ nameStatus1, setNameStatus1 ] = useState(false)
    const [ codeStatus1, setCodeStatus1 ] = useState(false)
    const { getParent } = useContext(UserContext)
    const loadingRef = useRef()

    const setClose = () => {
        setNameStatus(false)
        setCodeStatus(false)
        setResult([])
    }

    const setClose1 = () => {
        setNameStatus1(false)
        setCodeStatus1(false)
        setResult([])
    }

    const handleInput = (e, key) => {
        handleChangeValue(e)

        if(key == 'name')
            setNameStatus(true)
        else    
            setCodeStatus(true)

        if(searchRef.current)
            clearTimeout(searchRef.current)
        
        searchRef.current = setTimeout(async () => {
            if(e.target.value)
                await searchMember(e.target.value, setResult, setClose)
            else {
                setClose()
            }
        }, 750)
    }

    const handleInput1 = (e, key) => {
        handleChangeValue(e)

        if(key == 'name')
            setNameStatus1(true)
        else    
            setCodeStatus1(true)

        if(searchRef.current)
            clearTimeout(searchRef.current)
        
        searchRef.current = setTimeout(async () => {
            if(e.target.value)
                await searchMember(e.target.value, setResult, setClose1)
            else {
                setClose()
            }
        }, 750)
    }

    // Này để bấm ra khỏi vùng chọn
    useEffect(() => {
        const handleClickWindow = (e) => {
            const element = getParent(e.target, '.proud-input-item')
            // console.log(element)
            
            if(nameStatus || codeStatus)
                if(element != nameRef.current && element != codeRef.current) {
                    setClose()

                    if(!teamInformation.idMember2) {
                        setTeamInformation({
                            ...teamInformation,
                            memberName2: '',
                            memberStudentCode2: '',
                            idMember2: ''
                        })
                    }
                }

            if(nameStatus1 || codeStatus1)
                if(element != nameRef1.current && element != codeRef1.current) {
                    setClose1()

                    if(!teamInformation.idMember3) {
                        setTeamInformation({
                            ...teamInformation,
                            memberName3: '',
                            memberStudentCode3: '',
                            idMember3: ''
                        })
                    }
                }
        }

        window.addEventListener('click', handleClickWindow)

        return () => window.removeEventListener('click', handleClickWindow)
    }, [])

    // Này để set value khi bấm chọn
    const setValue = item => {
        const id = getUserId(item.id).real

        if(id != teamInformation.idMember1 && id != teamInformation.idMember3)
            setTeamInformation({
                ...teamInformation,
                idMember2: getUserId(item.id).real,
                memberName2: item.fullName,
                memberStudentCode2: getUserId(item.studentCode).real
            })
        else 
            setTeamInformation({
                ...teamInformation,
                memberName2: '',
                memberStudentCode2: '',
                idMember2: ''
            })

        setCodeStatus(false)
        setNameStatus(false)
        setResult([])
    }

    const setValue1 = item => {
        const id = getUserId(item.id).real

        if(id != teamInformation.idMember1 && id != teamInformation.idMember2)
            setTeamInformation({
                ...teamInformation,
                idMember3: getUserId(item.id).real,
                memberName3: item.fullName,
                memberStudentCode3: getUserId(item.studentCode).real
            })
        else
            setTeamInformation({
                ...teamInformation,
                memberName3: '',
                memberStudentCode3: '',
                idMember3: ''
            })
        
        setCodeStatus1(false)
        setNameStatus1(false)
        setResult([])
    }

    const handleClickSaving = () => {
        const inputs = document.querySelectorAll('input')
        
        let check = true

        inputs.forEach(item => {
            if(!item.value) {
                item.classList.add('invalid')
                check = false
            }
        })

        if(check)
            setNoti(true)
    }

    const handleSavingData = async() => {
        setNoti(false)

        loadingRef.current.classList.remove('none')
        const postResult = await savingTeam(teamInformation, setProudMateInfo)

        if(postResult) {
            axiosClient.get('/getProudMate/' + teamInformation.idMember1)
            .then(response => 
                setProudMateInfo({
                    teamInformation: response.data.data[0],
                    condition: true
                })
            )
        }

        loadingRef.current.classList.add('none')
    }

    return (
        <div className='client-proud-2-content'>
            <form id='client-proud-2-form' className='client-proud-2-input'>
                <input
                    type='text'
                    className={clsx('teamName', {filled: teamInformation.teamName})}
                    placeholder='Tên đội'
                    name="teamName"
                    value={teamInformation.teamName}
                    onChange={handleChangeValue}
                    autoComplete='off'
                />

                <div className="proud-input-box">
                    <img src={member2}/>
                    <div className='proud-input-item' ref={nameRef}>
                        <input
                            type='text'
                            name="memberName2"
                            onChange={(e) => handleInput(e, 'name')}
                            className={clsx({filled: teamInformation.memberName2})}
                            placeholder='Họ và tên'
                            autoComplete='off'
                            value={teamInformation.memberName2}
                        />
                        {
                            nameStatus &&
                            <ul className='proud-input-list'>
                            {
                                result.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => setValue(item)}>
                                            <p>{item.fullName}</p>
                                            <p>{item.studentCode}</p>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        }
                    </div>
                    <div className='proud-input-item' ref={codeRef}>
                        <input
                            type='text'
                            name="memberStudentCode2"
                            onChange={(e) => handleInput(e, 'code')}
                            className={clsx({filled: teamInformation.memberStudentCode2})}
                            placeholder='Mã số sinh viên'
                            autoComplete='off'
                            value={teamInformation.memberStudentCode2}
                        />
                        {
                            codeStatus &&
                            <ul className='proud-input-list'>
                            {
                                result.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => setValue(item)}>
                                            <p>{item.fullName}</p>
                                            <p>{item.studentCode}</p>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        }
                    </div>
                </div>

                <div className="proud-input-box">
                    <img src={member3}/>
                    <div className='proud-input-item' ref={nameRef1}>
                        <input
                            type='text'
                            name="memberName3"
                            onChange={(e) => handleInput1(e, 'name')}
                            className={clsx({filled: teamInformation.memberName3})}
                            placeholder='Họ và tên'
                            autoComplete='off'
                            value={teamInformation.memberName3}
                        />
                        {
                            nameStatus1 &&
                            <ul className='proud-input-list'>
                            {
                                result.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => setValue1(item)}>
                                            <p>{item.fullName}</p>
                                            <p>{item.studentCode}</p>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        }
                    </div>
                    <div className='proud-input-item' ref={codeRef1}>
                        <input
                            type='text'
                            name="memberStudentCode3"
                            onChange={(e) => handleInput1(e, 'code')}
                            className={clsx({filled: teamInformation.memberStudentCode3})}
                            placeholder='Mã số sinh viên'
                            autoComplete='off'
                            value={teamInformation.memberStudentCode3}
                        />
                        {
                            codeStatus1 &&
                            <ul className='proud-input-list'>
                            {
                                result.map((item, index) => {
                                    return (
                                        <li key={index} onClick={() => setValue1(item)}>
                                            <p>{item.fullName}</p>
                                            <p>{item.studentCode}</p>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        }
                    </div>
                </div>
            </form>

            <div className='client-proud-2-btn'>
                <button className='secondary-button' onClick={handleClickSaving}>Lưu thông tin</button>
                <div className={clsx('client-proud-2-notification', {none: !noti})}>
                    <div className='container'>
                        <h1>Thông tin sẽ không thể thay đổi<br/>Bạn chắc chắn chứ?</h1>
                        <img className="animate__animated animate__swing animate__infinite animate__slow" src={shark}/>
                        <div className='button'>
                            <button className='primary-button' onClick={() => setNoti(false)}>Hủy</button>
                            <button className='primary-button' onClick={handleSavingData}>Lưu</button>
                        </div>
                    </div>
                </div>
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

export default ClientProudMateInput