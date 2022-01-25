import {useDispatch, useSelector} from "react-redux";
import {LogInAction} from "../Redux/Actions/LogIn";
import {LogOutAction} from "../Redux/Actions/LogOut";

function SignIn() {
    const isLoggedIn = useSelector( (state) => state.isLoggedIn )
    const wizards = useSelector( (state) => state.wizards )
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={ () => dispatch(LogInAction())}>Log In</button>
            <button onClick={ () => dispatch(LogOutAction())}>Log Out</button>
            <p>{isLoggedIn.toString()}</p>
            {wizards.map( (wizard) => <div>{wizard.name}: {wizard.isWizard}</div> )}
            <a href="/main">Main page</a>
        </div>
    )
}

export default SignIn;