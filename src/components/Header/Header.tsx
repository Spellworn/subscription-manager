import * as S from "./Header.styled.ts";
import { PortalModal } from "../PortalModal/PortalModal.tsx";

interface HeaderProps {
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: HeaderProps) => {
  return (
    <S.Header>
      <S.Title>Мои подписки</S.Title>
      <S.Container>
        <PortalModal />
        <S.Button onClick={toggleTheme}>Тема</S.Button>
      </S.Container>
    </S.Header>
  );
};
