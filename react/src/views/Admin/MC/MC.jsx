import { useEffect } from "react"

function MC() {
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>MC</div>
    )
}

export default MC