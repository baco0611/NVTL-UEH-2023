import { useContext, useEffect } from "react"
import { UserContext } from "../../../context/ContextProvider"
import "./PrimeWave.scss"
import { Link } from 'react-router-dom'
import ComingSoon from "../../../components/ComingSoon/ComingSoon"

function PrimeWave() {
    const { setPath } = useContext(UserContext)
    useEffect(() => setPath('/primewave'), [])
    useEffect(() => {window.scrollTo(0, 0)}, [])

    return (
        <section id="client-prime">
            <div className="client-prime-block">
                <Link className="secondary-button btn" to={'/primewave/pridetake?index=1'}>Khám phá thêm</Link>    
            </div>
            <ComingSoon/>
        </section>
    )
}

export default PrimeWave