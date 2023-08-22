import { useContext, useEffect } from 'react'
import { UserContext } from '../../../../context/ContextProvider'

function ClientWonderU() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>ClientWonderU</section>
    )
}

export default ClientWonderU