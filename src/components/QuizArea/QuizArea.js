import React from "react";
import "./QuizArea.css";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useEffect } from "react";
import AnswerList from "./AnswerList";
import Question from "./Question";
import { useCallback } from "react";
const QuizArea = ({ data }) => {
  const [document, setDocument] = useState(null);
  const [siblingNode, setSiblingNode] = useState(null);

  useEffect(() => {
    setDocument(data);
  }, [data]);

  return (
    <div className="bg-white shadow-2xl rounded-xl w-[800px] h-[550px] overflow-y-scroll px-7 py-7 sm:py-10 sm:px-16">
      <ReactMarkdown
        className="md"
        includeElementIndex
        unwrapDisallowed={true}
        children={document}
        components={{
          p: ({ node, children }) => <Question node={node} />,
          ol: ({ node, children }) => <AnswerList cb={setSiblingNode} node={node} />
        }}
      />
    </div>
  );
};

export default QuizArea;
