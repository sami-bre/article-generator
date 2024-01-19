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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a title."); // TODO: use a modal instead
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("https://llm-summary.onrender.com/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "title": title,
          "prompt": prompt,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data from the API.");
      }
      const generatedSummary = (await response.json())["data"];
      setArticle(generatedSummary);
      setRecentArticles((prevArticles) => [
        { title: title, summary: generatedSummary },
        ...prevArticles,
      ]);
    } catch (error) {
      console.error(error);
      alert("An error occurred while fetching data from the API.");
    } finally {
      setLoading(false);
    }
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

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className="h-screen flex flex-col dark:bg-slate-950">
      <Sidebar
        recentArticles={recentArticles}
        onClose={closeSidebar}
        showSidebar={showSidebar}
      />
      <header className="flex justify-between items-center px-4 py-2 bg-[#D1DDDB]/[0.3] dark:bg-gray-900 text-gray-500 dark:text-gray-200">
        <div>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 dark:text-gray-400 focus:outline-none"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="text-center flex-grow">
          <h1 className="text-3xl font-bold text-[#283B42] dark:text-gray-400">
            Article Generator
          </h1>
        </div>
        <div className="w-6"></div>
      </header>

      <div className="flex flex-grow overflow-y-auto">
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
              <GeneratedArticle title={title} article={article} />
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
