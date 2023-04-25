import React from "react";

const InputComponent = () => {
    return (
        <div
            className={`${containerStyle} relative sm:w-1/3`}
            onFocus={handleFocus}
            onBlur={handleBlur}
        >
            <label
                htmlFor="email"
                className={`${labelStyle} pointer-events-none absolute transform pl-4 pt-2 text-gray-500 transition-all duration-150 ease-in`}
            >
                Email address
            </label>

            <input
                type="text"
                id="email"
                name="email"
                onChange={handleEmailChange}
                value={email}
                minLength={5}
                maxLength={50}
                className={`${inputClass} w-full rounded border bg-[#161616B3] px-4 pb-2 pt-6 text-white outline-none`}
            />
            {!isValidEmail && email && (
                <div className="absolute -bottom-7 flex items-center gap-x-2">
                    <img src={invalid} alt="invalid email" />
                    <div className="text-sm text-red-500">Enter valid email address</div>
                </div>
            )}
        </div>
    );
};

export default InputComponent;
