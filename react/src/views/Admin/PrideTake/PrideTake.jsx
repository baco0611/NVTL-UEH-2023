import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function PrideTake() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/pridetake'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>PrideTake</div>
    )
}

export default PrideTake