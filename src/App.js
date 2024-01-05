import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";


const TitleInput = ({ value, onChange, isDark, switchTheme }) => {
  return (
    <div className="flex justify-center">
      <div class="flex items-center m-8 w-2/3 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        {/* <button
          type="button"
          class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              fill="currentColor"
              d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
            />
          </svg>
          <span class="sr-only">Upload image</span>
        </button>
        <button
          type="button"
          class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
        >
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
            />
          </svg>
          <span class="sr-only">Add emoji</span>
        </button> */}
        <input
          type="text"
          name="title"
          id="title"
          value={value}
          onChange={onChange}
          class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <button type="button" className="" onClick={switchTheme}>{isDark ? <FaSun color="#F7F7FF" size={20} /> : <FaMoon color="#2b2b2b" size={20} />}</button>
    </div>
  );
};

const PromptArea = ({ value, onChange }) => {
  return (
    <div className="w-1/4">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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

const GeneratedArticle = ({ article }) => {
  return (
    <div className="w-1/2 text-center rounded-lg bg-gray-200 dark:bg-gray-800 m-6 text-gray-800 dark:text-gray-300 py-10 px-4 flex flex-col justify-center">
      <h2>Generated Summary:</h2>
      <p>{article}</p>
    </div>
  );
};

const InstructionsView = () => {
  return (
    <div className="w-1/2 text-center rounded-lg bg-gray-200 dark:bg-gray-800 m-6 text-gray-800 dark:text-gray-300 py-10 px-4 flex flex-col justify-center">
      <h2 className="text-4xl my-8">Enter title to generate article</h2>
    </div>
  );
};

const LoadingIndicator = () => {
  return (
    <div className="w-1/2 text-center rounded-lg bg-gray-200 dark:bg-gray-800 m-6 text-gray-800 dark:text-gray-300 py-10 px-4 flex flex-col justify-center">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Generating summary...</p>
    </div>
  );
};

const App = () => {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // let's conditionally add the "dark" class to the root element
  useEffect(() => {
    var userTheme = localStorage.getItem("theme");
    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    var dark = userTheme === "dark" || (userTheme === null && isSystemDark);
    if (dark) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }, []); // The empty array means this useEffect will run once on component mount.

  // setting light mode
  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    setIsDark(false);
    localStorage.setItem("theme", "light");
  };

  // setting dark mode
  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
    localStorage.setItem("theme", "dark");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a title."); // TODO: use a modal instead
      return;
    }
    // let's sleep for 3 seconds to simulate a long-running operation
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const generatedSummary = `Summary for: ${title}`;
      setArticle(generatedSummary);
    }, 3000);
  };

  const switchTheme = () => {
    console.log({ isDark });
    if (isDark) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <div className="h-screen flex flex-col dark:bg-slate-950">
      <h1 className="text-center mt-4 mb-4 dark:text-gray-300">Article Generator</h1>
      <form onSubmit={handleSubmit} className="h-screen flex flex-col">
        <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} isDark={isDark} switchTheme={switchTheme} />
        <div className="flex flex-row justify-center h-full">
          {loading ? (
            <LoadingIndicator />
          ) : article ? (
            <GeneratedArticle article={article} />
          ) : (
            <InstructionsView />
          )}
          <PromptArea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
      </form>
      
    </div>
  );
};

export default App;
