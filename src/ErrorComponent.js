import React from "react";

export const ErrorComponent = ({ errorMessage }) => {
  return (
    <div className="w-1/2 text-center rounded-lg bg-gray-50 dark:bg-gray-950 m-6 text-gray-800 dark:text-gray-300 py-10 px-4 flex flex-col">
      <p className="text-4xl my-8 font-bold text-red-400 dark:text-red-400">
        {errorMessage}
      </p>
    </div>
  );
};
