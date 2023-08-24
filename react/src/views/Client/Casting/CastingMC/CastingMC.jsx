import { useContext, useEffect } from "react"
import { UserContext } from "../../../../context/ContextProvider"

function CastingMC() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/casting'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>CastingMC</div>
    )
}

export default CastingMC