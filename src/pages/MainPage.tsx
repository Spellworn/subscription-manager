import { Header } from "../components/Header/Header.tsx";
import { SubscriptionsTreemap } from "../components/SubscriptionsTreemap/SubscriptionsTreemap.tsx";
interface MainPageProps {
  toggleTheme: () => void;
}

export const MainPage = ({ toggleTheme }: MainPageProps) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <SubscriptionsTreemap />
    </div>
  );
};
