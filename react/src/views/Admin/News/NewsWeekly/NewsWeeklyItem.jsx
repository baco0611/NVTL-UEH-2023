import React, { useState } from 'react'
import NewsUpdate from '../NewsUpload/NewsUpdate'
import axiosClient from '../../../../context/axiosClient'

function NewsWeeklyItem({item, information, index, search, setInformation, setNewsList, category}) {

    const [ updateStatus, setUpdateStatus ]= useState(false)

    const handleDeleteNews = () => [
        axiosClient.post('/deleteNews', {id: item.id, category})
        .then(response => {
            if(response.status == 200) {
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
            }
        })
    ]

    return (
        <>
            {
                updateStatus &&
                <NewsUpdate
                    setUpdateStatus={setUpdateStatus}
                    search={search}
                    setInformation={setInformation}
                    setNewsList={setNewsList}
                    category={category}
                    id={item.id}
                    item={item}
                />
            }
            <div className="admin-row">
                <div style={{
                    minWidth: '50px',
                    position: 'sticky',
                    left: 0
                }}>
                    <p className="admin-row-item STT">{(information.meta.current_page - 1) * 25 + index + 1}</p>
                </div>
                <div style={{
                    minWidth: '200px',
                    position: 'sticky',
                    left: '50px'
                }}>
                    <p className="admin-row-item">{item.createTime}</p>
                </div>
                <div style={{
                    minWidth: '275px',
                    position: 'sticky',
                    left: '250px',
                    background: "white"
                }}>
                    <img 
                        style={{
                            height: '100px',
                            margin: "5px auto",
                            borderRadius: "10px"
                        }} 
                        src={item.thumbnail}
                    />
                </div>
                <div style={{minWidth: '275px'}}>
                    <p className="admin-row-item">{item.title}</p>
                </div>
                <div style={{minWidth: '400px'}}>
                    <p className="admin-row-item">{item.subTitle}</p>
                </div>
                <div style={{minWidth: '175px'}}>
                    <p className="admin-row-item">
                        <a 
                            href={item.link} 
                            target="__blank"
                            style={{
                                color: "inherit",
                                textDecoration: "underline"
                            }}
                        >Link</a>
                    </p>
                </div>
                <div style={{minWidth: '150px'}}>
                    <p 
                        className="admin-row-item cursorPointer"
                        onClick={() => setUpdateStatus(true)}
                    >Edit</p>
                </div>
                <div style={{minWidth: '150px'}}>
                    <p 
                        className="admin-row-item cursorPointer"
                        onClick={handleDeleteNews}
                    >Delete</p>
                </div>
            </div>
        </>
    )
}

export default NewsWeeklyItem