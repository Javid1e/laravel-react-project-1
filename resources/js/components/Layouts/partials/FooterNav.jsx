import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
    const classes = classNames("footer-nav", className);

    return (
        <nav {...props} className={classes}>
            <ul className="list-reset">
                <li>
                    <a to="#0">درباره ما</a>
                </li>
                <li>
                    <a to="#0">تماس با ما</a>
                </li>
                <li>
                    <a to="#0">حریم خصوصی</a>
                </li>
                <li>
                    <a to="#0">سوالات رایج</a>
                </li>
                <li>
                    <a to="#0">پشتیبانی</a>
                </li>
            </ul>
        </nav>
    );
};

export default FooterNav;
