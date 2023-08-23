import { useContext, useEffect } from "react"
import { UserContext } from "../../../../context/ContextProvider"
import ComingSoon from "../../../../components/ComingSoon/ComingSoon"

function Day2() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <ComingSoon/>
        // <section>Day2</section>
    )
}

export default Day2