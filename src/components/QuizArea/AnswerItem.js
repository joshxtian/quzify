import React from "react";
import classNames from "classnames";

const AnswerItem = ({ isActive, showAnswer, text, className, isAnswer }) => {
  const itemClassNames = classNames(
    "answer-items border-2 cursor-pointer mt-2 p-1 rounded-lg px-5",
    className,
    {
        "border-pink-500": isActive,
        "border-white": !isActive,
        "bg-white": !isActive,
        "bg-pink-500": isActive,
    },
  );
  const textClassNames = classNames(
    "text-xs text-left sm:text-lg",
    {
      "text-white": isActive,
      "text-pink-500": !isActive,
    }
  );
  return (
    <li className={itemClassNames}>
      <div className="flex flex-row">
        <p className={textClassNames}>{text.toUpperCase()}</p>{showAnswer && (isAnswer ? <span className="ml-auto">✅</span> : <span className="ml-auto">❌</span>)}
      </div>
    </li>
  );
};

export default AnswerItem;
