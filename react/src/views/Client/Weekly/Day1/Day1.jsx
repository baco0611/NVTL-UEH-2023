import { useContext, useEffect } from "react"
import { UserContext } from "../../../../context/ContextProvider"
import ComingSoon from "../../../../components/ComingSoon/ComingSoon"

function Day1() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <ComingSoon/>
        // <section>Day1</section>
    )
}

export default Day1