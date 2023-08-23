import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"
import ComingSoon from "../../../components/ComingSoon/ComingSoon"

function NightFest() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/nightfest'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <ComingSoon/>
        // <section>NightFest</section>
    )
}

export default NightFest