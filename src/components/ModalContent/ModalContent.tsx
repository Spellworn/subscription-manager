import * as S from "./ModalContent.styled.ts";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store.ts";
import {
  selectSubscriptionById,
  subscriptionAddedOrEdited,
  subscriptionDeleted,
} from "../../features/subscriptions/subscriptionsSlice.ts";
import { nanoid } from "@reduxjs/toolkit";
import { ColorForm } from "./ColorForm/ColorForm.tsx";
import { InputForm } from "./InputForms/InputForms.tsx";
import { styleHelper } from "../../utils/styleHelper.ts";
import type { SubscriptionId } from "../../features/subscriptions/Subscription.ts";

interface ModalContentProps {
  onClose: () => void;
  id?: SubscriptionId;
}

export const ModalContent = ({ onClose, id }: ModalContentProps) => {
  const subscription = useAppSelector((state) =>
    selectSubscriptionById(state, id),
  );
  const [color, setColor] = useState(
    subscription?.color ?? styleHelper.getRandomHexColor,
  );
  const [name, setName] = useState(subscription?.name ?? "");
  const [price, setPrice] = useState<number | undefined>(
    subscription?.price ? subscription.price : undefined,
  );
  const [isIncorrectData, setIsIncorrectData] = useState(false);
  const dispatch = useAppDispatch();

  const handleAddSubscription = () => {
    if (name.length > 0 && price) {
      dispatch(
        subscriptionAddedOrEdited({
          id: subscription?.id ?? nanoid(),
          name,
          price,
          color,
        }),
      );
      onClose();
    }

    if (name.length === 0 || !price) {
      setIsIncorrectData(true);
    }
  };

  const handleDeleteSubscription = () => {
    if (id) {
      dispatch(subscriptionDeleted(id));
      onClose();
    }
  };

  // TODO: react hook form
  return (
    <S.Overlay
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <S.ModalCard>
        <S.Container>
          <S.Title>
            {subscription ? "Редактировать подписку" : "Добавить подписку"}
          </S.Title>
          <InputForm
            type="name"
            isIncorrectData={isIncorrectData}
            value={name}
            setValue={setName}
          />
          <InputForm
            type="price"
            isIncorrectData={isIncorrectData}
            value={price}
            setValue={setPrice}
          />
          <ColorForm color={color} setColor={setColor} />
          <S.ButtonContainer>
            <S.CancelButton onClick={onClose}>Отмена</S.CancelButton>
            {id && (
              <S.DeleteButton onClick={handleDeleteSubscription}>
                Удалить
              </S.DeleteButton>
            )}
            <S.AddButton onClick={handleAddSubscription}>Добавить</S.AddButton>
          </S.ButtonContainer>
        </S.Container>
      </S.ModalCard>
    </S.Overlay>
  );
};
