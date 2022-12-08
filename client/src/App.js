import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CommunityPage from "./pages/CommunityPage";
import CommunityDetail from "./components/Detail/CommunityDetail";
import InvestPage from "./pages/InvestPage";
import StartupPage from "./pages/StartupPage";
import StartupDetail from "./components/StartupPage/StartupDetail";
import CreateProjectPage from "./pages/CreateProjectPage";
import PostAdd from "./components/PostAdd/PostAdd";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<CommunityDetail />} />
          <Route path="/postadd" element={<PostAdd />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/startup" element={<StartupPage />} />
          <Route path="/startup/:id" element={<StartupDetail />} />
          <Route path="/project" element={<CreateProjectPage />} />
          <Route path="mypage/:id" element={<MyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
