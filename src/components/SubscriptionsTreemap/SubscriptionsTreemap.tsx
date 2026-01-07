import { Treemap } from "recharts";
import { SubscriptionTreemapContent } from "./SubscriptionTreemapContent/SubscriptionTreemapContent.tsx";
import { useAppSelector } from "../../app/store.ts";
import { selectSubscriptionsIdsAndSize } from "../../features/subscriptions/subscriptionsSlice.ts";
import * as S from "./SubscriptionTreemap.styled.ts";
import { useAppTheme } from "../../styles/theme.ts";

export const SubscriptionsTreemap = () => {
  const subscriptionsData = useAppSelector((state) =>
    selectSubscriptionsIdsAndSize(state),
  );
  const theme = useAppTheme();

  return (
    subscriptionsData.length > 0 && (
      <S.TreemapContainer>
        <S.StyledResponsive>
          <Treemap
            data={subscriptionsData}
            type={"flat"}
            dataKey="size"
            fill={theme.palette.treemapBackground}
            content={(p) => <SubscriptionTreemapContent {...p} />}
          ></Treemap>
        </S.StyledResponsive>
      </S.TreemapContainer>
    )
  );
};
