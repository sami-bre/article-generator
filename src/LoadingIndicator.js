import React from "react";

export const LoadingIndicator = () => {
  return (
    <div className="w-1/2 text-center rounded-lg bg-gray-50 dark:bg-gray-950 m-6 text-gray-800 dark:text-gray-300 py-10 px-4 flex flex-col">
      <div role="status" class="max-w-3xl animate-pulse flex flex-col">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-4"></div>
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/4 mb-16"></div>

        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/6 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-8"></div>

        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/2 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-1/6 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-3/4 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-5/6 mb-2.5"></div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};
