import React, { Fragment } from "react";
import AvailableQuestions from "./AvailableQuestions";
import QuestionSummary from "./QuestionSummary";
const Questions = () => {
    return (
        <Fragment>
            <QuestionSummary />
            <AvailableQuestions />
        </Fragment>
    );
};
export default Questions;
