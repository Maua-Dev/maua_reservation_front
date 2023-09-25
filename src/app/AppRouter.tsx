import { Route, Routes } from "react-router-dom";
import Home from "./view/pages/Home/Home";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<h1>BEM-VINDO AO MAUA RESERVATION</h1>} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}