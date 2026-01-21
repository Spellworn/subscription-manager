import { useState } from "react";
import * as S from "./PortalModal.styled.ts";
import { createPortal } from "react-dom";
import { ModalContent } from "../ModalContent/ModalContent.tsx";

export const PortalModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <S.Button onClick={() => setShowModal(true)}>Добавить подписку</S.Button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
};
