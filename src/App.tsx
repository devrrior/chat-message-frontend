import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './App.styles';
import { LoginPage } from './pages/Login/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='login/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
