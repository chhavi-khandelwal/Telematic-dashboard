import { useSelector } from 'react-redux';
import { getAlertedMachines } from 'store/machine/machine.selectors';
import styled from 'styled-components';
import { MachineConfig } from 'store/machine/machine.types';
import MachineBlock from './MachineBlock';
import Cross from 'assets/images/cross.png';
import Alert from './Alert';

interface Props {
  alertedMachines: MachineConfig[];
}

const SideBar = (props: Props) => {
  const alertedMachines = useSelector(getAlertedMachines);

  const onClose = (id: number) => {};

  return (
    <Styled.SideBar>
      {alertedMachines.map((aM) => (
        <Styled.BlockContainer>
          <Alert alertedMachine={aM} />
        </Styled.BlockContainer>
      ))}
    </Styled.SideBar>
  );
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
