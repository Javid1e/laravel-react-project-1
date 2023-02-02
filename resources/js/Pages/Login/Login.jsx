import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuthDispatch, useAuthState } from "../../Context";
import { actionTypes } from "../../Context/reducer";
import Input from "../../components/elements/Input";
import Button from "../../components/elements/Button";
import FormLabel from "../../components/elements/FormLabel";
import FormHint from "../../components/elements/FormHint";
import LayoutDefault from "../../layouts/LayoutDefault";
import ButtonGroup from "../../components/elements/ButtonGroup";
import { Link } from "react-router-dom";
const fetchToken = async (username, password) => {
    return axios
        .post("http://localhost:3001/login", {
            username,
            password,
        })
        .then((response) => response.data);
};

const fetchCurrentUserInfo = (token) => {
    return axios
        .get("http://localhost:3001/users/me", {
            headers: {
                authorization: token,
            },
        })
        .then((response) => response.data);
};

export default function Login() {
    const navigate = useNavigate();
    const gotoSignUpPage = () => navigate("/Register");
    const gotoForgetPass = () => navigate("/ForgetPass");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    const { loading } = useAuthState();

    const dispatch = useAuthDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.LOGIN_REQUEST,
        });
        fetchToken(username, password).then(({ success, data }) => {
            if (success) {
                setToken(data);
            }
        });
    };
    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch({
                type: actionTypes.LOGIN_REQUEST,
            });
            setToken(token);
        }
    }, [dispatch]);

    useEffect(() => {
        if (token) {
            fetchCurrentUserInfo(token).then(({ success, data }) => {
                if (success) {
                    localStorage.setItem("token", token);
                    dispatch({
                        type: actionTypes.LOGIN_SUCCESS,
                        payload: {
                            user: data,
                            token,
                        },
                    });
                }
            });
        }
    }, [token, dispatch]);

    return (
        <>
            <LayoutDefault>
                {loading ? (
                    <p>Loading ...</p>
                ) : (
                    <div className="body-wrap m-64 ">
                        <FormHint status="enabled" className="container-sm">
                            <h1
                                className="text-color-secondary ta-c mt-0 mb-16 reveal-from-bottom"
                                data-reveal-delay="200"
                            >
                                ورود
                            </h1>
                            <form method="post" onSubmit={handleLogin}>
                                <Input
                                    className="mt-24"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    type="text"
                                    placeholder="نام کاربری"
                                    required="required"
                                />
                                <Input
                                    className="mt-24"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    type="password"
                                    placeholder="رمز عبور"
                                    required="required"
                                />
                                <p>
                                    <span
                                        className="link"
                                        style={{ marginLeft: ".5rem" }}
                                        onClick={gotoSignUpPage}
                                    >
                                        ثبت نام
                                    </span>
                                    |
                                    <span
                                        className="link"
                                        style={{ marginRight: ".5rem" }}
                                        onClick={gotoSignUpPage}
                                    >
                                        فراموشی رمز عبور
                                    </span>
                                </p>
                                <ButtonGroup>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        wideMobile
                                    >
                                        ورود
                                    </Button>

                                    <Button color="primary" wideMobile>
                                        <Link to="/">بازگشت</Link>
                                    </Button>
                                </ButtonGroup>
                            </form>
                        </FormHint>
                    </div>
                )}
            </LayoutDefault>
        </>
    );
}