import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutDefault from "../../layouts/LayoutDefault";
import Input from "../../components/elements/Input";
import ButtonGroup from "../../components/elements/ButtonGroup";
import Button from "../../components/elements/Button";
import FormLabel from "../../components/elements/FormLabel";
const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, username, tel, password });
        setEmail("");
        setTel("");
        setUsername("");
        setPassword("");
        navigate("/VerifyEmail");
    };
    const gotoLoginPage = () => navigate("/Login");
    const gotoHomePage = () => navigate("/");
    return (
        <div className="auth-wrapper">
            <div className="auth-forms text-center">
                <h3
                    className="text-color-secondary ta-c reveal-from-bottom"
                    data-reveal-delay="200"
                >
                    ثبت نام در سوال چی
                </h3>
                <form className="auth-form cmp-form" onSubmit={handleSubmit}>
                    <FormLabel htmlFor="email">ایمیل</FormLabel>
                    <Input
                        className="cmp-field cmp-field-border mt-4 "
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormLabel htmlFor="username">نام کاربری</FormLabel>
                    <Input
                        className="cmp-field cmp-field-border mt-4 "
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormLabel htmlFor="tel">تلفن همراه</FormLabel>
                    <Input
                        className="cmp-field cmp-field-border mt-4 "
                        type="tel"
                        name="tel"
                        id="tel"
                        value={tel}
                        required
                        onChange={(e) => setTel(e.target.value)}
                    />
                    <FormLabel htmlFor="tel">رمز عبور</FormLabel>
                    <Input
                        className="cmp-field cmp-field-border mt-4"
                        type="password"
                        name="password"
                        id="password"
                        minLength={8}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p className="mt-8">
                        <span style={{ marginLeft: ".5rem" }}>
                            حساب کاربری دارید ؟
                        </span>
                        <span className="link" onClick={gotoLoginPage}>
                            ورود
                        </span>
                    </p>

                    <Button
                        className="cmp-btn-def btn-sm btn-primary register-btn mt-8"
                        type="submit"
                        color="primary"
                    >
                        ثبت نام
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

export default Signup;
