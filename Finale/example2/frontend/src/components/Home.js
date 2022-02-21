import {Link} from 'react-router-dom'

function Home() {
    return(
        <div>
            <h1>Home page</h1>
            <Link to="/count">Count page</Link>
        </div>
    )
}

export default Home