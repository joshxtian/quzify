import { useState } from "react";


const useQuiz = () => {
    const [document, setDocument] = useState("");
    const [quiz, setQuiz] = useState(null);
    const [initialized, setInitialized] = useState(false);
    const handleDocument = (e) => {
        setDocument(e.target.innerText);
    };

    const generateQuiz = () => {
        setInitialized(true);
    };

    return { document, handleDocument, generateQuiz, quiz, initialized};
}

export default useQuiz;