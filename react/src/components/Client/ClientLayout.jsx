import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from './ClientHeader/ClientHeader'
import ClientFooter from './ClientFooter/ClientFooter'

function ClientLayout() {
    return (
        <>
            <ClientHeader/>

            <Outlet/>
            
            <ClientFooter/>
        </>
    )
}

export default ClientLayout