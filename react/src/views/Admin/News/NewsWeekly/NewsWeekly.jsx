import { useContext, useEffect, useRef, useState } from "react"
import { UserContext } from "../../../../context/ContextProvider"
import NewsUpload from "../NewsUpload/NewsUpload"
import axiosClient from "../../../../context/axiosClient"
import NewsUpdate from "../NewsUpload/NewsUpdate"
import NewsWeeklyItem from "./NewsWeeklyItem"

function NewsWeekly() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/admin/news'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    const height = window.innerHeight - 118 - 65 - 25

    const [ search, setSearch ] = useState({
        searchKey: '',
        createTime: 'decrease',
        category: "weekly"
    })

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

    const [ uploadStatus, setUploadStatus ] = useState(false)
    const [ newsList, setNewsList ] = useState([])

    useEffect(() => {
        axiosClient.post('/newsAdmin/sortByTime', search)
            .then(response => {
                console.log(response)
                setNewsList(response.data.data.data)
                setInformation({
                    links: response.data.data.links,
                    meta: response.data.data.meta
                })
            })  
            .catch(error => {
                console.log(error)
            })
    }, [])

    const searchRef = useRef()
    const handleChangeSearch = e => {
        const result = {...search, [e.target.name]: e.target.value}
        setSearch(result)

        if(searchRef.current) 
            clearTimeout(searchRef.current)
    
        searchRef.current = setTimeout(() => {
            axiosClient.post('/newsAdmin/sortByTime', result)
            .then(response => {
                console.log(response)
                setNewsList(response.data.data.data)
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

    return (
        <section id="admin-mc">
            {
                uploadStatus &&
                <NewsUpload 
                    setUploadStatus={setUploadStatus}
                    category="weekly"
                    search={search}
                    setInformation={setInformation}
                    setNewsList={setNewsList}
                />
            }
            <div className="admin-item-header">
                <h1>WEEKLY NEWS</h1>
                <p>Tra cứu và xem thông tin weekly news</p>
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
                        <button 
                            style={{
                                fontSize: "16px",
                                border: "none",
                                color: "#646262",
                                backgroundColor: "transparent",
                                border: "#646262 solid 2px",
                                borderRadius: "5px",
                                padding: "2px",
                            }}
                            onClick={() => setUploadStatus(true)}
                        >Upload</button>
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
                        <p className="admin-row-item">Ảnh</p>
                    </div>
                    <div style={{minWidth: '275px'}}>
                        <p className="admin-row-item">Title</p>
                    </div>
                    <div style={{minWidth: '400px'}}>
                        <p className="admin-row-item">Subtitle</p>
                    </div>
                    <div style={{minWidth: '175px'}}>
                        <p className="admin-row-item">Link</p>
                    </div>
                    <div style={{minWidth: '150px'}}>
                        <p className="admin-row-item">Edit</p>
                    </div>
                    <div style={{minWidth: '150px'}}>
                        <p className="admin-row-item">Delete</p>
                    </div>
                </div>
                {
                    newsList.map((item, index) => {
                        return (
                            <NewsWeeklyItem
                                key={index}
                                index={index}
                                information={information}
                                item={item}
                                search={search}
                                setInformation={setInformation}
                                setNewsList={setNewsList}
                                category="weekly"
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default NewsWeekly