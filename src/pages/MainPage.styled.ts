import styled from "@emotion/styled";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.xl};
`;

export const SubscriptionsContainer = styled("div")`
  display: flex;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.size.xxxl};
`;
