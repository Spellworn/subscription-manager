import { GlobalStyles } from "./styles/GlobalStyles.tsx";
import { MainPage } from "./pages/MainPage.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <MainPage />
    </Provider>
  );
};

export default App;
