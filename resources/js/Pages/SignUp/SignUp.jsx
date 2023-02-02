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
    };
    const gotoLoginPage = () => navigate("/Login");
    const gotoHomePage = () => navigate("/");
    return (
        <LayoutDefault>
            <div className="body-wrap m-64 ">
                <h2>Sign up </h2>
                <form className="signup__form" onSubmit={handleSubmit}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormLabel htmlFor="tel">Phone Number</FormLabel>
                    <Input
                        type="tel"
                        name="tel"
                        id="tel"
                        value={tel}
                        required
                        onChange={(e) => setTel(e.target.value)}
                    />
                    <FormLabel htmlFor="tel">Password</FormLabel>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        minLength={8}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <p>
                        <span style={{ marginLeft: ".5rem" }}>
                            حساب کاربری دارید ؟
                        </span>
                        <span className="link" onClick={gotoLoginPage}>
                            ورود
                        </span>
                    </p>
                    <ButtonGroup>
                        <Button type="submit" color="primary" wideMobile>
                            ثبت نام
                        </Button>
                        <Button
                            color="primary"
                            wideMobile
                            onClick={gotoHomePage}
                        >
                            بازگشت
                        </Button>
                    </ButtonGroup>
                </form>
            </div>
        </LayoutDefault>
    );
};

export default Signup;
