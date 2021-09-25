import { MachineConfig } from 'store/machine/machine.types';
import styled from 'styled-components';

interface Props {
  alertedMachine: MachineConfig;
}

const MachineBlock = (props: Props) => {
  const { OEMName, serialNumber, model } = props.alertedMachine.equipmentHeader;
  const { alert } = props.alertedMachine;

  return (
    <Styled.Block>
      <Styled.MachineDetails>
        <Styled.TextBlock>
          <Styled.Label>Name</Styled.Label>
          <Styled.Text>{OEMName}</Styled.Text>
        </Styled.TextBlock>
        <Styled.TextBlock>
          <Styled.Label>Serial Number</Styled.Label>
          <Styled.Text>{serialNumber}</Styled.Text>
        </Styled.TextBlock>
        <Styled.TextBlock>
          <Styled.Label>Model</Styled.Label>
          <Styled.Text>{model}</Styled.Text>
        </Styled.TextBlock>
      </Styled.MachineDetails>
      <Styled.AlertBlock>
        <Styled.AlertLabel>Alert</Styled.AlertLabel>
        <Styled.Alert>{alert}</Styled.Alert>
      </Styled.AlertBlock>
    </Styled.Block>
  );
};

const Styled = {
  AlertBlock: styled.div`
    width: 100%;
    text-align: center;
    font-weight: bold;
    border-bottom: 2px solid ${(props) => props.theme.colors.gray1};
  `,
  AlertLabel: styled.span`
    color: ${(props) => props.theme.colors.pinkDark};
  `,
  Alert: styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  MachineDetails: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Block: styled.div`
    padding: ${(props) => props.theme.spacings.l};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `,
  Text: styled.span`
    font-size: 16px;
  `,
  TextBlock: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${(props) => props.theme.spacings.m};
  `,
  Label: styled.span`
    font-size: 13px;
    font-weight: bold;
    margin-bottom: ${(props) => props.theme.spacings.s};
  `,
};

export default MachineBlock;
