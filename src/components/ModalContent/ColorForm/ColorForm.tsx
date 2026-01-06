import * as S from "../ModalContent.styled.tsx";

interface ColorFormProps {
  color: string;
  setColor: (e: string) => void;
}

export const ColorForm = ({ color, setColor }: ColorFormProps) => {
  return (
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
          readOnly
        />
      </S.ColorContainer>
    </S.Form>
  );
};
