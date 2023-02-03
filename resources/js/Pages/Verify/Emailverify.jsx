import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/elements/Button";
import Input from "../../components/elements/Input";
import FormLabel from "../../components/elements/FormLabel";
const EmailVerify = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ code });
        setCode("");
        navigate("/VerifyPhone");
    };
    return (
        <div className="auth-wrapper ">
            <div className="auth-forms text-center">
                <h3
                    className="text-color-secondary ta-c reveal-from-bottom"
                    data-reveal-delay="200"
                >
                    تایید ایمیل
                </h3>
                <form className="auth-form cmp-form" onSubmit={handleSubmit}>
                    <FormLabel htmlFor="code" style={{ marginBottom: "10px" }}>
                        کد ارسال شده به ایمیل خود را وارد کنید.
                    </FormLabel>
                    <Input
                        type="text"
                        name="code"
                        id="code"
                        className="cmp-field cmp-field-border mt-4 "
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                    />
                    <Button className="cmp-btn-def btn-sm btn-primary register-btn mt-8">
                        تایید
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default EmailVerify;
