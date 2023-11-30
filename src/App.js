import Header from "./components/Header/header";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from "./components/Pages/News/NewsPage";
import ExchangesPage from "./components/Pages/ExchangePage/ExchangesPage";
import Crypto from "./components/Pages/Crypto/Crypto";
import HomePage from "./components/Pages/Home/HomePage";

import Footer from "./components/Footer/Footer";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Poppins:wght@500&family=Raleway:wght@900&display=swap');
</style>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <div className="parent">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/exchanges" element={<ExchangesPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
