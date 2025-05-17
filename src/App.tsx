import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import TabsMock from "./components/TabsMock";
import { Toaster } from "react-hot-toast";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="body" className={theme}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            border: theme === "dark-theme" ? "1px solid var(--color-tertiary)" : "none",
            color: "var(--color-secondary)",
            backgroundColor: "var(--background-secondary)",
            textAlign: "center"
          },
        }}
      />

      <GlobalStyles />

      <Header />

      <TabsMock theme={theme} />
    </div>
  );
}

export default App;
