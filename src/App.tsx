import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './App.styles';
import { AuthProvider } from './context/AuthContext/AuthProvider';
import { ChatPage } from './pages/Chat/ChatPage/ChatPage';
import { LoginPage } from './pages/Login/LoginPage/LoginPage';
import { RequireAuth } from './utils/RequireAuth';
import { WebsocketProvider } from './context/WebSocketContext/WebSocketProvider';

function App() {
  return (
    <WebsocketProvider>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path='login/' element={<LoginPage />} />
            <Route
              path='/'
              element={
                <RequireAuth>
                  <ChatPage />
                </RequireAuth>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </WebsocketProvider>
  );
}

export default App;
