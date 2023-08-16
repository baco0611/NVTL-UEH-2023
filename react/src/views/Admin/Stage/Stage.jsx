import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function Stage() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/casting'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>Stage</div>
    )
}

export default Stage