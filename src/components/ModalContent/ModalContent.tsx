import * as S from "./ModalContent.styled.tsx";
import { useState } from "react";
import { useAppDispatch } from "../../app/store.ts";
import { subscriptionAdded } from "../../features/subscriptions/subscriptionsSlice.ts";
import { nanoid } from "@reduxjs/toolkit";
import { ColorForm } from "./ColorForm/ColorForm.tsx";
import { InputForm } from "./InputForms/InputForms.tsx";

interface ModalContentProps {
  onClose: () => void;
}

export const ModalContent = ({ onClose }: ModalContentProps) => {
  const [color, setColor] = useState("#EC1313");
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>();
  const [isIncorrectData, setIsIncorrectData] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddSubscription = () => {
    if (name.length > 0 && price) {
      dispatch(
        subscriptionAdded({
          id: nanoid(),
          name: name,
          price: price,
          color: color,
        }),
      );
      setIsIncorrectData(false);
      onClose();
    }

    if (name.length === 0 || !price) {
      setIsIncorrectData(true);
    }
  };

  return (
    <S.Overlay
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <S.ModalCard>
        <S.Container>
          <S.Title>Добавить подписку</S.Title>
          <InputForm
            type={"name"}
            isIncorrectData={isIncorrectData}
            name={name}
            setName={setName}
          />
          <InputForm
            type={"price"}
            isIncorrectData={isIncorrectData}
            price={price}
            setPrice={setPrice}
          />
          <ColorForm color={color} setColor={setColor} />
          <S.ButtonContainer>
            <S.CancelButton onClick={onClose}>Отмена</S.CancelButton>
            <S.AddButton onClick={handleAddSubscription}>Добавить</S.AddButton>
          </S.ButtonContainer>
        </S.Container>
      </S.ModalCard>
    </S.Overlay>
  );
};
