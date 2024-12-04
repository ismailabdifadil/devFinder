import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./spinner.css";
import App from "./App.jsx";
import ThemeProvider from "./Context/ThemContext.jsx";
import GithubProvider from "./Context/GithubContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <GithubProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </GithubProvider>
  </ThemeProvider>
);
