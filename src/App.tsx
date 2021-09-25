import { Provider } from 'react-redux';
import store from 'store/store';
import { WebSocketProvider } from 'store/machine/client';
import Tile from 'containers/Dashboard';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';
import { useRef } from 'react';

function App() {
  let socket: any = useRef(null);

  return (
    <Provider store={store}>
      <WebSocketProvider socket={socket.current}>
        <ThemeProvider theme={theme}>
          <Tile />
        </ThemeProvider>
      </WebSocketProvider>
    </Provider>
  );
}

export default App;
