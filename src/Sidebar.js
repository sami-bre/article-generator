// Sidebar.js
import React from "react";

export const Sidebar = ({ recentArticles, onClose, showSidebar, onItemClicked }) => {
  const sidebarClass = showSidebar
    ? "fixed top-0 left-0 h-full w-1/4 bg-[#283B42]/[0.9] text-white p-4 transform translate-x-0 transition-transform duration-300 ease-in-out dark:bg-gray-900 overflow-y-auto"
    : "fixed top-0 left-0 h-full w-1/4 bg-[#283B42]/[0.9] text-white p-4 transform -translate-x-full transition-transform duration-300 ease-in-out dark:bg-gray-900";
  const backdropClass = showSidebar
    ? "fixed inset-0 bg-white bg-opacity-20 backdrop-filter-none"
    : "hidden";

  return (
    <>
      <div className={backdropClass} onClick={onClose}></div>
      <div className={sidebarClass}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Articles</h2>
          <button
            onClick={onClose}
            className="text-white focus:outline-none hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="list-none p-0 m-0">
          {recentArticles.map((article, index) => (
            <li
              key={index}
              className="mb-2 hover:bg-gray-500 p-2 rounded cursor-pointer"
              onClick={() => onItemClicked(index)}
            >
              <span className="block truncate overflow-ellipsis">
                {article.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
