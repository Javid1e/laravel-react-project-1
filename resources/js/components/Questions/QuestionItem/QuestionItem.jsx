import React, { useContext } from "react";
import styles from "./QuestionItem.module.css";
import QuestionItemForm from "./QuestionItemForm";
import CartContext from "../../../store/Cart-Context";
const QuestionItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `${props.price.toFixed(2)} تومان `;
    const addItemToCartHandler = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: 1,
            price: props.price,
        });
    };
    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <QuestionItemForm onAddToCart={addItemToCartHandler} />
            </div>
        </li>
    );
};
export default QuestionItem;
