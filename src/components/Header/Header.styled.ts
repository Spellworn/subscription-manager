import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.size.xxl} ${({ theme }) => theme.size.xxxl} 0;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.size.xl};
`;

export const Button = styled.button`
  padding: ${({ theme }) => theme.size.s} ${({ theme }) => theme.size.l};
  border-radius: ${({ theme }) => theme.size.s};
  border: none;
  background-color: ${({ theme }) => theme.palette.button.addButton};
  color: ${({ theme }) => theme.palette.text.accent};
  font-size: ${({ theme }) => theme.size.m};
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.palette.button.addButtonHover};
    transform: scale(0.98);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.size.m};
`;
