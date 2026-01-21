import * as S from "../ModalContent.styled.ts";
import type { ChangeEventHandler } from "react";

interface InputFormsProps<
  TType extends "price" | "name",
  TValue extends number | string | undefined,
  TSetValue extends (value: TValue) => void,
> {
  type: TType;
  isIncorrectData: boolean;
  value: TValue | undefined;
  setValue: TSetValue;
}

export const InputForm = <
  TType extends "price" | "name",
  TValue extends number | string | undefined,
  TSetValue extends (value: TValue) => void,
>({
  type,
  isIncorrectData,
  value,
  setValue,
}: InputFormsProps<TType, TValue, TSetValue>) => {
  const isDataIncorrect =
    typeof value === "string"
      ? isIncorrectData && value?.length === 0
      : isIncorrectData && !value;

  const onChangeEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
    let newValue = undefined as TValue;

    if (typeof value === "string") {
      newValue = e.target.value as TValue;
    } else if (typeof value === "number") {
      newValue = (
        e.target.value === "" ? undefined : Number(e.target.value)
      ) as TValue;
    }

    setValue(newValue);
  };

  return (
    <S.Form>
      <S.Label htmlFor={type} isIncorrectData={isDataIncorrect}>
        {type === "name" ? "Название подписки" : "Стоимость подписки"}
      </S.Label>
      <S.Input
        id={type}
        placeholder={type === "name" ? "Spotify, Яндекс Плюс и т.д." : "0.00"}
        onChange={onChangeEvent}
        isIncorrectData={isDataIncorrect}
        type={type === "name" ? "text" : "number"}
        value={value ?? ""}
      />
      {isIncorrectData && (
        <>
          {typeof value === "string" && value?.length === 0 && (
            <S.IncorrectDataText>Введите название подписки</S.IncorrectDataText>
          )}
          {!value && value === undefined && (
            <S.IncorrectDataText>Введите цену подписки</S.IncorrectDataText>
          )}
        </>
      )}
    </S.Form>
  );
};
