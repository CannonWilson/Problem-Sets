import {NotFound} from "./Components/NotFound";
import {Home} from "./Components/Home";
import {About} from "./Components/About";
import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="*" element={< NotFound />} />

                    {/* Additional challenge to redirect to NotFound at any invalid address */}
                    {/*<Route path="/not-found" element={< NotFound />} />*/}
                    {/*<Route path="*" element={<Navigate to="/not-found" />} />*/}
                </Routes>
            </BrowserRouter>
        </>
    );
}