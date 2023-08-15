import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function NightFest() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/nightfest'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>NightFest</section>
    )
}

export default NightFest