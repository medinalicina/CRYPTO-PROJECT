import Header from './components/Header/Header';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from './components/Pages/NewsPage';
import ExchangesPage from './components/Pages/ExchangesPage';
import Crypto from './components/Pages/Crypto';
import LogoPage from './components/Pages/HomePage';
import HomePage from './components/Pages/HomePage';
import Card from './components/Card/Card';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{ padding: "0 20%", minHeight: "66.5vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/exchanges" element={<ExchangesPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
