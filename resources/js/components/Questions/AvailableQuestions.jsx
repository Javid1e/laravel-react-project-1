import React from "react";
import styles from "./AvailableQuestions.module.css";
import Card from "../../components/elements/Card";
import QuestionItem from "./QuestionItem/QuestionItem";
const EXAMPLE_QUESTIONS = [
    {
        id: "e1",
        name: "ریاضی",
        grade: "ششم",
        description: "سوالات تشریحی نوبت اول",
        price: 22.99,
    },
    {
        id: "e2",
        name: "علوم تجربی",
        grade: "سوم راهنمایی",
        description: "سوالات تستی نوبت دوم",
        price: 16.5,
    },
    {
        id: "e3",
        name: "حساب دیفرانسیل",
        grade: "سوم دبیرستان",
        description: "سوالات تستی و تشریحی",
        price: 12.99,
    },
    {
        id: "e4",
        name: "مهندسی نرم افزار",
        grade: "دانشگاه",
        description: "سوالات تستی و تشریحی",
        price: 18.99,
    },
];
const AvailableQuestions = () => {
    const questionList = EXAMPLE_QUESTIONS.map((question) => (
        <QuestionItem
            key={question.id}
            id={question.id}
            name={question.name}
            grade={question.grade}
            description={question.description}
            price={question.price}
        />
    ));
    return (
        <section className={styles.meals}>
            <Card>
                <ul>{questionList}</ul>
            </Card>
        </section>
    );
};
export default AvailableQuestions;
