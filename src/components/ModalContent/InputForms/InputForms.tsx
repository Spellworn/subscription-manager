import * as S from "../ModalContent.styled.tsx";

interface InputFormsProps {
  type: "price" | "name";
  isIncorrectData: boolean;
  name?: string;
  setName?: (e: string) => void;
  price?: number;
  setPrice?: (e: number) => void;
}

export const InputForm = ({
  type,
  isIncorrectData,
  name,
  setName,
  price,
  setPrice,
}: InputFormsProps) => {
  return (
    <S.Form>
      <S.Label
        htmlFor={type}
        isIncorrectData={
          type === "name"
            ? isIncorrectData && name?.length === 0
            : isIncorrectData && !price
        }
      >
        {type === "name" ? "Название подписки" : "Стоимость подписки"}
      </S.Label>
      <S.Input
        id={type}
        placeholder={type === "name" ? "Spotify, Яндекс Плюс и т.д." : "0.00"}
        onChange={(e) =>
          type === "name"
            ? setName?.(e.target.value)
            : setPrice?.(Number(e.target.value))
        }
        isIncorrectData={
          type === "name"
            ? isIncorrectData && name?.length === 0
            : isIncorrectData && !price
        }
        type={type === "name" ? "text" : "number"}
      />
      {isIncorrectData && name?.length === 0 && (
        <S.IncorrectDataText>Введите название подписки</S.IncorrectDataText>
      )}
      {isIncorrectData && !price && name === undefined && (
        <S.IncorrectDataText>Введите цену подписки</S.IncorrectDataText>
      )}
    </S.Form>
  );
};
