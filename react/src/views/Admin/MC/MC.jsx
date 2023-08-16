import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function MC() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/casting'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>MC</div>
    )
}

export default MC