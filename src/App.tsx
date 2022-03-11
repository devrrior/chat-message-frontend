import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './App.styles';
import { ChatPage } from './pages/Chat/ChatPage/ChatPage';
import { LoginPage } from './pages/Login/LoginPage/LoginPage';
import { RequireAuth } from './utils/RequireAuth';

function App() {
  return (
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
  );
}

export default App;
