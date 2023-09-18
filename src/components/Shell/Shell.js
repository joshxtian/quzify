import React from "react";
import "./Shell.css";
import QuizArea from "../QuizArea/QuizArea";
import { useEffect } from "react";
import { useState } from "react";

const Shell = ({children, init}) => {
    return (
     <main className="px-5 sm:px-10">
        {init.initialized ? <QuizArea data={init?.doc}/> : children}
     </main>   
    );
}

export default Shell;