import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function Casting() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/casting'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>Casting</section>
    )
}

export default Casting