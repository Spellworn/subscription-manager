import { useAppSelector } from "../../app/store.ts";
import { selectCostOfAllSubscriptions } from "../../features/subscriptions/subscriptionsSlice.ts";
import * as S from "./subscriptionsPrice.styled.ts";

export const SubscriptionsPrice = () => {
  const priceOfAllSubscriptions = useAppSelector((state) =>
    selectCostOfAllSubscriptions(state),
  );

  return (
    <S.Container>
      <S.PriceWrapper>
        <S.MonthlyPriceContainer>
          <S.SubscriptionTitle>Цена за месяц</S.SubscriptionTitle>
          <S.MonthlyPriceTitle>{priceOfAllSubscriptions}₽</S.MonthlyPriceTitle>
        </S.MonthlyPriceContainer>
        <S.YearlyPriceContainer>
          <S.SubscriptionTitle>Цена за год</S.SubscriptionTitle>
          <S.YearlyPriceTitle>
            {priceOfAllSubscriptions * 12}₽
          </S.YearlyPriceTitle>
        </S.YearlyPriceContainer>
      </S.PriceWrapper>
    </S.Container>
  );
};
