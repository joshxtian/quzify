import React, { useEffect, useState } from "react";
import { randomize } from "../../../lib/question";
import AnswerItem from "./AnswerItem";
import { RadioGroup } from "@headlessui/react";
import Button from "@components/Button";
const AnswerList = ({ cb, node }) => {
  const [answer, setAnswer] = useState(1);
  const [showAnswer, setShowAnswer] = useState(false);

  const childNodes = node.children
    .filter((x) => x.type === "element")
    .map((child, index) => {
      const { type, tagName, value } = child.children[0];
      const isAnswer = child.children[0].tagName === "strong";
      const text =
        type === "text" ? value : child.children[0].children[0].value;
      return (
        <>
          <RadioGroup.Option value={index}>
            {({ checked }) => (
              <AnswerItem
                key={index}
                isActive={checked}
                showAnswer={showAnswer}
                className="choice-text list-none"
                isAnswer={isAnswer}
                text={text}
              />
            )}
          </RadioGroup.Option>
        </>
      );
    });
  return (
    <div className="wrapper flex flex-col">
      <RadioGroup value={answer} onChange={setAnswer}>
        <ol className="mt-10">{childNodes}</ol>
      </RadioGroup>
      <div className="flex justify-center items-cente mt-32">
        <Button click={() => {
          setShowAnswer(true);
        }}>
          Check Answer
        </Button>
      </div>
    </div>
  );
};

export default AnswerList;
