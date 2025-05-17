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

  transition: all 0.3s ease-in-out;
}

.dark-theme {
  --background-primary: #121212;
  --background-secondary: #1e1e1e;
  --color-secondary: #949494;
  --color-tertiary: #e2e2e2;

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
  height: 100dvh;
}
`;

export default GlobalStyles;
