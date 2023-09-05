import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../../context/ContextProvider"
import './MC.scss'

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

    console.log(search)

    const [ castingList, setCastingList ] = useState([
        {
            "id": "nchfnsmaj-1-2-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "Giải nhất GDX, giải đồng tuổi trẻ, giải nhất lắc đít",
            "note": "",
            "pass": true
        },
        {
            "id": "nchfnsmaj-2-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-3-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-4-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-5-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-6-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-7-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-8-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-9-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-10-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-11-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-12-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-13-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-14-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-15-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-16-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-17-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-18-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-19-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-20-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-21-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-22-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-23-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-24-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        },
        {
            "id": "nchfnsmaj-25-4-5",
            "createTime": "2023-08-26 23:39:02",
            "fullName": "Hà Nhật Mai",
            "phone": "0988182335",
            "schoolName": "UEH",
            "className": "K48 - ADC06",
            "studentCode": "31221024979",
            "accountLink": "https://www.facebook.com/hanhatmai.289",
            "email": "maiha.31221024979@st.ueh.edu.vn",
            "portrait": "https://www.facebook.com/",
            "portraitName": "z4639351560786_87fd70e1d2f7766c2e5dbdd42fe74ff2_jpg_64ea2aa5d9297.jpeg",
            "clipIntroduce": "https://www.facebook.com/",
            "clipIntroduceName": "HA_NHAT_MAI_VIDEO_mp4_64ea2aa615f81.mp4",
            "prize": "",
            "note": "",
            "pass": ""
        }
    ])
    
    useEffect(() => {
        //fetchAPI ở đây
    }, [])

    const showImage = (url, name) => {
        console.log(url, name)
    }

    const showVideo = (url, name) => {
        console.log(url, name)
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

    const handleChangeSearch = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
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