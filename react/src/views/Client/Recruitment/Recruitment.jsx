import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function Recruitment() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/recruitment'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>Recruitment</section>
    )
}

export default Recruitment