import React, { useState, useEffect } from "react";
import "./App.css";

import { TitleInput } from "./TitleInput";
import { PromptArea } from "./PromptArea";
import { GeneratedArticle } from "./GeneratedArticle";
import { InstructionsView } from "./InstructionsView";
import { LoadingIndicator } from "./LoadingIndicator";
import { Sidebar } from "./Sidebar";
import { article as dummyArticle } from "./dummy-data";

const App = () => {
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [recentArticles, setRecentArticles] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

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
      const generatedSummary = dummyArticle;
      setArticle(generatedSummary);
      setRecentArticles((prevArticles) => [
        { title: title, summary: generatedSummary },
        ...prevArticles,
      ]);
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

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col dark:bg-slate-950">
      <header className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-900 text-gray-500 dark:text-gray-200">
        <button
          className="block lg:hidden text-gray-500 dark:text-gray-400"
          onClick={toggleSidebar}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="text-center flex-grow">
          <h1 className="text-3xl font-bold">Article Generator</h1>
        </div>
        <div className="w-6"></div> {/* Placeholder for button */}
      </header>

      <div className="flex flex-grow overflow-y-auto">
        {showSidebar && <Sidebar recentArticles={recentArticles} />}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-grow w-4/5 mb-0 overflow-y-auto"
        >
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isDark={isDark}
            switchTheme={switchTheme}
          />
          <div className="flex flex-row justify-center flex-grow">
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
    </div>
  );
};

export default App;
