import * as S from "../ModalContent.styled.tsx";
import type { Dispatch, SetStateAction } from "react";

interface InputFormsProps {
  type: "price" | "name";
  isIncorrectData: boolean;
  name?: string;
  setName?: Dispatch<SetStateAction<string>>;
  price?: number;
  setPrice?: Dispatch<SetStateAction<number | undefined>>;
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
            : setPrice?.(
                e.target.value === "" ? undefined : Number(e.target.value),
              )
        }
        isIncorrectData={
          type === "name"
            ? isIncorrectData && name?.length === 0
            : isIncorrectData && !price
        }
        type={type === "name" ? "text" : "number"}
        value={type === "name" ? name : (price ?? "")}
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
