import React from "react";

const Question = ({ node }) => {
    if (node.tagName === "p" && node.children[0].tagName === "strong" && /\d/.test(node.children[0].children[0].value)) {
        const { children } = node.children[0];
        return (
            <div className="question mt-60 first:mt-0">
                {/* {node.children[0].children[0].value} */}
                <h1 className="question-text font-bold text-lg">
                    {children[0].value}
                </h1>         
            </div>
        );
    } else return false;
    
}

export default Question;