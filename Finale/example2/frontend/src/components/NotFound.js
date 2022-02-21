import {Link} from 'react-router-dom'

function NotFound() {
    return(
        <div>
            <h2>Error</h2>
            <p>A page by that name was not found</p>
            <Link to="/">Go to home page</Link>
        </div>
    )
}

export default NotFound