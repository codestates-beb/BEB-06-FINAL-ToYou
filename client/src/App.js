import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (

  <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
          <Footer />
        </div>
  </BrowserRouter>
  );
}

export default App;