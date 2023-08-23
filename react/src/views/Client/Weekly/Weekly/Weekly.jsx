import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../../context/ContextProvider'
import ComingSoon from '../../../../components/ComingSoon/ComingSoon'


function Weekly() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <ComingSoon/>
        // <section>Weekly</section>
    )
}

export default Weekly