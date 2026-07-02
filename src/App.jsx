import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from './context/LanguageContext';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}