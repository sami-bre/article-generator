import React from "react";

export const Sidebar = ({ recentArticles }) => {
  return (
    <div className="h-full bg-gray-300 dark:bg-gray-800 p-4 w-64">
      <h2 className="text-lg font-semibold mb-4 dark:text-gray-300">
        Recent Articles
      </h2>
      <ul className="list-none p-0 m-0">
        {recentArticles.map((article, index) => (
          <li
            key={index}
            className="mb-2 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded"
          >
            <span className="cursor-pointer block overflow-hidden whitespace-nowrap text-ellipsis">
              {article.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
