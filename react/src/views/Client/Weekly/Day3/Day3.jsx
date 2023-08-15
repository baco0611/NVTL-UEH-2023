import { useContext, useEffect } from "react"
import { UserContext } from "../../../../context/ContextProvider"

function Day3() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>Day3</section>
    )
}

export default Day3