import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const overlayFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalAppear = keyframes`
  from {
    opacity: 0;
    transform: scale(0.96) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;

  background: ${({ theme }) => theme.palette.overlay};
  backdrop-filter: blur(0.625rem);
  -webkit-backdrop-filter: blur(0.625rem);

  display: flex;
  justify-content: center;
  place-items: center;
  padding: ${({ theme }) => theme.size.xl};
  animation: ${overlayFadeIn} 0.18s ease-out;
`;

export const ModalCard = styled.div`
  width: 25rem;
  max-width: 100%;
  background: ${({ theme }) => theme.palette.modalBackground};
  border-radius: 1.375rem;
  box-shadow: 0 1.125rem 3.125rem rgba(0, 0, 0, 0.18);
  padding: 2.5rem ${({ theme }) => theme.size.xxl};
  animation: ${modalAppear} 0.22s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.xxl};
`;

export const Title = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.size.l};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.size.xs};
`;

interface LabelProps {
  isIncorrectData?: boolean;
}

export const Label = styled.label<LabelProps>`
  font-size: ${({ theme }) => theme.size.m};
  color: ${({ isIncorrectData }) =>
    isIncorrectData ? "#af0000" : ({ theme }) => theme.palette.text.secondary};
`;

interface InputProps {
  isIncorrectData?: boolean;
}

export const Input = styled.input<InputProps>`
  padding: ${({ theme }) => theme.size.m};
  border-radius: ${({ theme }) => theme.size.xxl};
  border: 0 solid
    ${({ isIncorrectData }) =>
      isIncorrectData ? "#af0000" : ({ theme }) => theme.palette.inputBorder};
  background: ${({ theme }) => theme.palette.inputBackground};
  color: ${({ theme }) => theme.palette.text.primary};

  font-size: ${({ theme }) => theme.size.m};
  outline: none;

  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease,
    background 0.15s ease;

  ::placeholder {
    color: ${({ theme }) => theme.palette.text.muted};
  }
`;

const BaseButton = styled.button`
  padding: ${({ theme }) => theme.size.s} ${({ theme }) => theme.size.l};
  border-radius: ${({ theme }) => theme.size.xxl};
  border: none;
  width: 100%;
  font-size: ${({ theme }) => theme.size.m};
  cursor: pointer;

  transition:
    background-color 0.3s,
    transform 0.3s ease;

  &:hover {
    transform: scale(0.98);
  }
`;

export const AddButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.palette.button.addButton};
  color: ${({ theme }) => theme.palette.text.accent};

  &:hover {
    background-color: ${({ theme }) => theme.palette.button.addButtonHover};
  }
`;

export const CancelButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.palette.button.cancelButton};
  color: ${({ theme }) => theme.palette.text.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.palette.button.cancelButtonHover};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.size.xs};
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.size.m};
`;

export const ColorInput = styled.input`
  height: 5rem;
  width: 5rem;
  border-radius: ${({ theme }) => theme.size.l};
  cursor: pointer;
  border: 0.1rem solid;
  padding: 0;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    border: none;
    border-radius: inherit;
  }
`;

export const HexInput = styled(Input)`
  flex: 1;
  width: 100%;
  min-width: 0;
`;

export const IncorrectDataText = styled.span`
  font-size: ${({ theme }) => theme.size.s};
  color: #af0000;
`;
