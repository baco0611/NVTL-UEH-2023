import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function AdminRecruitment() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/recruit'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>AdminRecruitment</div>
    )
}

export default AdminRecruitment