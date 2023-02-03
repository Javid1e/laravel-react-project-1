import React, { useContext } from "react";
import CartContext from "../../../../store/Cart-Context";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import Modal from "../../../elements/Modal";
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `${cartCtx.totalAmount.toFixed(2)} تومان `;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };
    const cartItem = (
        <ul className={`${styles["cart-items"]}`}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    grade={item.grade}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );
    return (
        <Modal onClose={props.onClose}>
            {cartItem}
            <div className={styles.total}>
                <span>مبلغ قابل پرداخت</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button
                    className={`${styles["button--alt"]}`}
                    onClick={props.onClose}
                >
                    بستن
                </button>
                {hasItems && <button className={styles.button}>پرداخت</button>}
            </div>
        </Modal>
    );
};
export default Cart;
