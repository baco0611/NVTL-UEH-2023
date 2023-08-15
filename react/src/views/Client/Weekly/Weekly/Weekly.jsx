import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../../../context/ContextProvider'

function Weekly() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/weekly'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section>Weekly</section>
    )
}

export default Weekly