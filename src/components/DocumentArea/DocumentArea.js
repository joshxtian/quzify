import React from "react";

const DocumentArea = ({ className, document, handleChange}) => {

  return (
    <div className={`w-full overflow-x-hidden overflow-y-scroll h-[300px] bg-white relative ${className}`}>
      <div
        className="min-h-[1500px] outline-none w-full px-14 py-8 absolute top-0 left-0 z-20"
        contentEditable
        onInput={handleChange}
      ></div>
      {!document.length && (
        <p className="text-slate-400 w-72 sm:w-fit font-bold relative left-14 mt-10 z-10">
          Paste your document (must be in markdown format)
        </p>
      )}
    </div>
  );
};

export default DocumentArea;
