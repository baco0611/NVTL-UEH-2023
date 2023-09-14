import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../../context/ContextProvider"
import axiosClient from "../../../context/axiosClient"
import axios from "axios"

function AdminRecruitment() {
    const { setPath, getUserId } = useContext(UserContext)
    useEffect(() => setPath('/admin/recruit'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    const [ search, setSearch ] = useState({
        searchKey: "",
        createTime: "decrease",
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

    const [ recruitList, setRecruitList ] = useState([])

    useEffect(() => {
        axiosClient.post('/collaborators_Admin', search)
        .then(response => {
            setRecruitList(response.data.data.data)
            setInformation({
                links: response.data.data.links,
                meta: response.data.data.meta
            })
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    const searchRef = useRef(null)

    const handleChangeSearch = e => {
        const result = {...search, [e.target.name]: e.target.value}
        setSearch(result)

        if(searchRef.current) 
            clearTimeout(searchRef.current)
    
        searchRef.current = setTimeout(() => {
            axiosClient.post('/collaborators_Admin', result)
            .then(response => {
                setRecruitList(response.data.data.data)
                setInformation({
                    links: response.data.data.links,
                    meta: response.data.data.meta
                })
            })  
            .catch(error => {
                console.log(error)
            })
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
            axiosClient.post('/updateCollaborators/note', payload)
            .then(response => {
                console.log(response)
                value = response.data.data[0].note
            })
            .catch(error => {
                console.log(error)
            })
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
        console.log(1)
        const payload = {
            id: getUserId(id).real,
            pass: e.target.checked
        }

        axiosClient.post('/updateCollaborators/pass', payload)
        .then(response => {
        })
        .catch(error => {
            console.log(error)
        })

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

    const clickButton = (url) => {
        if(url) {
            axios.post(url, search)
            .then(response => {
                setRecruitList(response.data.data.data)
                setInformation({
                    links: response.data.data.links,
                    meta: response.data.data.meta
                })
            })  
            .catch(error => {
                console.log(error)
            })
        }
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
                                    <tr key={index}>
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