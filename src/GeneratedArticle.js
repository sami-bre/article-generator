import React from "react";

export const GeneratedArticle = ({ title, article }) => {
  return (
    <div className="w-1/2 text-center rounded-lg bg-[#D1DDDB]/[0.3] dark:bg-gray-950 m-6 text-gray-800 dark:text-gray-300 py-10 px-4 flex flex-col">
      <h2 className="text-xl text-[#1D6A96] font-bold mb-4">{title}</h2>
      <div className="text-left block text-sm leading-6 overflow-y-auto max-h-96">
        <p>{article}</p>
      </div>
    </div>
  );
};
