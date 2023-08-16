import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"
function Account() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/account'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>Account</div>
    )
}

export default Account