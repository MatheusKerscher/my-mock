import { useContext } from "react";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import Header from "./components/Header/Header";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="body" className={theme}>
      <GlobalStyles />

      <Header />
    </div>
  );
}

export default App;
