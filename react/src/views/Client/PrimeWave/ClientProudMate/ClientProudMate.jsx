import { useContext, useEffect } from 'react'
import { UserContext } from '../../../../context/ContextProvider'
import ComingSoon from '../../../../components/ComingSoon/ComingSoon'

function ClientProudMate() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <ComingSoon/>
        // <section>ClientProudMate</section>
    )
}

export default ClientProudMate