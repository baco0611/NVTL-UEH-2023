import { useEffect } from "react"

function ClientPrideTakeIndex3({result, setIndex}) {
    useEffect(() => {
        if(!result) {
            setIndex(1)
        }
    }, [])

    return (
        <img src={result}/>
    )
}

export default ClientPrideTakeIndex3