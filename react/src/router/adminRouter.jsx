import { Navigate, createBrowserRouter } from "react-router-dom"
import AdminLayout from "../components/Admin/AdminLayout"
import Status from "../views/Admin/Status/Status"
import Account from "../views/Admin/Account/Account"
import Mission from "../views/Admin/Mission/Mission"
import PrideTake from "../views/Admin/PrideTake/PrideTake"
import ProudMate from "../views/Admin/ProudMate/ProudMate"
import WonderU from "../views/Admin/WonderU/WonderU"
import Stage from "../views/Admin/Stage/Stage"
import MC from "../views/Admin/MC/MC"
import AdminRecruitment from "../views/Admin/AdminRecruitment/AdminRecruitment"
import News from "../views/Admin/News/News"
import NewsHome from "../views/Admin/News/NewsHome/NewsHome"
import NewsWeekly from "../views/Admin/News/NewsWeekly/NewsWeekly"

const adminRouter = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/status'}/>
            },
            {
                path: '/status',
                element: <Status/>
            },
            {
                path: '/account',
                element: <Account/>
            },
            {
                path: '/mission',
                element: <Mission/>
            },
            {
                path: '/pridetake',
                element: <PrideTake/>
            },
            {
                path: '/proudmate',
                element: <ProudMate/>
            },
            {
                path: '/wonderu',
                element: <WonderU/>
            },
            {
                path: '/stage',
                element: <Stage/>
            },
            {
                path: '/mc',
                element: <MC/>
            },
            {
                path: '/recruit',
                element: <AdminRecruitment/>
            },
            {
                path: '/news',
                element: <News/>,
                children: [
                    {
                        path: '/news',
                        element: <Navigate to={'/news/home'}/>
                    },
                    {
                        path: '/news/home',
                        element: <NewsHome/>
                    },
                    {
                        path: '/news/weekly',
                        element: <NewsWeekly/>
                    }
                ]
            },
        ]
    }
])

export default adminRouter