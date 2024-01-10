import React from "react";

export const InstructionsView = () => {
  return (
    <div className="w-1/2 text-center rounded-lg bg-gray-50 dark:bg-gray-950 m-6 text-gray-800 dark:text-gray-300 py-10 px-4 flex flex-col">
      <h2 className="text-4xl my-8 font-bold text-[#85B8cB] dark:text-blue-400">
        Enter a Title to Generate an Article
      </h2>
      <p className="text-sm text-[#283B42] dark:text-[#D1DDDB]">
        Once you enter a title, click the submit button to generate an article.
        Your article will be generated here.
      </p>
    </div>
  );
};
