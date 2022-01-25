import {useDispatch, useSelector} from "react-redux";
import {LogInAction} from "../Redux/Actions/LogIn";
import {LogOutAction} from "../Redux/Actions/LogOut";
import {Link} from "react-router-dom";

function SignIn() {
    const isLoggedIn = useSelector( (state) => state.isLoggedIn )
    const wizardChoices = useSelector( (state) => state.wizardChoices )
    const counter = useSelector( (state) => state.counter )
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={ () => dispatch(LogInAction())}>Log In</button>
            <button onClick={ () => dispatch(LogOutAction())}>Log Out</button>
            <p>Logged In? {isLoggedIn.toString()}</p>
            <p>You have classified {counter} people.</p>
            {wizardChoices.map( (wizard) => <div key={wizard.name}>{wizard.name}: {wizard.isWizard.toString()}</div> )}
            <Link to="/main">Main page Link</Link>
        </div>
    )
}

export default SignIn;