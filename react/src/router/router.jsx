import { createBrowserRouter } from "react-router-dom"
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
import ForgotPassword from "../views/Client/LogLayout/ForgotPassword/ForgotPassword"

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
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout/>
    }
])

export default router