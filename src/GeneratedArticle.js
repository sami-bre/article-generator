import React from "react";

export const GeneratedArticle = ({ article }) => {
  return (
    <div className="w-1/2 text-center rounded-lg bg-gray-50 dark:bg-gray-950 m-6 text-gray-800 dark:text-gray-300 py-10 px-4 flex flex-col">
      <h2>Generated Summary:</h2>
      <p>{article}</p>
    </div>
  );
};
