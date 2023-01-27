import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
    const classes = classNames("footer-nav", className);

    return (
        <nav {...props} className={classes}>
            <ul className="list-reset">
                <li>
                    <Link to="#0">درباره ما</Link>
                </li>
                <li>
                    <Link to="#0">تماس با ما</Link>
                </li>
                <li>
                    <Link to="#0">حریم خصوصی</Link>
                </li>
                <li>
                    <Link to="#0">سوالات رایج</Link>
                </li>
                <li>
                    <Link to="#0">پشتیبانی</Link>
                </li>
            </ul>
        </nav>
    );
};

export default FooterNav;
