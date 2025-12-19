import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
