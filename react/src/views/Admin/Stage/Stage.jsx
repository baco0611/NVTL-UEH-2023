import { useEffect } from "react"

function Stage() {
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>Stage</div>
    )
}

export default Stage