import './Error.scss'

function Error() {
    return (
        <div className="error-container" id='error-session'>
            <div className="error-boo-wrapper">
                <div className="error-boo">
                    <div className="error-face"></div>
                </div>
                <div className="error-shadow"></div>

                <h1>Whoops!</h1>
                <p>
                    We couldn't find the page you
                    <br />
                    were looking for.
                </p>
            </div>
        </div>
    )
}

export default Error