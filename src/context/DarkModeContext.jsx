import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkmodeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(Prefers-color-scheme:dark)").matches,
    "isDarkMode"
  );

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkmodeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkmodeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkmodeContext);
  if (context === undefined)
    throw new Error("Darkmode contex was used outside Darkmode Provider");
  return context;
}

export { DarkModeProvider, useDarkMode };
