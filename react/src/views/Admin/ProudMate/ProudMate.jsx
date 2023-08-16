import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function ProudMate() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/proudmate'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>ProudMate</div>
    )
}

export default ProudMate