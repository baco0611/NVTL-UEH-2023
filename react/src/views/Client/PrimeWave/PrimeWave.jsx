import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function PrimeWave() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>PrimeWave</section>
    )
}

export default PrimeWave