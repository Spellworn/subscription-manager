import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { MainPage } from "./pages/MainPage.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { useEffect, useRef, useState } from "react";
import { themeHelper } from "./utils/themeHelper.ts";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme.ts";

const App = () => {
  const darkThemeMqRef = useRef(
    window.matchMedia("(prefers-color-scheme: dark)"),
  );
  const [isDark, setIsDark] = useState(darkThemeMqRef.current.matches);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    darkThemeMqRef.current.addEventListener("change", handleChange);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      darkThemeMqRef.current.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <ThemeProvider theme={theme(themeHelper.setColorPalette(isDark))}>
      <Provider store={store}>
        <GlobalStyles />
        <MainPage toggleTheme={() => setIsDark((prev) => !prev)} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
