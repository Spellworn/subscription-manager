import { Header } from "../components/Header/Header.tsx";
interface MainPageProps {
  toggleTheme: () => void;
}

export const MainPage = ({ toggleTheme }: MainPageProps) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
    </div>
  );
};
