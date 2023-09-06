import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../../context/ContextProvider"
import axiosClient from '../../../context/axiosClient'
import axios from "axios"

function MC() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/admin/casting'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    const [ search, setSearch ] = useState({
        searchKey: '',
        createTime: 'increase',
        pass: 'all'
    })
    const height = window.innerHeight - 118 - 65 - 25

    const [ castingList, setCastingList ] = useState([])
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
    
    useEffect(() => {
        axiosClient.post('/castingMC_Admin', search)
        .then(response => {
            console.log(response)
            setCastingList(response.data.castingList.data)
            setInformation({
                links: response.data.castingList.links,
                meta: response.data.castingList.meta
            })
        })  
        .catch(error => {
            console.log(error)
        })
    }, [])

    const clickButton = (url) => {
        if(url) {
            axios.post(url, search)
            .then(response => {
                console.log(response)
                setCastingList(response.data.castingList.data)
                setInformation({
                    links: response.data.castingList.links,
                    meta: response.data.castingList.meta
                })
            })  
            .catch(error => {
                console.log(error)
            })
        }
    }

    const showImage = (url, name) => {
        const a = document.createElement('a')
        a.href = url
        a.target = 'blank'
        a.title.name
        a.click()
    }

    const showVideo = (url, name) => {
        const a = document.createElement('a')
        a.href = url
        a.target = 'blank'
        a.title=name
        a.click()
    }

    const handleChangeNote = (id, e) => {
        setCastingList(prev => {
            const result = prev.map(item => {
                if(item.id == id) 
                    return {
                        ...item,
                        note: e.target.value
                    }

                else return item
            })
            
            return result
        })
    }

    const handleChangePassed = (id, e) => {
        setCastingList(prev => {
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

    const searchRef = useRef(null)

    const handleChangeSearch = e => {
        const result = {...search, [e.target.name]: e.target.value}
        setSearch(result)

        if(searchRef.current) 
            clearTimeout(searchRef.current)
    
        searchRef.current = setTimeout(() => {
            axiosClient.post('/castingMC_Admin', result)
            .then(response => {
                console.log(response)
                setCastingList(response.data.castingList.data)
                setInformation({
                    links: response.data.castingList.links,
                    meta: response.data.castingList.meta
                })
            })  
            .catch(error => {
                console.log(error)
            })
        }, 750)

    }
 
    return (
        <section id="admin-mc">
            <div className="admin-item-header">
                <h1>CASTING MC</h1>
                <p>Tra cứu và xem thông tin tài khoản đăng ký casting mc</p>
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
                <div className="admin-first-row admin-row">
                    <div style={{
                        minWidth: '50px',
                        position: 'sticky',
                        left: 0
                    }}>
                        <p className="admin-row-item STT">STT</p>
                    </div>
                    <div style={{
                        minWidth: '200px',
                        position: 'sticky',
                        left: '50px'
                    }}>
                        <p className="admin-row-item">Dấu thời gian</p>
                    </div>
                    <div style={{
                        minWidth: '275px',
                        position: 'sticky',
                        left: '250px'
                    }}>
                        <p className="admin-row-item">Họ và tên</p>
                    </div>
                    <div style={{minWidth: '150px'}}>
                        <p className="admin-row-item">SĐT</p>
                    </div>
                    <div style={{minWidth: '150px'}}>
                        <p className="admin-row-item">Trường</p>
                    </div>
                    <div style={{minWidth: '125px'}}>
                        <p className="admin-row-item">Khóa-Lớp</p>
                    </div>
                    <div style={{minWidth: '125px'}}>
                        <p className="admin-row-item">MSSV</p>
                    </div>
                    <div style={{minWidth: '100px'}}>
                        <p className="admin-row-item">Facebook</p>
                    </div>
                    <div style={{minWidth: '275px'}}>
                        <p className="admin-row-item">Email</p>
                    </div>
                    <div style={{minWidth: '125px'}}>
                        <p className="admin-row-item">Chân dung</p>
                    </div>
                    <div style={{minWidth: '125px'}}>
                        <p className="admin-row-item">Clip giới thiệu</p>
                    </div>
                    <div style={{minWidth: '225px'}}>
                        <p className="admin-row-item">Giải thưởng</p>
                    </div>
                    <div style={{minWidth: '350px'}}>
                        <p className="admin-row-item">Note</p>
                    </div>
                    <div style={{minWidth: '125px'}}>
                        <p className="admin-row-item">Pass</p>
                    </div>
                </div>
                {
                    castingList.map((item, index) => {
                        return (
                            <div className="admin-row" key={index}>
                                <div style={{
                                    minWidth: '50px',
                                    position: 'sticky',
                                    left: 0,
                                    zIndex: 1
                                }}>
                                    <p className="admin-row-item center">{index + 1}</p>
                                </div>
                                <div style={{
                                    minWidth: '200px',
                                    position: 'sticky',
                                    left: '50px',
                                    zIndex: 1
                                }}>
                                    <p className="admin-row-item center">{item.createTime}</p>
                                </div>
                                <div style={{
                                    minWidth: '275px',
                                    position: 'sticky',
                                    left: '250px',
                                    zIndex: 1
                                }}>
                                    <p className="admin-row-item">{item.fullName}</p>
                                </div>
                                <div style={{minWidth: '150px'}}>
                                    <p className="admin-row-item center">{item.phone}</p>
                                </div>
                                <div style={{minWidth: '150px'}}>
                                    <p className="admin-row-item">{item.schoolName}</p>
                                </div>
                                <div style={{minWidth: '125px'}}>
                                    <p className="admin-row-item">{item.className}</p>
                                </div>
                                <div style={{minWidth: '125px'}}>
                                    <p className="admin-row-item">{item.studentCode}</p>
                                </div>
                                <div style={{minWidth: '100px'}}>
                                    <p className="admin-row-item href">
                                        <a href={item.accountLink} target="blank">Link</a>
                                    </p>
                                </div>
                                <div style={{minWidth: '275px'}}>
                                    <p className="admin-row-item">{item.email}</p>
                                </div>
                                <div style={{minWidth: '125px'}}>
                                    <p 
                                        className="admin-row-item center underline cursorPointer"
                                        onClick={() => showImage(item.portrait, item.portraitName)}
                                    >
                                        Image
                                    </p>
                                </div>
                                <div style={{minWidth: '125px'}}>
                                    <p 
                                        className="admin-row-item center underline cursorPointer"
                                        onClick={() => showVideo(item.clipIntroduce, item.clipIntroduceName)}
                                    >
                                        Video
                                    </p>
                                </div>
                                <div style={{minWidth: '225px'}}>
                                    <p className="admin-row-item">{item.prize}</p>
                                </div>
                                <div style={{minWidth: '350px'}}>
                                    <textarea 
                                        className="admin-row-item"
                                        onChange={(e) => handleChangeNote(item.id, e)}
                                        value={item.note}
                                    />  
                                </div>
                                <div style={{minWidth: '125px'}} className="admin-row-check">
                                    <input
                                        type="checkbox"
                                        checked={item.pass}
                                        onChange={(e) => handleChangePassed(item.id, e)}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MC