import {useSelector} from "react-redux";

function Main() {

    const isLoggedIn = useSelector( (state) => state.isLoggedIn )

    return (
        <div>
        <div>Logged in: {isLoggedIn.toString()}</div>
        </div>
    )
}

export default Main;