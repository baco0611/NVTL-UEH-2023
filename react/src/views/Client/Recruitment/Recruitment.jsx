import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"
import ComingSoon from "../../../components/ComingSoon/ComingSoon"

function Recruitment() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/recruitment'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <ComingSoon/>
        // <section>Recruitment</section>
    )
}

export default Recruitment