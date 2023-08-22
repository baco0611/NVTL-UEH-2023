import { useContext, useEffect } from 'react'
import { UserContext } from '../../../../context/ContextProvider'

function ClientProudMate() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>ClientProudMate</section>
    )
}

export default ClientProudMate