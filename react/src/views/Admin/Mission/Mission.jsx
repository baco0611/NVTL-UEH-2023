import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function Mission() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/mission'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>Mission</div>
    )
}

export default Mission