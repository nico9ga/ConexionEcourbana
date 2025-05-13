import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Guide from './pages/guide';
import NotFound from './pages/notFound';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="*" element={<NotFound />} /> {/* Manejo de rutas no existentes */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;