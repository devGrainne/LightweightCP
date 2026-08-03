import { BrowserRouter, Routes, Route } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TestBackendPage from "./pages/TestBackendPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<WelcomePage />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="/register" element={<RegistrationPage />} />

                <Route path="/test-backend" element={<TestBackendPage />} />

            </Routes>
        </BrowserRouter>

    );
}

export default App;