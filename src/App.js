import Header from './components/Header/Header';
import './app.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewsPage from './components/Pages/NewsPage';
import ExchangesPage from './components/Pages/ExchangesPage';
import Crypto from './components/Pages/Crypto';
import LogoPage from './components/Pages/HomePage';
import HomePage from './components/Pages/HomePage';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <div className='parent'> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/exchanges" element={<ExchangesPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
