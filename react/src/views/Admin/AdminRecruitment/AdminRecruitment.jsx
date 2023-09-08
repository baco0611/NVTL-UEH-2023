import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../../context/ContextProvider"
import axiosClient from "../../../context/axiosClient"

function AdminRecruitment() {
    const { setPath, getUserId } = useContext(UserContext)
    useEffect(() => setPath('/admin/recruit'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    const [ search, setSearch ] = useState({
        searchKey: "",
        createTime: "",
        aspiration1: "",
        aspiration2: "",
        pass: "all"
    })
    const height = window.innerHeight - 118 - 65 - 25

    const [ information, setInformation ] = useState({
        links: {
            "first": null,
            "last": null,
            "prev": null,
            "next": null
        },
        meta: {
            "current_page": 1,
            "from": 1,
            "last_page": 0,
        }
    })

    const [ recruitList, setRecruitList ] = useState([
        {
            "id": "fmvmcrfkd-1-2-3",
            "createTime": "2023-09-01 22:13:48",
            "fullName": "Huỳnh Lê Thanh Phương",
            "grade": "K49",
            "studentCode": "31231023970",
            "phone": "0365191492",
            "accountLink": "https://www.facebook.com/thienpax.notthing666/",
            "email": "huynhthanhphuong365@gmail.com",
            "informationFile": [
                {
                    "file": "CV1",
                    "fileName": "CV1"
                },
                {
                    "file": "CV2",
                    "fileName": "CV2"
                },
                {
                    "file": "CV3",
                    "fileName": "CV3"
                }
            ],
            "aspiration1": "HR",
            "aspiration1File": [
                {
                    "file": "nv1.1",
                    "fileName": "nv1.1"
                },
                {
                    "file": "nv1.2",
                    "fileName": "nv1.2"
                }
            ],
            "aspiration2": "hello",
            "aspiration2File": [
                {
                    "file": "nv2.1",
                    "fileName": "nv2.1"
                },
                {
                    "file": "nv2.2",
                    "fileName": "nv2.2"
                },
                {
                    "file": "nv2.3",
                    "fileName": "nv2.3"
                }
            ],
            "note": "",
            "pass": ""
        },
    ])

    const searchRef = useRef(null)

    const handleChangeSearch = e => {
        const result = {...search, [e.target.name]: e.target.value}
        setSearch(result)

        if(searchRef.current) 
            clearTimeout(searchRef.current)
    
        searchRef.current = setTimeout(() => {
            console.log(result)
            // axiosClient.post('/castingMC_Admin', result)
            // .then(response => {
            //     console.log(response)
            //     setCastingList(response.data.castingList.data)
            //     setInformation({
            //         links: response.data.castingList.links,
            //         meta: response.data.castingList.meta
            //     })
            // })  
            // .catch(error => {
            //     console.log(error)
            // })
        }, 750)
    }

    const changeNoteRef = useRef(null)
    const handleChangeNote = (id, e) => {
        const payload = {
            id: getUserId(id).real,
            note: e.target.value
        }

        let value = e.target.value

        if(changeNoteRef.current)
            clearTimeout(changeNoteRef.current)
    
        changeNoteRef.current = setTimeout(() => {
            console.log(payload)
            // axiosClient.post('/updateCasting/note', payload)
            // .then(response => {
            //     console.log(response)
            //     value = response.data.castingUpdateStage[0].note
            // })
            // .catch(error => {
            //     console.log(error)
            // })
        }, 750)

        setRecruitList(prev => {
            const result = prev.map(item => {
                if(item.id == id) 
                    return {
                        ...item,
                        note: value
                    }
                else return item
            })
            
            return result
        })
    }

    const handleChangePassed = (id, e) => {
        const payload = {
            id: getUserId(id).real,
            pass: e.target.checked
        }

        console.log(payload)
        // axiosClient.post('/updateCasting/pass', payload)
        // .then(response => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        setRecruitList(prev => {
            const result = prev.map(item => {
                if(item.id == id) 
                    return {
                        ...item,
                        pass: e.target.checked
                    }

                else return item
            })
            
            return result
        })
    }

    const aspiration = [
        "CREATIVE",
        "COMS & PR",
        "GRAPHIC DESIGN",
        "SCENOGRAPHY",
        "HR",
        "VIDEOGRAPHY"
    ]

    return (
        <section id="admin-recruit">
            <div className="admin-item-header">
                <h1>TUYỂN CTV</h1>
                <p>Tra cứu và xem thông tin tài khoản đăng ký tuyển cộng tác viên</p>
                <div className="admin-control">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Tìm kiếm"
                            value={search.searchKey}
                            name="searchKey"
                            onChange={handleChangeSearch}
                        />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="control">
                        <div className="control-box">
                            <label>Dấu thời gian</label>
                            <select 
                                name="createTime"
                                onChange={handleChangeSearch}
                            >
                                <option value='decrease'>Giảm dần</option>
                                <option value='increase'>Tăng dần</option>
                            </select>
                        </div>
                        <div className="control-box">
                            <select 
                                name="aspiration1"
                                onChange={handleChangeSearch}
                            >
                                <option value=''>Nguyện vọng 1</option>
                                {
                                    aspiration.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="control-box">
                            <select 
                                name="aspiration2"
                                onChange={handleChangeSearch}
                            >
                                <option value=''>Nguyện vọng 2</option>
                                {
                                    aspiration.map((item, index) => {
                                        return (
                                            <option key={index} value={item}>{item}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="control-box">
                            <label>Pass</label>
                            <select 
                                name="pass"
                                onChange={handleChangeSearch}
                            >
                                <option value='all'>Tất cả</option>
                                <option value='checked'>Đậu</option>
                                <option value='unchecked'>Rớt</option>
                            </select>
                        </div>
                        <div className="control-box">
                            <label>Trang</label>
                            <div className="control-page">
                                <button onClick={() => clickButton(information.links.prev)}>Trước</button>
                                <p>{information.meta.current_page} / {information.meta.last_page}</p>
                                <button onClick={() => clickButton(information.links.next)}>Sau</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="admin-box admin-mc" style={{height: `${height}px`}}>
                <table>
                    <thead>
                        <tr>
                            <th style={{
                                minWidth: '50px',
                                position: 'sticky',
                                left: 0,
                                zIndex: 8
                            }}>STT</th>

                            <th style={{
                                minWidth: '200px',
                                position: 'sticky',
                                left: '50px',
                                zIndex: 8
                            }}>Dấu thời gian</th>
                            
                            <th style={{
                                minWidth: '275px',
                                position: 'sticky',
                                left: '250px',
                                zIndex: 8
                            }}>Họ và tên</th>
                            <th style={{minWidth: '125px'}}>Khóa</th>
                            <th style={{minWidth: '125px'}}>MSSV</th>
                            <th style={{minWidth: '150px'}}>SĐT</th>
                            <th style={{minWidth: '100px'}}>Facebook</th>
                            <th style={{minWidth: '275px'}}>Email</th>
                            <th style={{minWidth: '150px'}}>NV1</th>
                            <th style={{minWidth: '150px'}}>NV2</th>
                            <th style={{minWidth: '125px'}}>CV</th>
                            <th style={{minWidth: '125px'}}>Nội dung NV1</th>
                            <th style={{minWidth: '125px'}}>Nội dung NV2</th>
                            <th style={{minWidth: '350px'}}>Note</th>
                            <th style={{minWidth: '125px'}}>Pass</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recruitList.map((item, index) => {
                                return (
                                    <tr>
                                        <td style={{
                                            minWidth: '50px',
                                            position: 'sticky',
                                            left: 0,
                                            zIndex: 8
                                        }}>{(information.meta.current_page - 1) * 25 + index + 1}</td>

                                        <td style={{
                                            minWidth: '200px',
                                            position: 'sticky',
                                            left: '50px',
                                            zIndex: 8
                                        }}>{item.createTime}</td>
                                        
                                        <td style={{
                                            minWidth: '275px',
                                            position: 'sticky',
                                            left: '250px',
                                            zIndex: 8
                                        }}>{item.fullName}</td>
                                        <td style={{minWidth: '125px'}}>{item.grade}</td>
                                        <td style={{minWidth: '125px'}}>{item.studentCode}</td>
                                        <td style={{minWidth: '150px'}}>{item.phone}</td>
                                        <td style={{minWidth: '100px'}}><a href={item.accountLink} target="blank">Link</a></td>
                                        <td style={{minWidth: '275px'}}>{item.email}</td>
                                        <td style={{minWidth: '150px'}}>{item.aspiration1}</td>
                                        <td style={{minWidth: '150px'}}>{item.aspiration2}</td>
                                        <td style={{minWidth: '125px'}} className="file">
                                        {
                                            item.informationFile.map((file, index) => {
                                                return (
                                                    <a 
                                                        key={index}
                                                        target="blank" 
                                                        href={file.file}
                                                    >{file.fileName}</a>
                                                )
                                            })
                                        }
                                        </td>
                                        <td style={{minWidth: '125px'}} className="file">
                                        {
                                            item.aspiration1File.map((file, index) => {
                                                return (
                                                    <a 
                                                        key={index}
                                                        target="blank" 
                                                        href={file.file}
                                                    >{file.fileName}</a>
                                                )
                                            })
                                        }
                                        </td>
                                        <td style={{minWidth: '125px'}} className="file">
                                        {
                                            item.aspiration2File.map((file, index) => {
                                                return (
                                                    <a 
                                                        key={index}
                                                        target="blank" 
                                                        href={file.file}
                                                    >{file.fileName}</a>
                                                )
                                            })
                                        }
                                        </td>
                                        <td style={{minWidth: '350px'}}>
                                            <textarea 
                                                className="admin-row-item"
                                                onChange={(e) => handleChangeNote(item.id, e)}
                                                value={item.note}
                                            /> 
                                        </td>
                                        <td style={{minWidth: '125px'}}>
                                            <input
                                                type="checkbox"
                                                checked={item.pass}
                                                onChange={(e) => handleChangePassed(item.id, e)}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default AdminRecruitment