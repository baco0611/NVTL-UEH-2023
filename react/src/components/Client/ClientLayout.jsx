import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientHeader from './ClientHeader/ClientHeader'
import ClientFooter from './ClientFooter/ClientFooter'
import Banner from '../Banner/Banner'

function ClientLayout() {
    return (
        <>
            <ClientHeader/>

            <Banner/>
            
            <Outlet/>
            
            <ClientFooter/>
        </>
    )
}

export default ClientLayout