import styled from "@emotion/styled";
import { ResponsiveContainer } from "recharts";

export const TreemapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60vh;
  padding: ${({ theme }) => theme.size.xl};
  border-radius: ${({ theme }) => theme.size.xl};
  background: ${({ theme }) => theme.palette.treemapBackground};
`;

export const StyledResponsive = styled(ResponsiveContainer)`
  width: 100%;
  height: 100%;
`;
