import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Tour } from "./components/Tour/Tour";
import { Language } from "./components/Language/Language";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Tour" element={<Tour />} />
        <Route path="/Language" element={<Language />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
