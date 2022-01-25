import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./Components/SignIn";
import Main from "./Components/Main";
import NotFound from "./Components/NotFound";
import {Provider} from "react-redux";

function App(store) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/main" element={<Main/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
