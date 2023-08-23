import { useContext, useEffect } from 'react'
import { UserContext } from '../../../../context/ContextProvider'
import ComingSoon from '../../../../components/ComingSoon/ComingSoon'

function ClientWonderU() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <ComingSoon/>
        // <section>ClientWonderU</section>
    )
}

export default ClientWonderU