// QuestionList.js
import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, deleteQuestion, updateCorrectAnswer }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            deleteQuestion={deleteQuestion}
            updateCorrectAnswer={updateCorrectAnswer}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
