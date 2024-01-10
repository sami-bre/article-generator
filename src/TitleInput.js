import React from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export const TitleInput = ({ value, onChange, isDark, switchTheme }) => {
  return (
    <div className="flex justify-center">
      <div class="flex items-center m-8 w-2/3 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <input
          type="text"
          name="title"
          id="title"
          value={value}
          onChange={onChange}
          class="block mx-4 p-2.5 w-full text-sm text-[#283B42] bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter title here"
        ></input>
        <button
          type="submit"
          class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
        >
          <svg
            class="w-5 h-5 rotate-90 rtl:-rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
          </svg>
          <span class="sr-only">Send message</span>
        </button>
      </div>
      <button type="button" className="" onClick={switchTheme}>
        {isDark ? (
          <FaSun color="#F7F7FF" size={20} />
        ) : (
          <FaMoon color="#2b2b2b" size={20} />
        )}
      </button>
    </div>
  );
};
