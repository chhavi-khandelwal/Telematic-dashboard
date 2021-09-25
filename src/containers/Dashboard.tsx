import { useDispatch, useSelector } from 'react-redux';
import {
  getAlertedMachines,
  getMachines,
} from 'store/machine/machine.selectors';
import Table from 'components/Table';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import styled from 'styled-components';
import { removeAlertedMachines } from 'store/machine/machine.actions';
import MachineBlock from '../components/MachineBlock';
import SideBar from 'components/SideBar';

const Dashboard = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const alertedMachines = useSelector(getAlertedMachines);
  const machines = useSelector(getMachines);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!showAlert && alertedMachines.length) {
      setShowAlert(true);
    }
  }, [showAlert, alertedMachines]);

  return (
    <Styled.Dashboard>
      <Styled.Heading>Telematic Dashboard</Styled.Heading>
      <Styled.Container>
        <Table data={machines} setPageNumber={setPageNumber} />
        <SideBar alertedMachines={alertedMachines} />
      </Styled.Container>
    </Styled.Dashboard>
  );
};

const Styled = {
  Heading: styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Full: styled.div`
    width: 100%;
  `,
  Dashboard: styled.div`
    padding: ${(props) => props.theme.spacings.xl};
  `,
  Container: styled.div`
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;

    padding: ${(props) => props.theme.spacings.xl};
  `,
};

export default Dashboard;
