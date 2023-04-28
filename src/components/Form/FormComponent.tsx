import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import LoginInputComponent from "../UI/Inputs/LoginInputComponent";
import SignInButtonComponent from "../UI/Buttons/SignInButtonComponent";

import { useAppDispatch } from "../../store/hooks";

const FormComponent = () => {
    const dispatch = useAppDispatch();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(console.log).catch(console.error);
    };
    return (
        <>
            <div className="my-7 flex flex-col gap-y-4">
                <LoginInputComponent type="email" />
                <LoginInputComponent type="password" />
            </div>
            <SignInButtonComponent size="big" />
        </>
    );
};

export default FormComponent;
