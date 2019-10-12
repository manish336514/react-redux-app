import React from "react";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";

function Quiz(props) {
  function renderAnswerOptions(key, index) {
    return (
      <AnswerOption
        index={index}
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        selectedAnswer={props.selectedAnswer}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div key={props.questionId} className="quiz-story">
      <QuestionCount
        counter={props.counter}
        viewreults={props.viewreults}
        counter={props.questionId}
        total={props.questionTotal}
      />
      <Question content={props.question} />
      <ul className="answerOptions">
        <li>
          {props.answerOptions.map(renderAnswerOptions)}
          <br />
        </li>
      </ul>
      <br />
      <div className="bottom-footer">
        {props.counter > 0 ? (
          <button className="Previous-btn" onClick={props.setPreviousQuestion}>
            Previous
          </button>
        ) : (
          <div></div>
        )}

        {props.counter < props.totalquestion ? (
          <button className="next-btn" onClick={props.setNextQuestion}>
            Next
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
