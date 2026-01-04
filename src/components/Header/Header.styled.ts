import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: none;
  background-color: #070707;
  color: #fdfdfd;
  font-size: 1rem;
  transition:
    background-color 0.3s,
    transform 0.3s ease;

  &:hover {
    background-color: #171717;
    transform: scale(0.98);
  }
`;
