import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/elements/Button";
import Input from "../../components/elements/Input";
import FormLabel from "../../components/elements/FormLabel";
const ForgetPassPhone = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const gotoForgetPassEmailPage = () => navigate("/RecoverWithEmail");
    const gotoHomePage = () => navigate("/");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ code });
        setCode("");
        navigate("/dashboard");
    };
    return (
        <div className="auth-wrapper ">
            <div className="auth-forms text-center">
                <h3
                    className="text-color-secondary ta-c reveal-from-bottom"
                    data-reveal-delay="200"
                >
                    فراموشی رمز عبور
                </h3>
                <form className="auth-form cmp-form" onSubmit={handleSubmit}>
                    <FormLabel htmlFor="code" style={{ marginBottom: "10px" }}>
                        تلفن همراه خود را وارد کنید.
                    </FormLabel>
                    <Input
                        className="cmp-field cmp-field-border mt-4 "
                        type="tel"
                        name="tel"
                        id="tel"
                        required
                        onChange={(e) => setTel(e.target.value)}
                    />
                    <p className="mt-16">
                        <span
                            className="link "
                            style={{ marginLeft: ".5rem" }}
                            onClick={gotoForgetPassEmailPage}
                        >
                            بازیابی اکانت با ایمیل
                        </span>
                    </p>
                    <Button className="cmp-btn-def btn-sm btn-primary register-btn mt-8">
                        دریافت پیام بازیابی رمز عبور
                    </Button>
                    <Button
                        className="cmp-btn-def btn-sm btn-primary register-btn mt-8"
                        color="primary"
                        onClick={gotoHomePage}
                    >
                        بازگشت
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassPhone;
