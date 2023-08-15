import { useEffect } from "react"
function Account() {
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <div>Account</div>
    )
}

export default Account