import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --font-family: "Poppins", sans-serif;
  --color-primary: #fc1607;
}

.light-theme {
  --background-primary: #fafafa;
  --background-secondary: #ffffff;
  --color-secondary: #121212;
  --color-tertiary: #aaaaaa;
  --shadow: 4px 4px 8px 2px #dbdbdb;

  transition: all 0.3s ease-in-out;
}

.dark-theme {
  --background-primary: #121212;
  --background-secondary: #1e1e1e;
  --color-secondary: #e2e2e2;
  --color-tertiary: #949494;
  --shadow: none;

  transition: all 0.3s ease;
}

* {
  font-family: var(--font-family);
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#body {
  background-color: var(--background-primary);
  min-height: 100dvh;
}
`;

export default GlobalStyles;
