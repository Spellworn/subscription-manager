import * as S from "./ModalContent.styled.tsx";
import { useState } from "react";

interface ModalContentProps {
  onClose: () => void;
}

export const ModalContent = ({ onClose }: ModalContentProps) => {
  const [color, setColor] = useState("#EC1313");

  return (
    <S.Overlay
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <S.ModalCard>
        <S.Container>
          <S.Title>Добавить подписку</S.Title>
          <S.Form>
            <S.Label>Название подписки</S.Label>
            <S.Input placeholder={"Spotify, Яндекс Плюс и т.д."} />
          </S.Form>
          <S.Form>
            <S.Label>Стоимость подписки</S.Label>
            <S.Input placeholder={"0.00"} type="number" />
          </S.Form>
          <S.Form>
            <S.Label htmlFor="color">Выберите цвет</S.Label>
            <S.ColorContainer>
              <S.ColorInput
                type="color"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                style={{ background: color }}
              />
              <S.HexInput
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="#FFFFFF"
                pattern="^#[0-9A-Fa-f]{6}$"
              />
            </S.ColorContainer>
          </S.Form>
          <S.ButtonContainer>
            <S.CancelButton onClick={onClose}>Отмена</S.CancelButton>
            <S.AddButton>Добавить</S.AddButton>
          </S.ButtonContainer>
        </S.Container>
      </S.ModalCard>
    </S.Overlay>
  );
};
