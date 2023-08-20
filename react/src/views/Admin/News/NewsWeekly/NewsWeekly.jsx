import { useContext, useEffect } from "react"
import { UserContext } from "../../../../context/ContextProvider"

function NewsWeekly() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/admin/news'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>NewsWeekly</div>
    )
}

export default NewsWeekly