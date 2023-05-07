import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Footer from "./components/Footer/Footer.tsx";
import HomePage from './pages/HomePage.tsx';
import CategoryPage from './pages/CategoryPage.tsx';
import ProductPage from './pages/ProductPage.tsx';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/> }/>
        <Route path="Categoria" element={<CategoryPage />} />
        <Route path="Product" element={<ProductPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;