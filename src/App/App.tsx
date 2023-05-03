import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import FirstStepComponent from "../components/SignUp/FirstStepComponent";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="signup/*" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
};

export default App;
