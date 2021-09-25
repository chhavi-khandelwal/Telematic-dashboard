import styled from 'styled-components';
import { MachineConfig } from 'store/machine/machine.types';
import MachineBlock from './MachineBlock';
import Cross from 'assets/images/cross.png';
import { useState } from 'react';

interface Props {
  alertedMachine: MachineConfig;
}

const SideBar = (props: Props) => {
  const [showAlert, setShowAlert] = useState(true);

  const { alertedMachine } = props;
  const onClose = (id: number) => setShowAlert(false);

  return showAlert ? (
    <Styled.BlockContainer>
      <Styled.Close onClick={() => onClose(alertedMachine.id)}>
        <img src={Cross} width={16} height={16} alt="close alert" />
      </Styled.Close>
      <MachineBlock alertedMachine={alertedMachine} />
    </Styled.BlockContainer>
  ) : null;
};

const Styled = {
  BlockContainer: styled.div``,
  Close: styled.button`
    border: 0;
    background: none;
  `,
  SideBar: styled.div`
    height: 100vh;
    width: 20%;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: ${(props) => props.theme.spacings.xl};
    top: 0;
    bottom: 0;
    overflow: scroll;
  `,
};

export default SideBar;
