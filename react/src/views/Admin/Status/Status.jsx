import { useContext, useEffect } from 'react'
import { UserContext } from '../../../context/ContextProvider'

function Status() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/admin/status'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>Status</div>
    )
}

export default Status