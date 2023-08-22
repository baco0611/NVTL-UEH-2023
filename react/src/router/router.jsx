import { Navigate, createBrowserRouter } from "react-router-dom"
import ClientLayout from "../components/Client/ClientLayout"
import AdminLayout from "../components/Admin/AdminLayout"
import Home from '../views/Client/Home/Home'
import PrimeWave from '../views/Client/PrimeWave/PrimeWave'
import Weekly from '../views/Client/Weekly/Weekly/Weekly'
import Day1 from '../views/Client/Weekly/Day1/Day1'
import Day2 from '../views/Client/Weekly/Day2/Day2'
import Day3 from '../views/Client/Weekly/Day3/Day3'
import Day4 from '../views/Client/Weekly/Day4/Day4'
import NightFest from '../views/Client/NightFest/NightFest'
import Casting from '../views/Client/Casting/Casting'
import Recruitment from '../views/Client/Recruitment/Recruitment'
import LogLayout from "../views/Client/LogLayout/LogLayout"
import Sign from "../views/Client/LogLayout/Sign/Sign"
import UserLayout from "../views/Client/UserLayout/UserLayout"
import Error from "../components/Error/Error"
import Status from "../views/Admin/Status/Status"
import Account from "../views/Admin/Account/Account"
import Mission from "../views/Admin/Mission/Mission"
import PrideTake from "../views/Admin/PrideTake/PrideTake"
import ProudMate from "../views/Admin/ProudMate/ProudMate"
import AdminRecruitment from "../views/Admin/AdminRecruitment/AdminRecruitment"
import MC from "../views/Admin/MC/MC"
import WonderU from "../views/Admin/WonderU/WonderU"
import Stage from "../views/Admin/Stage/Stage"
import NewsHome from "../views/Admin/News/NewsHome/NewsHome"
import NewsWeekly from "../views/Admin/News/NewsWeekly/NewsWeekly"
import ClientPrideTake from "../views/Client/PrimeWave/ClientPrideTake/ClientPrideTake"
import ClientProudMate from "../views/Client/PrimeWave/ClientProudMate/ClientProudMate"
import ClientWonderU from "../views/Client/PrimeWave/ClientWonderU/ClientWonderU"
import ForgotPassword from "../views/Client/LogLayout/Sign/Forgot/Forgot"

const router = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/primewave',
                element: <PrimeWave/>
            }, 
            {
                path: '/primewave/pridetake',
                element: <ClientPrideTake/>
            },
            {
                path: '/primewave/proudmate',
                element: <ClientProudMate/>
            },
            {
                path: '/primewave/wonderu',
                element: <ClientWonderU/>
            },
            {
                path: '/weekly',
                element: <Weekly/>,
            },
            {
                path: '/weekly/day1',
                element: <Day1/>
            },
            {
                path: '/weekly/day2',
                element: <Day2/>
            },
            {
                path: '/weekly/day3',
                element: <Day3/>
            },
            {
                path: '/weekly/day4',
                element: <Day4/>
            },
            {
                path: '/nightfest',
                element: <NightFest/>
            },
            {
                path: '/casting',
                element: <Casting/>
            },
            {
                path: '/recruitment',
                element: <Recruitment/>
            }, 
            {
                path: '/login',
                element: <LogLayout/>,
                children: [
                    {
                        path: '/login',
                        element: <Sign/>
                    },
                    {
                        path: '/login/forgot',
                        element: <ForgotPassword/>
                    }
                ]
            },
            {
                path: '/user',
                element: <UserLayout/>
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                path: '/admin',
                element: <Navigate to={'/admin/status'}/>
            },
            {
                path: '/admin/status',
                element: <Status/>
            },
            {
                path: '/admin/account',
                element: <Account/>
            },
            {
                path: '/admin/mission',
                element: <Mission/>
            },
            {
                path: '/admin/pridetake',
                element: <PrideTake/>
            },
            {
                path: '/admin/proudmate',
                element: <ProudMate/>
            },
            {
                path: '/admin/wonderu',
                element: <WonderU/>
            },
            {
                path: '/admin/stage',
                element: <Stage/>
            },
            {
                path: '/admin/mc',
                element: <MC/>
            },
            {
                path: '/admin/recruit',
                element: <AdminRecruitment/>
            },
            {
                path: '/admin/news',
                element: <Navigate to={'/news/home'}/>
            },
            {
                path: '/admin/news/home',
                element: <NewsHome/>
            },
            {
                path: '/admin/news/weekly',
                element: <NewsWeekly/>
            },
        ]
    },
    {
        path: '/error',
        element: <Error/>
    },
    {
        path: '*',
        element: <Error/>
    }
])

export default router