import * as React from "react";
import Shell from "@components/Shell";
import DocumentArea from "@components/DocumentArea";
import Button from "@components/Button";
import useQuiz from "@hooks/useQuiz";
import ReactMarkdown from "react-markdown";
const IndexPage = () => {
  const { document, handleDocument, generateQuiz, initialized, quiz } =
    useQuiz();
  return (
    <Shell init={{initialized: initialized, doc: document }}>
      <div className="flex shadow-2xl max-w-[600px] w-full flex-col rounded-xl overflow-hidden">
        <DocumentArea document={document} handleChange={handleDocument} />
        <div className="bg-white flex flex-row py-8 justify-center items-center">
          <Button click={generateQuiz}>Get Started!</Button>
        </div>
      </div>
    </Shell>
  );
};

export default IndexPage;

export const Head = () => <><title>Quizify</title><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
</>;
