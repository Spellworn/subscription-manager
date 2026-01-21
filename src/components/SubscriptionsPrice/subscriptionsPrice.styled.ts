import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.size.xxxl};
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.size.xl};
  padding: ${({ theme }) => theme.size.xl} ${({ theme }) => theme.size.xxxl};
  background-color: ${({ theme }) => theme.palette.treemapBackground};
`;

export const MonthlyPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.s};
`;

export const YearlyPriceContainer = styled(MonthlyPriceContainer)`
  align-items: flex-end;
`;

export const SubscriptionTitle = styled.h5`
  margin: 0;
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 400;
`;

export const MonthlyPriceTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.size.xl};
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const YearlyPriceTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.size.xl};
  color: ${({ theme }) => theme.palette.text.yearlySubscriptionText};
`;
