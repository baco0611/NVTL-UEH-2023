import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"

function Home() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>
            {window.innerWidth}
        </section>
    )
}

export default Home