import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import LoginInputComponent from "../UI/Inputs/LoginInputComponent";
import ButtonComponent from "../UI/Buttons/ButtonComponent";

import { useAppDispatch } from "../../store/hooks";

const FormComponent = () => {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");

    const handleEmail = (email: string) => {
        setEmail(email);
    };

    const handlePassword = (pass: string) => {
        setPass(pass);
    };

    console.log(email, pass);

    const dispatch = useAppDispatch();

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(console.log).catch(console.error);
    };

    return (
        <>
            <div className="my-7 flex flex-col gap-y-4">
                <LoginInputComponent type="email" handler={handleEmail} />
                <LoginInputComponent type="password" handler={handlePassword} />
            </div>
            <ButtonComponent size="big" title="Sign In" />
        </>
    );
};

export default FormComponent;
