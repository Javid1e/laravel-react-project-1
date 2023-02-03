import React from "react";
import styles from "./QuestionItemForm.module.css";

const QuestionItemForm = (props) => {
    const submitHandler = (event) => {
        event.preventDefault();
        props.onAddToCart(1);
    };
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <button>افزودن به سبد خرید</button>
        </form>
    );
};
export default QuestionItemForm;
