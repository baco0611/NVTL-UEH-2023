import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function WonderU() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/wonderu'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>WonderU</div>
    )
}

export default WonderU