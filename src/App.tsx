import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import NotationRepas from './pages/NotationRepas';
import MenuDuJour from './pages/MenuDuJour';
import Favoris from './pages/Favoris';
import HistoriqueRepas from './pages/HistoriqueRepas';
import Contact from './pages/Contact';
import TableauDeBordAdmin from './pages/TableauDeBordAdmin';
import { AuthProvider } from './contexts/AuthContext';
import { MealProvider } from './contexts/MealContext';

function App() {
  return (
    <AuthProvider>
      <MealProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/noter" element={<NotationRepas />} />
                <Route path="/menu" element={<MenuDuJour />} />
                <Route path="/favoris" element={<Favoris />} />
                <Route path="/historique" element={<HistoriqueRepas />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<TableauDeBordAdmin />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </MealProvider>
    </AuthProvider>
  );
}

export default App;