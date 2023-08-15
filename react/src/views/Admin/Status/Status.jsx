import { useEffect } from 'react'

function Status() {
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>Status</div>
    )
}

export default Status