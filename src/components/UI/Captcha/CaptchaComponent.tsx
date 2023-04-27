import React, { useState } from "react";

const CaptchaComponent = () => {
    // todo - set all HREFs
    const [isVisible, setVisibility] = useState<boolean>(false);

    const showCaptchaInfo = () => {
        setVisibility(true);
    };

    return (
        <>
            <div className="text-xs text-[#737373]">
                This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
                {!isVisible && (
                    <button onClick={showCaptchaInfo} className="text-[#0071eb]">
                        Learn more.
                    </button>
                )}
            </div>

            {isVisible && (
                <div className="mt-4 text-xs text-[#737373]">
                    The information collected by Google reCAPTCHA is subject to the Google{" "}
                    <a href="#" className="text-[#0071eb]">
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="" className="text-[#0071eb]">
                        Terms of Service
                    </a>
                    , and is used for providing, maintaining, and improving the reCAPTCHA service
                    and for general security purposes (it is not used for personalized advertising
                    by Google).
                </div>
            )}
        </>
    );
};

export default CaptchaComponent;
