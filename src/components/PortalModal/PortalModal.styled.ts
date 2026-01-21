import styled from "@emotion/styled";

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
