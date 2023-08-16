import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AdminHeader from './AdminHeader/AdminHeader'
import { UserContext } from '../../context/ContextProvider'

function AdminLayout() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!user)
            navigate('/login')
    }, [])

    return (
        <div>
            <AdminHeader/>

            <Outlet/>
            
        </div>
    )
}

export default AdminLayout