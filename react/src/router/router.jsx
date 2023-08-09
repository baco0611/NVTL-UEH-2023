import { createBrowserRouter } from 'react-router-dom'
import AdminLayout from '../components/Admin/AdminLayout'
import ClientLayout from '../components/Client/ClientLayout'

const router = createBrowserRouter([
    {
        path: "/",
        element: <ClientLayout/>
    },
    {
        path: "/admin",
        element: <AdminLayout/>
    }
])

export default router