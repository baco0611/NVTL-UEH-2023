import { useEffect } from "react"
import { Outlet } from "react-router-dom"

function News() {
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>
            News
            <Outlet/>
        </div>
    )
}

export default News