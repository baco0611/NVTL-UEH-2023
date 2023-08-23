import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"
import ComingSoon from "../../../components/ComingSoon/ComingSoon"

function Casting() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/casting'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <ComingSoon/>
        // <section>Casting</section>
    )
}

export default Casting