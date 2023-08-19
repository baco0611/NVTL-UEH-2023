import { useContext, useEffect } from 'react'
import { UserContext } from '../../../../context/ContextProvider'

function ClientPrideTake() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>ClientPrideTake</section>
    )
}

export default ClientPrideTake