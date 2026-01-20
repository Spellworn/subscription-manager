import { Header } from "../components/Header/Header.tsx";
import { SubscriptionsTreemap } from "../components/SubscriptionsTreemap/SubscriptionsTreemap.tsx";
import { useAppSelector } from "../app/store.ts";
import { selectIsSubscriptionsExist } from "../features/subscriptions/subscriptionsSlice.ts";
import { SubscriptionsPrice } from "../components/SubscriptionsPrice/SubscriptionsPrice.tsx";
import * as S from "./MainPage.styled.ts";

interface MainPageProps {
  toggleTheme: () => void;
}

export const MainPage = ({ toggleTheme }: MainPageProps) => {
  const isSubscriptionsExist = useAppSelector( selectIsSubscriptionsExist );

  return (
    <S.Container>
      <Header toggleTheme={toggleTheme} />
      <S.SubscriptionsContainer>
        <SubscriptionsTreemap />
      </S.SubscriptionsContainer>
      {isSubscriptionsExist && <SubscriptionsPrice />}
    </S.Container>
  );
};
