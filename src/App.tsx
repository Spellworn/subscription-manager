import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { MainPage } from "./pages/MainPage.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { useEffect, useState } from "react";
import { themeHelper } from "./utils/themeHelper.ts";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme.ts";

const App = () => {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useState(darkThemeMq.matches);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };
    darkThemeMq.addEventListener("change", handleChange);

    return () => {
      darkThemeMq.removeEventListener("change", handleChange);
    };
  }, [darkThemeMq]);

  return (
    <ThemeProvider theme={theme(themeHelper.setColorPalette(isDark))}>
      <Provider store={store}>
        <GlobalStyles />
        <MainPage toggleTheme={() => setIsDark((prev) => !prev)}/>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
