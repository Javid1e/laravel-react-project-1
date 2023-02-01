import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../partials/Cart/CartIcon";
import CartContext from "../../../store/Cart-Context";
import Button from "../../elements/Button";
const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);
    const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };

    }, [items]);
    return (
        <Button className="button button-primary button-wide-mobile button-sm" onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>سبد خرید</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </Button>
    );
};

export default HeaderCartButton;