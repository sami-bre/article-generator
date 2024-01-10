import React from "react";

export const PromptArea = ({ value, onChange }) => {
  return (
    <div className="w-1/4">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-[#283B42] dark:text-white"
      >
        Your message
      </label>
      <textarea
        value={value}
        onChange={onChange}
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Additional details ..."
      ></textarea>
    </div>
  );
};
