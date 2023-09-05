import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader/AdminHeader'
import { UserContext } from '../../context/ContextProvider'
import "./AdminVariable.scss"
import "../../views/Admin/global.scss"

function AdminLayout() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user)
            navigate('/login')

        if(user.permission != 1) 
            navigate('/')
    }, [])

    return (
        <div id='adminLayout'>
            <AdminHeader/>

            <Outlet/>
            
        </div>
    )
}

export default AdminLayout