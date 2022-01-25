import {useDispatch, useSelector} from "react-redux";
import {YesWizardAction} from "../Redux/Actions/YesWizard";
import {NoWizardAction} from "../Redux/Actions/NoWizard";
import {IncreaseCounterAction} from "../Redux/Actions/IncreaseCounter";
import {Link} from "react-router-dom";

function Main() {

    const isLoggedIn = useSelector( (state) => state.isLoggedIn )
    const index = useSelector( (state) => state.counter )
    const dispatch = useDispatch()
    const wizards = [
        {
            name: "Gandalf",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/DSC09942_-_Gandalf_%2837033407776%29.jpg/640px-DSC09942_-_Gandalf_%2837033407776%29.jpg"
        },
        {
            name: "Thor",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chris_Hemsworth_by_Gage_Skidmore.jpg/640px-Chris_Hemsworth_by_Gage_Skidmore.jpg"
        },
        {
            name: "Iron Man",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/SDCC_2012_-_Tony_Stark_%287626726486%29.jpg/640px-SDCC_2012_-_Tony_Stark_%287626726486%29.jpg"
        },
        {
            name: "Old Harry Potter",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Daniel_Radcliffe_SDCC_2014.jpg/640px-Daniel_Radcliffe_SDCC_2014.jpg"
        },
        {
            name: "Jafar",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Aladdin_-_11884148073.jpg/640px-Aladdin_-_11884148073.jpg"
        },
        {
            name: "Ron Weasley",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Rupert_Grint_%28cropped%29.JPG/640px-Rupert_Grint_%28cropped%29.JPG"
        },
        {
            name: "Barack Obama",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/President_Barack_Obama.jpg/640px-President_Barack_Obama.jpg"
        },
        {
            name: "Thats all folks! Check the Sign In page to see your selections.",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/640px-Thats_all_folks.svg.png"
        }
    ]

    function WizardSelector() {
        return (
            <div>
                <img width="300px" src={wizards[index].image} />
                <p>{wizards[index].name}</p>
                <button onClick={ () => {
                    if (index < wizards.length-1) {
                        dispatch(YesWizardAction(wizards[index].name))
                        dispatch(IncreaseCounterAction())
                    }
                }
                }>Yes, Wizard</button>
                <button onClick={ () => {
                    if (index < wizards.length-1) {
                        dispatch(NoWizardAction(wizards[index].name))
                        dispatch(IncreaseCounterAction())
                    }
                }
                }>No, not a Wizard</button>
            </div>
        )
    }

    return (
        <div>
            <Link to="/sign-in">Sign In page Link</Link>
            { isLoggedIn ? <WizardSelector />: <h1>Please log in</h1> }
        </div>
    )
}

export default Main;