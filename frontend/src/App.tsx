import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import HomePage from './pages/HomePage.tsx';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<HomePage/>} />
        {/* Other routes go here */}
      </Routes>
    </Router>
  );
};

export default App;