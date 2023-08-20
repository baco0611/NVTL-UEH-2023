import { useContext, useEffect } from "react"
import { UserContext } from "../../../../context/ContextProvider"

function NewsHome() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/admin/news'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>NewsHome</div>
    )
}

export default NewsHome