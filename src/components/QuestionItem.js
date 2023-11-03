import React, { useState } from "react";

function QuestionItem({ question, deleteQuestion, updateCorrectAnswer }) {
  const { id, prompt, answers, correctIndex } = question;

  const [selectedCorrectAnswer, setSelectedCorrectAnswer] = useState(correctIndex);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDelete = () => {
    // Call the deleteQuestion function and pass the question ID
    deleteQuestion(id);
  };

  const handleCorrectAnswerChange = (event) => {
    const newCorrectIndex = parseInt(event.target.value, 10);
    setSelectedCorrectAnswer(newCorrectIndex);
    // Call the updateCorrectAnswer function to update the correct answer
    updateCorrectAnswer(id, newCorrectIndex);
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={selectedCorrectAnswer} onChange={handleCorrectAnswerChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
