import * as React from 'react';
import styled from 'styled-components';

export type Props = {
  children: React.ReactNode;
  onClose?: () => void;
  isMobile?: boolean;
} & React.HTMLAttributes<HTMLElement>;

const Modal: React.FC<Props> = (props: Props) => {
  const { children, onClose, isMobile } = props;

  return (
    <Styled.ModalBox data-testid="modal">
      <Styled.Shim onClick={onClose} />
      <Styled.Container isMobile={isMobile}>
        <Styled.Content>{children}</Styled.Content>
      </Styled.Container>
    </Styled.ModalBox>
  );
};

const Styled = {
  ModalBox: styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  `,
  Container: styled.div<Props>`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.isMobile ? '90%' : '430px')};
    padding: ${(props) => props.theme.spacings.xl};
    border-radius: 5px;
    z-index: 9999;
    max-height: 90vh;
    background-color: ${(props) => props.theme.colors.white};
    transition: all 0.5s;
    overflow: scroll;
  `,
  Content: styled.div`
    padding: ${(props) => props.theme.spacings.m};
  `,
  Shim: styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    opacity: 0.4;
    background-color: ${(props) => props.theme.colors.black90};
  `,
};

export default Modal;
