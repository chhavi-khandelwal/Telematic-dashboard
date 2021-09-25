import React, { createContext, useEffect } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { addAlertedMachines, updateMachines } from './machine.actions';
import { MachineConfig } from './machine.types';
import { setAlert } from 'utils/getAlert';

export const WebSocketProvider = ({ socket, children }: any) => {
  const WebSocketContext = createContext<any>(null);
  let ws;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) {
      //@ts-ignore
      // eslint-disable-next-line react-hooks/exhaustive-deps
      socket = io('http://localhost:5000');

      socket.on('machineUpdater', (data: MachineConfig[]) => {
        dispatch(addAlertedMachines([setAlert(data[0])]));
        dispatch(updateMachines(data));
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
      ws = {
        socket: socket.current,
      };
    }
    return () => socket.disconnect();
  }, [socket]);

  return (
    <WebSocketContext.Provider value={ws}>{children}</WebSocketContext.Provider>
  );
};
