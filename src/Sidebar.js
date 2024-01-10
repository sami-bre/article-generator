import React from "react";

export const Sidebar = ({ recentArticles }) => {
  return (
    <div className="h-full bg-[#283B42]/[0.9] dark:bg-gray-900 p-4 w-1/5 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-white dark:text-gray-300">
        Recent Articles
      </h2>
      <ul className="list-none p-0 m-0">
        {recentArticles.map((article, index) => (
          <li
            key={index}
            className="mb-2 hover:bg-gray-500 text-white dark:text-gray-400 p-2 rounded"
          >
            <span className="cursor-pointer block truncate overflow-ellipsis">
              {article.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
