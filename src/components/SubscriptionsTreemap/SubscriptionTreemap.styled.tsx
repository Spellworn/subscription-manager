import styled from "@emotion/styled";
import { ResponsiveContainer } from "recharts";

export const TreemapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  height: 70vh;
  padding: ${({ theme }) => theme.size.xl};
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.treemapBackground};
`;

export const StyledResponsive = styled(ResponsiveContainer)`
  width: 100%;
  height: 100%;
`;
