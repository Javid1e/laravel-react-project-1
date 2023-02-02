import React, { useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthState } from "./Context";
import ReactGA from "react-ga";
// Views
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/index";
import Signup from "./Pages/SignUp/SignUp";
// Initialize Google Analytics
//ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
};

const App = () => {
    const { token } = useAuthState();

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Signup />} />
            </Routes>
        </>
    );
};

export default App;
