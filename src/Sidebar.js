import React from "react";

export const Sidebar = ({ recentArticles }) => {
  return (
    <div className="h-full bg-gray-300 dark:bg-gray-800 p-4">
      <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
        Recent Articles
      </h2>
      <ul>
        {recentArticles.map((article, index) => (
          <li key={index} className="mb-2 dark:text-gray-400">
            <span className="cursor-pointer hover:underline">
              {article.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
